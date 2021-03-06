export class Board {
    name: string;
    white: boolean | string;
    black: boolean | string;
    $key?: string;
    $value?: null;
}

export class Command {
    name: "newGame" | "changeName" | "changeBlackName" | "changeWhiteName";
    data?: any;
}

export class Score {
    white: number;
    black: number;
}

export class GameHistoryItem {
    turn: number;
    idx: number;
    $key?: string;
}

export interface GameHistory {
    [index: number]: GameHistoryItem;
    // $value?: null;
    length?: number;
}

export const enum CellState {
    Black = -1,
    Empty = 0,
    White = 1
}
// type DiskState = CellState;
export type PuttableState = CellState;
export type TurnState = CellState;

export class Cell {
    state: CellState;
    classes: {
        black: boolean;
        white: boolean;
        blackPuttable: boolean;
        whitePuttable: boolean;
    }
    turnAnimationName: string;
    turnAnimationDelay: string;
    numReversable: number;
}

export const enum Direction {
    NW = -9,
    N = -8,
    NE = -7,
    W = -1,
    NO = 0,
    E = 1,
    SW = 7,
    S = 8,
    SE = 9
}

export interface ReversableDisk {
    cellIndex: number;
    direction: Direction;
    distance: number; /* used for animation delay */
} 
