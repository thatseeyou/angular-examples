import { Component, OnInit } from '@angular/core';

const enum CellState {
    Black = -1,
    Empty = 0,
    White = 1
}
class Cell {
    state: CellState;
}

@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    cells: Array<Cell>;
    constructor() { }

    ngOnInit() { 
        this.cells = Array(8 * 8);

        for(let x = 0; x < 8; x++) {
            for(let y = 0; y < 8; y++) {
                this.cells[y * 8 + x] = { state: CellState.Empty };
            }
        }

        this.setCellState(3,3,CellState.White);
        this.setCellState(4,4,CellState.White);
        this.setCellState(3,4,CellState.Black);
        this.setCellState(4,3,CellState.Black);
    }

    setCellState(posX: number, posY: number, state: CellState) {
        this.cells[posY * 8 + posX] = { state: state };
    }

    touchCell(index: number) {
        let posX = index % 8;
        let posY = Math.floor(index / 8);

        this.setCellState(posX, posY, CellState.White);
    }
}