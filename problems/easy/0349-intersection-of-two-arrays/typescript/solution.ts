export function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const result: number[] = [];

  for (const num of nums2) {
    const count = map.get(num) || 0;

    if (count > 0) {
      result.push(num);
      map.set(num, count - 1); 
    }
  }

  return result;
}
