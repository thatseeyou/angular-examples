import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BoardService } from './board.service';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { Direction, Score, Command, Board, GameHistory, GameHistoryItem, Cell, CellState, TurnState, ReversableDisk } from './typedef';

const CellSize = 64;

// const enum Direction {
//     NW = -9,
//     N = -8,
//     NE = -7,
//     W = -1,
//     E = 1,
//     SW = 7,
//     S = 8,
//     SE = 9
// }

@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    @Input() inputPipe:Subject<Command> = null;
    @Input() nameControl:NgModel = null;
    @Output() boardChanged = new EventEmitter<Board>();
    @Output() scoreChanged = new EventEmitter<Score>();
    @Output() currentTurnChanged = new EventEmitter<TurnState>();
    @Output() myTurnChanged = new EventEmitter<TurnState>();

    boardSubscription:Subscription = null;
    historySubscription:Subscription = null;

    currentBoard: Board = {
        name: null,
        white: false,
        black: false
    };
    currentHistory: GameHistory = {};

    cells: Array<Cell>;
    _myTurn: TurnState = null;
    _currentTurn: TurnState;
    score: {
        white: number;
        black: number;
    }
    whiteTryName: string = null;
    blackTryName: string = null;

    get myTurn() {
        return this._myTurn;
    }
    set myTurn(newValue: TurnState) {
        this._myTurn = newValue;

        this.updatePuttableCell(this.currentTurn);
        this.myTurnChanged.emit(newValue);
    }

    get currentTurn() {
        return this._currentTurn;
    }
    set currentTurn(newValue: TurnState) {
        this._currentTurn = newValue;

        this.currentTurnChanged.emit(newValue);
    }


    constructor(private boardService: BoardService) { }

    ngOnInit() { 
        this.cells = Array(CellSize);

        this.initGame();
        // this.observeBoard('default');

        if (this.inputPipe) {
            this.inputPipe.subscribe(command => this.commandCalled(command));
        }
        if (this.nameControl) {
            this.nameControl.valueChanges.subscribe(value => {
                // console.log(`name changed to ${value}`);
            })
        }
    }

    touchCell(cellIndex: number) {
        if (this._myTurn != this.currentTurn) {
            console.log(`It's not your turn. Wait`);
            console.log(`myTurn : ${this._myTurn}, currentTurn = ${this.currentTurn}`);
            return;
        }
        // if (this.reverableDisksForAllDirection(cellIndex, this.turn) == 0) {
        if (this.cells[cellIndex].classes[this.currentTurn == CellState.White ? 'whitePuttable' : 'blackPuttable'] == false) {
            return;
        }
        this.sendHistory(this.currentHistory.length, this.currentTurn, cellIndex);
    }

    private observeBoard(boardName:string) {
        this.initGame();

        if (this.boardSubscription) {
            this.boardSubscription.unsubscribe();
            this.boardSubscription = null;
        }

        this.currentBoard = {
            name: null,
            white: false,
            black: false
        };

        this.boardSubscription = this.boardService.connectBoard(boardName)
        .subscribe((board:Board) => {
            if (board.$value === null) {
                console.error(`ERROR: board '${boardName}' resetted`);
                this.boardSubscription.unsubscribe();
                this.boardSubscription = null;

                this.initGame();
            }
            else {
                // 1. initial connect
                if (this.currentBoard.name == null) {
                    console.log(`initialize currentBoard`);
                    this.currentBoard = board;

                    this.observeHistory(board.$key);
                }
                // 2. data changed
                else {
                    if (this.currentBoard.name != board.name) {
                        console.log(`currentBoard.name changed`);
                    }
                    if (this.currentBoard.white != board.white) {
                        console.log(`currentBoard.white changed`);
                        if (this.whiteTryName !== null && this.whiteTryName == board.white) {
                            console.log("I'm white player");
                            this.myTurn = CellState.White;
                        }
                        this.whiteTryName = null;
                    }
                    if (this.currentBoard.black != board.black) {
                        console.log(`currentBoard.black changed`);
                        if (this.blackTryName !== null && this.blackTryName == board.black) {
                            console.log("I'm black player");
                            this.myTurn = CellState.Black;
                        }
                        this.blackTryName = null;
                    }
                    this.currentBoard = board;
                }
            }

            this.boardChanged.emit(this.currentBoard);
        });
    }

    private observeHistory(boardID:string) {
        if (this.historySubscription) {
            this.historySubscription.unsubscribe();
        }

        this.currentHistory = {
            $value: null,
            length: 0
        };

        this.historySubscription = this.boardService.connectHistory(boardID)
        .subscribe((history:GameHistory) => {
            // console.dir(history);
            if (history.$value === null) {
                history.length = 0;
                if (this.currentHistory.$value === null) {
                    console.log(`initial history received`);
                    // initial value received
                }
                else {
                    console.log(`game history resetted`);
                    let myTurn = this.myTurn;
                    this.initGame();
                    this.myTurn = myTurn;
                }
                this.currentHistory = history;
            }
            else {
                let oldHistoryCount = this.currentHistory.length;

                console.log(`the number of new histories : ${history.length - oldHistoryCount}`);

                for (let i = oldHistoryCount; i < history.length; i++) {
                    this.newHistoryItem(history[i]);
                }

                this.currentHistory = history;
            }
        });
    }

    private commandCalled(command:Command) {
        console.log(`command '${command.name}' received`);
        switch(command.name) {
            case "newGame":
                this.boardService.clearHistory(this.currentBoard.$key);
            break;

            case "changeName":
                this.observeBoard(command.data);
            break;

            case "changeWhiteName":
                if (this.myTurn != null)
                    break;
                this.whiteTryName = command.data;
                this.boardService.setWhiteName(this.currentBoard.$key, command.data);
            break;

            case "changeBlackName":
                if (this.myTurn != null)
                    break;
                this.blackTryName = command.data;
                this.boardService.setBlackName(this.currentBoard.$key, command.data);
            break;
        }
    }


    private newHistoryItem(history: GameHistoryItem) {
        let cellIndex = history.idx;
        let turn = history.turn;

        console.log(`received history at ${cellIndex} on ${turn == CellState.Black ? 'black' : 'white'}`);

        this.reverse(cellIndex, turn);
        // must called after reverse
        this.setCellStateForIndex(cellIndex, turn);

        // check if trun change is possible
        if (this.findPuttableIndexes(-turn).length > 0) {
            this.currentTurn = -turn;
        }
        
        this.updatePuttableCell(this.currentTurn);
        this.updateScore();
    }

    private sendHistory(historyOrder:number, turn: number, idx: number) {
        if (this.currentBoard.$key == null) {
            console.error('ERROR: not connected to board');
            return;
        }

        let historyItem:GameHistoryItem = {
            turn: turn,
            idx: idx
        }
        this.boardService.addHistory(this.currentBoard.$key, historyOrder, historyItem);
    }

    private initGame() {
        this._myTurn = null;
        this.currentTurn = CellState.White;
        this.score = { white: 0, black: 0};

        for (let diskIndex = 0; diskIndex < CellSize; diskIndex++) {
            this.cells[diskIndex] = { 
                state: CellState.Empty,
                classes: {
                    black: false,
                    white: false,
                    blackPuttable: false,
                    whitePuttable: false
                },
                turnAnimationName: '',
                turnAnimationDelay: '',
                numReversable: 0
             };
        }

        [
            [3,3,CellState.White],
            [4,4,CellState.White],
            [3,4,CellState.Black],
            [4,3,CellState.Black]
        ].forEach(([x, y, cellState]) => {
            this.setCellState(x, y, cellState);
        });

        this.updatePuttableCell(this.currentTurn);
        this.updateScore();
    }

    private xyFromIndex(cellIndex: number):[number, number] {
        let y = Math.floor(cellIndex / 8);
        let x = cellIndex % 8;

        return [x,y];
    }

    private setCellStateForIndex(cellIndex: number, state: CellState) {
        this.cells[cellIndex].state = state;

        this.cells[cellIndex].classes.black = (state == CellState.Black) ? true : false;
        this.cells[cellIndex].classes.white = (state == CellState.White) ? true : false;
    }
    private setCellState(posX: number, posY: number, state: CellState) {
        this.setCellStateForIndex(posY * 8 + posX, state);
    }
    private setAnimationForIndex(cellIndex: number, state: TurnState, direction: Direction, distance: number)  {
        function directionString(direction: Direction) {
            switch (direction) {
                case Direction.NW: return 'NW';
                case Direction.N: return 'N';
                case Direction.NE: return 'NE';
                case Direction.E: return 'E';
                case Direction.SE: return 'SE';
                case Direction.S: return 'S';
                case Direction.SW: return 'SW';
                case Direction.W: return 'W';
            }
        }

        let turnAnimationName = `turnTo${state == CellState.Black ? 'Black' : 'White'}${directionString(direction)}`;
        let turnAnimationDelay = (distance - 1) * 0.25;
        this.cells[cellIndex].turnAnimationName = turnAnimationName;
        this.cells[cellIndex].turnAnimationDelay = `${turnAnimationDelay}s`;

        console.log(`at ${cellIndex} ${turnAnimationName} delay:${turnAnimationDelay}`);
    }

    private reversableDisksForOneDirection(direction: Direction, cellIndex: number, turnState: TurnState): ReversableDisk[] {
        // console.log(`direction = ${direction}, cellIndex = ${cellIndex}, turnState = ${turnState}`);
        // 1. empty on diskIndex 
        if (turnState == CellState.Empty || this.cells[cellIndex].state != CellState.Empty) {
            // console.log('BAD START');
            return [];
        }

        // 2. check boundary

        let reversableDisks:ReversableDisk[] = [];
        let [prevX, prevY] = this.xyFromIndex(cellIndex);

        for (let nextIndex = cellIndex + direction, distance = 1; nextIndex >= 0 && nextIndex < CellSize; nextIndex += direction, distance += 1) {
            // check out of boundary
            let [nextX, nextY] = this.xyFromIndex(nextIndex);
            if (Math.abs(nextX - prevX) > 1 || Math.abs(nextY - prevY) > 1) {
                return [];
            }
            [prevX, prevY] = [nextX, nextY];

            switch (this.cells[nextIndex].state) {
                // Fail
                case CellState.Empty:
                    // console.log('end by empty');
                    return [];

                // same color -> END
                case turnState:
                    // if turnState is W
                    // CASE1: W -> B ... -> W
                    // CASE2: W -> W
                    // console.log('bingo ??');
                    return reversableDisks;

                // opposite color -> candidate
                default:
                    // console.log('keep going');
                    reversableDisks.push({
                        cellIndex: nextIndex,
                        distance: distance,
                        direction: direction
                    });
            }
        }

        // console.log('Out of board');
        return [];
    }

    private reversableDisksForAllDirection(cellIndex: number, turnState: TurnState): ReversableDisk[] {
        let directions:Direction[] = [Direction.NW, Direction.N , Direction.NE, Direction.W, Direction.E, Direction.SW, Direction.S, Direction.SE];

        let reversableDisks = directions.reduce((prev, direction) => {
            return prev.concat(this.reversableDisksForOneDirection(direction, cellIndex, turnState));
        }, []);

        // console.log(`numReverableDisk = ${numReversableDisk}`);

        return reversableDisks;
    }

    private reverse(cellIndex: number, turnState: TurnState) {
        this.reversableDisksForAllDirection(cellIndex, turnState).forEach(reversableDisk => {
            this.setCellStateForIndex(reversableDisk.cellIndex, turnState);

            // for animate
            this.setAnimationForIndex(reversableDisk.cellIndex, turnState, reversableDisk.direction, reversableDisk.distance);  
        });
    }

    private findPuttableIndexes(turnState: TurnState): [number, number][] {
        let puttableIndexes:[number, number][] = [];

        for(let cellIndex = 0; cellIndex < CellSize; cellIndex++) {
            let numReverableDisks = this.reversableDisksForAllDirection(cellIndex, turnState).length;

            if (numReverableDisks > 0) {
                puttableIndexes.push([cellIndex, numReverableDisks]);
            }
        }

        return puttableIndexes;
    }

    private updatePuttableCell(turnState: TurnState) {
        // 1. reset
        for (let cellIndex = 0; cellIndex < CellSize; cellIndex++) {
            this.cells[cellIndex].classes.whitePuttable = false;
            this.cells[cellIndex].classes.blackPuttable = false;
            this.cells[cellIndex].numReversable = 0;
        }

        if (this.myTurn != turnState)
            return;

        // 2. set
        let puttableIndexes = this.findPuttableIndexes(turnState);
        puttableIndexes.forEach(([puttableIndex, numReverableDisks]) => {
            if (turnState == CellState.Black) {
                this.cells[puttableIndex].classes.blackPuttable = true;
            }
            else if (turnState == CellState.White) {
                this.cells[puttableIndex].classes.whitePuttable = true;
            }
            this.cells[puttableIndex].numReversable = numReverableDisks;
        });
    }

    private updateScore() {
        let score = this.cells.reduce((acc, value) => {
            if (value.state == CellState.Black) {
                acc.black++;
            }
            else if (value.state == CellState.White) {
                acc.white++;
            }

            return acc
        }, { white: 0, black: 0})

        this.score.black = score.black;
        this.score.white = score.white;

        this.scoreChanged.emit(this.score);
    }

}