export function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize result with first interval
  const merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    // Check if current overlaps with last merged
    if (current[0] <= lastMerged[1]) {
      // Overlap! Merge by extending the end
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, add as new interval
      merged.push(current);
    }
  }

  return merged;
}
