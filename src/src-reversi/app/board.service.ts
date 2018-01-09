import { Injectable } from '@angular/core';

import { Observable }      from 'rxjs/Observable';
import { Subject }         from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Board, GameHistory, GameHistoryItem } from './typedef';

const BoardRoot = 'board';
const HistoryRoot = 'history';

@Injectable()
export class BoardService {
    constructor(private db: AngularFireDatabase) { }

    connectBoard(boardName:string):Subject<Board> {
        let subject = new Subject<Board>();

        // PART 1. find board ID
        let listSubscription = this.db.list<Board>(BoardRoot, 
            ref => ref.orderByChild('name').equalTo(boardName)).snapshotChanges().map(changes => {
                return changes.map(c => ({ "$key": c.payload.key, ...c.payload.val() }));
            })
        .subscribe((boards:Board[]) => {
            let board:Board;

            console.log('**** connectBoard ****');

            // 1. make board
            if (boards.length == 0) {
                // just make new board and then received on next else block
                // key is generated locally
                let ref = this.db.list(BoardRoot).push(
                    { name: boardName, white: false, black: false }
                );
                console.log(`make NEW board ID = ${ref.key}`);
            }
            // 2. read board
            else {
                if (boards.length > 1) {
                    console.error(`ERROR: duplicate board name : ${boardName}`);
                }
                console.log(`board ${boardName} connected :`);

                let board = boards[0];
                console.dir(board);

                listSubscription.unsubscribe();

                // PART 2. monitoring board ID
                let objectSubscription = this.db.object(BoardRoot + '/' + board.$key).snapshotChanges().map(c => {
                    return { "$key": c.payload.key, ...c.payload.val() };
                })
                .subscribe((board:Board) => {
                    console.log(`board ${boardName} received or changed :`);
                    console.dir(board);
                    // TODO: $value does not exist in v5
                    if (board.$value === null) {
                        console.log(`board ${boardName} removed`);
                        objectSubscription.unsubscribe();
                    }
                    subject.next(board);
                })
            }
        });

        return subject;
    }

    connectHistory(boardID:string):Subject<GameHistory> {
        let subject = new Subject<GameHistory>();

        // this.db.object(HistoryRoot + '/' + boardID).snapshotChanges().map(c => {
        //     return { "$key": c.payload.key, ...c.payload.val() };
        // })
        this.db.object(HistoryRoot + '/' + boardID).valueChanges()
        .subscribe((history:GameHistory) => {
            subject.next(history);
        });

        return subject;
    }

    addHistory(boardID:string, historyOrder:number, history:GameHistoryItem) {
        console.log(`historyOrder = ${historyOrder}`);
        console.log(`boardID = ${boardID}`);
        console.log(history);
        const historyRef = this.db.object(HistoryRoot + '/' + boardID + '/' + historyOrder);

        return historyRef.set(history);
    }

    setBlackName(boardID:string, name:string) {
        const boardRef = this.db.object(BoardRoot + '/' + boardID + '/black');

        return boardRef.set(name);
    }

    setWhiteName(boardID:string, name:string) {
        const boardRef = this.db.object(BoardRoot + '/' + boardID + '/white');

        return boardRef.set(name);
    }

    clearHistory(boardID:string) {
        const historyRef = this.db.object(HistoryRoot + '/' + boardID);

        return historyRef.remove();
    }

    resetDB() {
        const boardsRef =  this.db.list(BoardRoot);
        const historiesRef = this.db.object(HistoryRoot);

        boardsRef.remove();
        historiesRef.remove();

        const board_records:Board[] = [
            { name: '한판', white: false, black: false },
            { name: '두판', white: '고수', black: '하수' }
        ]

        for (let record of board_records) {
            // let ref = boards.push(record);
            // console.log(ref.key);
            boardsRef.push(record).then(ref => {
                // console.log(ref.key);

                this.mockHistory(ref.key);
            });
        }
    }

    private mockHistory(key:string) {
        const historyRef = this.db.object(HistoryRoot + '/' + key);

        const history_records = {
            0: { turn: 1 , idx: 20 },
            1: { turn: -1 , idx: 21 }
        };

        historyRef.set(history_records);
    }
}