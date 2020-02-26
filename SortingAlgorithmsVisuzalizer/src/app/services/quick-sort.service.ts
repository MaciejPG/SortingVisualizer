import { SortingItem } from './../models/sorting-item';
import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService extends SortingAlgorithmService {
  public sort(array: SortingItem[], delay: number) {
    this.quickSort(array, 0, array.length - 1, delay, 0);
  }

  private async quickSort(array: SortingItem[], low: number, high: number, delay: number, iteration: number) {
    if (low < high) {
      const pivotIndex = await this.partition(array, low, high, delay);
      //Promise.all([]);
      await this.quickSort(array, low, pivotIndex - 1, delay, iteration);
      await this.quickSort(array, pivotIndex + 1, high, delay, iteration);
    }
  }

  private async partition(array: SortingItem[], low: number, high: number, delay: number) {
    let i = low - 1;
    array[high].state = 'pivot';

    for (let j = low; j < high; j++) {
      if (array[j].value < array[high].value) {
        i++;

        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        if (j < high) {
          array[j].state = 'selected';
          await this.timeout(delay);
          array[j].state = 'notSelected';
        }
      }
    }
    const temp1 = array[i + 1];

    await this.timeout(delay);
    array[high].state = 'notSelected'; // array[i+1] is equal to previous array[high]
    array[i + 1] = array[high];
    array[high] = temp1;
    return i + 1;
  }
}
