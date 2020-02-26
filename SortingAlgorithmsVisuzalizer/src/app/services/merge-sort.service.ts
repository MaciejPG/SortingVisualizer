import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';
import { SortingItem } from '../models/sorting-item';

@Injectable({
  providedIn: 'root'
})
export class MergeSortService extends SortingAlgorithmService {

  public sort(array: SortingItem[]): void {
    this.mergeSort(array, 0, array.length - 1);
  }

  private async mergeSort(array: SortingItem[], l: number, r: number) {
    if (l < r) {
      const roundedHalf = Math.floor((r + l) / 2);
      // await Promise.all([this.mergeSort(array, l, roundedHalf, delay),
      //   this.mergeSort(array, roundedHalf + 1, r, delay)]);
      await this.mergeSort(array, l, roundedHalf);
      await this.mergeSort(array, roundedHalf + 1, r);
      await this.merge(array, l, roundedHalf, r);
    }
  }

  public async merge(array: SortingItem[], l: number, m: number, r: number) {
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    let k = l;
    const leftArrayLimit = m - l + 1;
    const rightArrayLimit = r - m;

    array[r].state = this.pivotState;

    const lArray: SortingItem[] = new Array<SortingItem>(leftArrayLimit);
    const rArray: SortingItem[] = new Array<SortingItem>(rightArrayLimit);

    for (let i = 0; i < leftArrayLimit; i++) {
      lArray[i] = array[l + i];
    }

    for (let j = 0; j < rightArrayLimit; j++) {
      rArray[j] = array[m + 1 + j];
    }

    while (leftArrayIndex < leftArrayLimit && rightArrayIndex < rightArrayLimit) {
      if (lArray[leftArrayIndex].value < rArray[rightArrayIndex].value) {
        await this.timeout();
        array[k] = lArray[leftArrayIndex];
        await this.highlight(array[k]);
        leftArrayIndex++;
      } else {
        await this.timeout();
        array[k] = rArray[rightArrayIndex];
        await this.highlight(array[k]);
        rightArrayIndex++;
      }
      k++;
    }
    while (leftArrayIndex < leftArrayLimit) {
      await this.timeout();
      array[k] = lArray[leftArrayIndex];
      await this.highlight(array[k]);
      leftArrayIndex++;
      k++;
    }

    while (rightArrayIndex < rightArrayLimit) {
      await this.timeout();
      array[k] = rArray[rightArrayIndex];
      await this.highlight(array[k]);
      rightArrayIndex++;
      k++;
    }

    array[r].state = this.notSelectedState;
  }

  private async highlight(item: SortingItem) {
    item.state = this.selectedState;
    await this.timeout();
    item.state = this.notSelectedState;
  }
}
