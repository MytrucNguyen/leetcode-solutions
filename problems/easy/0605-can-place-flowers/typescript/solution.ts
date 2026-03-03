export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    const empty = flowerbed[i] === 0;
    const leftEmpty = i === 0 || flowerbed[i - 1] === 0;
    const rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (empty && leftEmpty && rightEmpty) {
      flowerbed[i] = 1;
      n--;

      if (n === 0) return true;
    }
  }

  return n <= 0;
}
