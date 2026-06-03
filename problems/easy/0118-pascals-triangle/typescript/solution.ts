export function generate(numRows: number): number[][] {
  // Result array to store all rows
  const result: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = [1];

    // If not the first row, calculate middle values
    if (i > 0) {
      // Get the previous row
      const prevRow = result[i - 1];

      // Add adjacent pairs from previous row
      for (let j = 0; j < prevRow.length - 1; j++) {
        // Sum of two adjacent numbers from previous row
        row.push(prevRow[j] + prevRow[j + 1]);
      }

      // Every row ends with 1
      row.push(1);
    }

    // Add completed row to result
    result.push(row);
  }

  return result;
}
