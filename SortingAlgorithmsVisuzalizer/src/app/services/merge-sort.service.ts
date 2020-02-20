import { Injectable } from '@angular/core';
import { race } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MergeSortService {

  constructor() { }

  public sort(array: number[]) {

    this.mergeSort(array, 0, array.length);

  }

  private mergeSort(array: number[], l: number, r: number) {
    const roundedHalf = Math.ceil(array.length) / 2;

    if (l < r) {
      this.mergeSort(array, l, roundedHalf);
      this.mergeSort(array, roundedHalf + 1, r);
      this.merge(array, l, roundedHalf, r);
    }
  }

  public merge(array: number[], l: number, m: number, r: number) {
    let i: number;
    let j: number;
    let k: number;

    const lArray: number[] = new Array<number>(l);
    const rArray: number[] = new Array<number>(r);

    for (let i = 0; i < lArray.length; i++) {
      lArray[i] = array[l + i];
    }

    for (let j = 0; j < rArray.length; j++) {
      rArray[j] = array[m + 1 + j];
    }

    while (i < lArray.length && j < rArray.length) {
      if (lArray[i] < rArray[j]) {
        array[k] = lArray[i];
        i++;
      }
      if (lArray[i] > rArray[j]) {
        array[k] = rArray[j];
        j++;
      }

      k++;
    }

    while (i < lArray.length) {
      array[k] = lArray[i];
      i++;
      k++;
    }

    while (j < rArray.length) {
      array[k] = rArray[j];
      j++;
      k++;
    }
  }
}
