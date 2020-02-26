import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';
import { SortingItem } from '../models/sorting-item';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService extends SortingAlgorithmService {

  public async sort(array: SortingItem[], delay: number): Promise<void> {
    for (let i = 0; i < array.length; i++) {
      await this.timeout(delay);
      for (let j = 0; j < array.length - i - 1; j++) {
        await this.timeout(delay);
        this.moveSingleItem(array, j, delay);
      }
    }
  }

  private async moveSingleItem(array: SortingItem[], j: number, delay: number) {
    if (array[j].value > array[j + 1].value) {
      const temp = array[j];
      temp.state = 'selected';
      array[j] = array[j + 1];
      array[j + 1] = temp;
      await this.timeout(delay);
      array[j + 1].state = 'notSelected';
    }
  }
}
