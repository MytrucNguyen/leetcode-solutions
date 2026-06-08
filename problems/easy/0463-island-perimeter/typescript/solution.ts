export function islandPerimeter(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    let cells = 0;
    let neighbors = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                cells++;

                if (r + 1 < rows && grid[r + 1][c] === 1) {
                    neighbors++;
                }

                if (c + 1 < cols && grid[r][c + 1] === 1) {
                    neighbors++;
                }
            }
        }
    }

    return 4 * cells - 2 * neighbors;
}
