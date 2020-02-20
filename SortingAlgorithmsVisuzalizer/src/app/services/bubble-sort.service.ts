import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService extends SortingAlgorithmService {

  public sort(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {

        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
}
