export function isValidSudoku(board: string[][]): boolean {
    const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const val = board[row][col];

            if (val === '.') continue;

            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            if (rows[row].has(val) || cols[col].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }

            rows[row].add(val);
            cols[col].add(val);
            boxes[boxIndex].add(val);
        }
    }

    return true;
}