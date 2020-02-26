import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';
import { SortingItem } from '../models/sorting-item';

@Injectable({
  providedIn: 'root'
})
export class MergeSortService extends SortingAlgorithmService {

  public sort(array: SortingItem[], delay: number): void {
    this.mergeSort(array, 0, array.length - 1, delay);
  }

  private async mergeSort(array: SortingItem[], l: number, r: number, delay: number) {
    if (l < r) {
      const roundedHalf = Math.floor((r + l) / 2);
      // await Promise.all([this.mergeSort(array, l, roundedHalf, delay),
      //   this.mergeSort(array, roundedHalf + 1, r, delay)]);
      await this.mergeSort(array, l, roundedHalf, delay);
      await this.mergeSort(array, roundedHalf + 1, r, delay);
      await this.merge(array, l, roundedHalf, r, delay);
    }
  }

  public async merge(array: SortingItem[], l: number, m: number, r: number, delay) {
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    let k = l;
    const leftArrayLimit = m - l + 1;
    const rightArrayLimit = r - m;

    array[r].state = 'pivot';

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
        await this.timeout(delay);
        array[k] = lArray[leftArrayIndex];
        await this.highlight(array[k], delay);
        leftArrayIndex++;
      } else {
        await this.timeout(delay);
        array[k] = rArray[rightArrayIndex];
        await this.highlight(array[k], delay);
        rightArrayIndex++;
      }
      k++;
    }
    while (leftArrayIndex < leftArrayLimit) {
      await this.timeout(delay);
      array[k] = lArray[leftArrayIndex];
      await this.highlight(array[k], delay);
      leftArrayIndex++;
      k++;
    }

    while (rightArrayIndex < rightArrayLimit) {
      await this.timeout(delay);
      array[k] = rArray[rightArrayIndex];
      await this.highlight(array[k], delay);
      rightArrayIndex++;
      k++;
    }

    array[r].state = 'notSelected';
  }

  private async highlight(item: SortingItem, delay: number) {
    item.state = 'selected';
    await this.timeout(delay);
    item.state = 'notSelected';
  }
}
