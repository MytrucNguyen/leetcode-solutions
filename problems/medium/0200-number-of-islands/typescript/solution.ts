export function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(grid, row, col);
      }
    }
  }

  return count;
}

export function dfs(grid: string[][], row: number, col: number): void {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
    return;
  }

  if (grid[row][col] === "0") {
    return;
  }

  grid[row][col] = "0";

  // Explore all 4 directions
  dfs(grid, row - 1, col); // up
  dfs(grid, row + 1, col); // down
  dfs(grid, row, col - 1); // left
  dfs(grid, row, col + 1); // right
}
