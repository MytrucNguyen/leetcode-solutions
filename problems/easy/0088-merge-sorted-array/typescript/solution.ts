/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let p1 = m - 1; // Last element in nums1
  let p2 = n - 1; // Last element in nums2
  let p = m + n - 1; // Last position in nums1

  // Merge from back to front
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // Copy remaining elements from nums2
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}
