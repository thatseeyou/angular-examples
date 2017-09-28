import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { BoardService } from './board.service';
import { Command, Score, Board, CellState } from './typedef';

interface BoardContext {
    outputPipe: Subject<Command>;
    score: Score;
    board: Board;
    whitePlaceholder: string;
    blackPlaceholder: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    readonly numBoard = 2;
    title = 'Reversi';
    boardContexts: Array<BoardContext>;

    constructor(private boardService: BoardService) { }

    ngOnInit() {
        this.boardContexts = Array(this.numBoard);
        for (let i = 0; i < this.numBoard; i++) {
            this.boardContexts[i] = {
                outputPipe: new Subject<Command>(),
                score: {
                    white: 1000,
                    black: 0
                },
                board: {
                    name: '',
                    white: false,
                    black: false
                },
                whitePlaceholder: 'loading...',  /* show placeholder */
                blackPlaceholder: 'loading...', 
            }
        }
    }

    resetDB() {
        this.boardService.resetDB();
    }

    newGame(boardContext: BoardContext) {
        boardContext.outputPipe.next({
            name: "newGame"
        })
    }

    onChangeBoardName(boardContext: BoardContext, event: Event) {
        let boardName = (event.target as HTMLInputElement).value;

        boardContext.outputPipe.next({
            name: "changeName",
            data: boardName
        })
    }

    onChangeBlackName(boardContext: BoardContext, name: string) {
        boardContext.outputPipe.next({
            name: "changeBlackName",
            data: name
        })
    }

    onChangeWhiteName(boardContext: BoardContext, name: string) {
        boardContext.outputPipe.next({
            name: "changeWhiteName",
            data: name
        })
    }

    boardConnected(boardContext: BoardContext, boardID: string) {
        console.log(`notified boardID = ${boardID}`);
    }

    updateScore(boardContext: BoardContext, score: Score) {
        boardContext.score = score;
    }
    updateBoard(boardContext: BoardContext, board: Board) {
        console.log(`[app.component] updateBoard called : `);
        // console.dir(board);
        // boardContext.board = Object.assign({}, board);
        boardContext.board = board;
        if (board.white === false) {
            boardContext.whitePlaceholder = 'waiting...';
        }
        if (board.black === false) {
            boardContext.blackPlaceholder = 'waiting...';
        }
    }
}
