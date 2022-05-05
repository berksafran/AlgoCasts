// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let noSwaps;
  // "İlk iteration'da tüm array gezildiği için", 
  // eğer swap edilen bir şey yoksa (!) bu array zaten sorted anlamına gelir.
  // Diğer iterasyonların dönmesine gerek yoktur.
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    // En sonuncu index'i, bir fazlası ile karşılaştıramayız.
    // Ayrıca, i kadar element ise zaten sıralanmış olduğu (!) için o kadar'ını da çıkarıyoruz.
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP TIME!
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    console.log("ONE PASS COMPLETE!");
  }
  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

console.log("BubbleSort => ", bubbleSort([12, 2, 3, 4, 5]));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
