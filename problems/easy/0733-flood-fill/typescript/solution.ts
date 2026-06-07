export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const originalColor = image[sr][sc];

    if (originalColor === color) return image;

    const rows = image.length;
    const cols = image[0].length;

    function dfs(row: number, col: number): void {
        if (row < 0 || row >= rows || col < 0 || col >= cols) return;
        if (image[row][col] !== originalColor) return;

        image[row][col] = color;

        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    dfs(sr, sc);
    return image;
}
