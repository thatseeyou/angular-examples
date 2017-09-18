import { Component, OnInit } from '@angular/core';

const CellSize = 64;

const enum Direction {
    NW = -9,
    N = -8,
    NE = -7,
    W = -1,
    E = 1,
    SW = 7,
    S = 8,
    SE = 9
}

const enum CellState {
    Black = -1,
    Empty = 0,
    White = 1
}
// type DiskState = CellState;
type PuttableState = CellState;
type TurnState = CellState;

class Cell {
    state: CellState;
    classes: {
        black: boolean;
        white: boolean;
        blackPuttable: boolean;
        whitePuttable: boolean;
    }
    numReverable: number;
}

@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    cells: Array<Cell>;
    turn: TurnState;
    score: {
        white: number;
        black: number;
    }

    constructor() { }

    ngOnInit() { 
        this.cells = Array(CellSize);
        this.turn = CellState.White;
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
                numReverable: 0
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

        this.updatePuttableCell(this.turn);
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

    private reversableDisksForOneDirection(direction: Direction, cellIndex: number, turnState: TurnState): number[] {
        // console.log(`direction = ${direction}, cellIndex = ${cellIndex}, turnState = ${turnState}`);
        // 1. empty on diskIndex 
        if (turnState == CellState.Empty || this.cells[cellIndex].state != CellState.Empty) {
            // console.log('BAD START');
            return [];
        }

        // 2. check boundary

        let reversableIndexes:number[] = [];
        let [prevX, prevY] = this.xyFromIndex(cellIndex);

        for (let nextIndex = cellIndex + direction; nextIndex >= 0 && nextIndex < CellSize; nextIndex += direction) {
            // check out of boundary
            let [nextX, nextY] = this.xyFromIndex(nextIndex);
            if (Math.abs(nextX - prevX) > 1 || Math.abs(nextY - prevY) > 1) {
                return [];
            }
            [prevX, prevY] = [nextX, nextY];

            switch (this.cells[nextIndex].state) {
                case CellState.Empty:
                    // console.log('end by empty');
                    return [];

                case turnState:
                    // console.log('bingo ??');
                    return reversableIndexes;

                default:
                    // console.log('keep going');
                    reversableIndexes.push(nextIndex);
            }
        }

        // console.log('Out of board');
        return [];
    }

    private reverableDisksForAllDirection(cellIndex: number, turnState: TurnState): number[] {
        let directions:Direction[] = [Direction.NW, Direction.N , Direction.NE, Direction.W, Direction.E, Direction.SW, Direction.S, Direction.SE];

        let reversableIndexes = directions.reduce((prev, current) => {
            return prev.concat(this.reversableDisksForOneDirection(current, cellIndex, turnState));
        }, []);

        // console.log(`numReverableDisk = ${numReversableDisk}`);

        return reversableIndexes;
    }

    private reverse(cellIndex: number, turnState: TurnState) {
        this.reverableDisksForAllDirection(cellIndex, turnState).forEach(turnIndex => {
            this.setCellStateForIndex(turnIndex, turnState);
        });
    }

    private findPuttableIndexes(turnState: TurnState): [number, number][] {
        let puttableIndexes:[number, number][] = [];

        for(let cellIndex = 0; cellIndex < CellSize; cellIndex++) {
            let numReverableDisks = this.reverableDisksForAllDirection(cellIndex, turnState).length;

            if (numReverableDisks > 0) {
                puttableIndexes.push([cellIndex, numReverableDisks]);
            }
        }

        console.log(puttableIndexes);

        return puttableIndexes;
    }

    private updatePuttableCell(turnState: TurnState) {
        // 1. reset
        for (let cellIndex = 0; cellIndex < CellSize; cellIndex++) {
            this.cells[cellIndex].classes.whitePuttable = false;
            this.cells[cellIndex].classes.blackPuttable = false;
            this.cells[cellIndex].numReverable = 0;
        }

        // 2. set
        let puttableIndexes = this.findPuttableIndexes(turnState);
        puttableIndexes.forEach(([puttableIndex, numReverableDisks]) => {
            if (turnState == CellState.Black) {
                this.cells[puttableIndex].classes.blackPuttable = true;
            }
            else if (turnState == CellState.White) {
                this.cells[puttableIndex].classes.whitePuttable = true;
            }
            this.cells[puttableIndex].numReverable = numReverableDisks;
        });
    }

    private updateScore() {
        let white = 0;
        let black = 0;

        for(let cellIndex = 0; cellIndex < CellSize; cellIndex++) {
            if (this.cells[cellIndex].state == CellState.Black) {
                black++;
            }
            else if (this.cells[cellIndex].state == CellState.White) {
                white++;
            }
        }

        this.score.black = black;
        this.score.white = white;
    }

    touchCell(cellIndex: number) {
        // if (this.reverableDisksForAllDirection(cellIndex, this.turn) == 0) {
        if (this.cells[cellIndex].classes[this.turn == CellState.White ? 'whitePuttable' : 'blackPuttable'] == false) {
            return;
        }
        this.reverse(cellIndex, this.turn);
        this.setCellStateForIndex(cellIndex, this.turn);

        // check if trun change is possible
        if (this.findPuttableIndexes(-this.turn).length > 0) {
            this.turn = -this.turn;
        }
        
        this.updatePuttableCell(this.turn);
        this.updateScore();
    }
}