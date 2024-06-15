export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  heapSort(array, animations);
  return animations;
}

function heapSort(array, animations) {
  const n = array.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    animations.push([0, i, 'swap']);
    [array[0], array[i]] = [array[i], array[0]];
    animations.push([0, i, 'revert']);

    // Call max heapify on the reduced heap
    heapify(array, i, 0, animations);
  }
}

function heapify(array, n, i, animations) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If left child is larger than root
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    animations.push([i, largest, 'swap']);
    [array[i], array[largest]] = [array[largest], array[i]];
    animations.push([i, largest, 'revert']);

    // Recursively heapify the affected sub-tree
    heapify(array, n, largest, animations);
  }
}