import { SortingItem } from './../models/sorting-item';
import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService extends SortingAlgorithmService {
  private pivotState = 'pivot';
  public sort(array: SortingItem[]) {
    this.quickSort(array, 0, array.length - 1);
  }

  private async quickSort(array: SortingItem[], low: number, high: number) {
    if (low < high) {
      const pivotIndex = await this.partition(array, low, high);
      // Promise.all([]);
      await this.quickSort(array, low, pivotIndex - 1);
      await this.quickSort(array, pivotIndex + 1, high);
    }
  }

  private async partition(array: SortingItem[], low: number, high: number) {
    let i = low - 1;
    array[high].state = this.pivotState;

    for (let j = low; j < high; j++) {
      if (array[j].value < array[high].value) {
        i++;

        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        if (j < high) {
          array[j].state = this.selectedState;
          await this.timeout();
          array[j].state = this.notSelectedState;
        }
      }
    }
    const temp1 = array[i + 1];

    await this.timeout();
    array[high].state = this.notSelectedState; // array[i+1] is equal to previous array[high]
    array[i + 1] = array[high];
    array[high] = temp1;
    return i + 1;
  }
}
