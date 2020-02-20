import { Injectable } from '@angular/core';
import { race } from 'rxjs';
import { SortingAlgorithmService } from './sorting-algorithm.service';

@Injectable({
  providedIn: 'root'
})
export class MergeSortService extends SortingAlgorithmService {

  public sort(array: number[]): void {
    this.mergeSort(array, 0, array.length - 1);
  }

  private mergeSort(array: number[], l: number, r: number) {
    if (l < r) {
      const roundedHalf = Math.floor((r + l) / 2);
      this.mergeSort(array, l, roundedHalf);
      this.mergeSort(array, roundedHalf + 1, r);
      this.merge(array, l, roundedHalf, r);
    }
  }

  public merge(array: number[], l: number, m: number, r: number) {
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    let k = l;
    const leftArrayLimit = m - l + 1;
    const rightArrayLimit = r - m;

    const lArray: number[] = new Array<number>(leftArrayLimit);
    const rArray: number[] = new Array<number>(rightArrayLimit);

    for (let i = 0; i < leftArrayLimit; i++) {
      lArray[i] = array[l + i];
    }

    for (let j = 0; j < rightArrayLimit; j++) {
      rArray[j] = array[m + 1 + j];
    }

    while (leftArrayIndex < leftArrayLimit && rightArrayIndex < rightArrayLimit) {
      if (lArray[leftArrayIndex] < rArray[rightArrayIndex]) {
        array[k] = lArray[leftArrayIndex];
        leftArrayIndex++;
      } else {
        array[k] = rArray[rightArrayIndex];
        rightArrayIndex++;
      }
      k++;
    }

    while (leftArrayIndex < leftArrayLimit) {
      array[k] = lArray[leftArrayIndex];
      leftArrayIndex++;
      k++;
    }

    while (rightArrayIndex < rightArrayLimit) {
      array[k] = rArray[rightArrayIndex];
      rightArrayIndex++;
      k++;
    }
  }
}
