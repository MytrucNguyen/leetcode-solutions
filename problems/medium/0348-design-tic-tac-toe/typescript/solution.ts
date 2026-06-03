export class TicTacToe {
    private rows: number[];
    private cols: number[];
    private diag: number;
    private antiDiag: number;
    private n: number;

    constructor(n: number) {
        this.n = n;
        this.rows = new Array(n).fill(0);
        this.cols = new Array(n).fill(0);
        this.diag = 0;
        this.antiDiag = 0;
    }

    move(row: number, col: number, player: number): number {
        const val = player === 1 ? 1 : -1;

        this.rows[row] += val;
        this.cols[col] += val;

        if (row === col) {
            this.diag += val;
        }

        if (row + col === this.n - 1) {
            this.antiDiag += val;
        }

        if (
            Math.abs(this.rows[row]) === this.n ||
            Math.abs(this.cols[col]) === this.n ||
            Math.abs(this.diag) === this.n ||
            Math.abs(this.antiDiag) === this.n
        ) {
            return player;
        }

        return 0;
    }
}