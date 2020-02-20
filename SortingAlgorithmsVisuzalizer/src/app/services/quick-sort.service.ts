import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService extends SortingAlgorithmService {
  public sort(array: number[]) {

    this.quickSort(array, 0, array.length);
  }

  private quickSort(array: number[], low: number, high: number): void {

    if (low < high) {
      const pivotIndex = this.partition(array, low, high);

      this.quickSort(array, low, pivotIndex - 1);
      this.quickSort(array, pivotIndex + 1, high);
    }
  }

  private partition(array: number[], low: number, high: number): number {
    let i = low - 1;

    for (let j = low; j < high - 1; j++) {
      if (array[j] < array[high]) {
        i++;

        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    const temp1 = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp1;

    return i + 1;
  }
}
