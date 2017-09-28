import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { BoardService } from './board.service';
import { Command, Score, Board, CellState, TurnState } from './typedef';

interface BoardContext {
    outputPipe: Subject<Command>;
    score: Score;
    board: Board;
    currentTurn: TurnState;
    myTurn: TurnState;
    whitePlaceholder: string;
    blackPlaceholder: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    readonly numBoard = 1;
    title = 'Reversi';
    boardContexts: Array<BoardContext> = [];

    constructor(private boardService: BoardService) { }

    ngOnInit() {
        for (let i = 0; i < this.numBoard; i++) {
            this.appendBoardContext();
        }
    }

    appendBoardContext() {
        this.boardContexts.push(
            {
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
                currentTurn: CellState.Empty,
                myTurn: CellState.Empty
            }
        )
    }

    resetDB() {
        this.boardService.resetDB();
    }

    newGame(boardContext: BoardContext) {
        boardContext.outputPipe.next({
            name: "newGame"
        })
    }

    onChangeNumBoard(number: number) {
        console.log(`${number}`);
        let numNew = number - this.boardContexts.length;
        if (numNew > 0) {
            for(let i=0; i < numNew;i++) {
                this.appendBoardContext();
            }
        }

        this.boardContexts.length = number;
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

    updateScore(boardContext: BoardContext, score: Score) {
        boardContext.score = score;
    }
    updateBoard(boardContext: BoardContext, board: Board) {
        console.log(`[app.component] updateBoard called : `);
        // console.dir(board);
        // boardContext.board = Object.assign({}, board);
        boardContext.board = board;
        if (board.white === false) {
            boardContext.whitePlaceholder = '선수 없음...';
        }
        if (board.black === false) {
            boardContext.blackPlaceholder = '선수 없음...';
        }
    }
    updateCurrentTurn(boardContext: BoardContext, currentTurn: TurnState) {
        boardContext.currentTurn = currentTurn;
    }
    updateMyTurn(boardContext: BoardContext, myTurn: TurnState) {
        boardContext.myTurn = myTurn;
    }
}
