import { Injectable } from '@angular/core';
import { SortingItem } from '../models/sorting-item';

@Injectable({
  providedIn: 'root'
})
export abstract class SortingAlgorithmService {
  public abstract sort(array: SortingItem[], delay: number): void;

  public getArray(size: number) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push({ state: 'notSelected', value: Math.floor(Math.random() * 10) });
    }

    return array;
  }

  protected timeout(delay: number) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }
}
