import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';
import { SortingItem } from '../models/sorting-item';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService extends SortingAlgorithmService {

  public async sort(array: SortingItem[]): Promise<void> {
    for (let i = 0; i < array.length; i++) {
      await this.timeout();
      for (let j = 0; j < array.length - i - 1; j++) {
        await this.timeout();
        this.moveSingleItem(array, j);
      }
    }
  }

  private async moveSingleItem(array: SortingItem[], j: number) {
    if (array[j].value > array[j + 1].value) {
      const temp = array[j];
      temp.state = this.selectedState;
      array[j] = array[j + 1];
      array[j + 1] = temp;
      await this.timeout();
      array[j + 1].state = this.notSelectedState;
    }
  }
}
