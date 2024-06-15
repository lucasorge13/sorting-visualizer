export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(array, animations) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1, 'compare']);
      if (array[j] > array[j + 1]) {
        animations.push([j, j + 1, 'swap']);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      animations.push([j, j + 1, 'revert']);
    }
  }
}