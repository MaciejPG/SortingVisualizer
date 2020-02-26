import { Injectable } from '@angular/core';
import { SortingItem } from '../models/sorting-item';

@Injectable({
  providedIn: 'root'
})
export abstract class SortingAlgorithmService {
  protected selectedState = 'selected';
  protected notSelectedState = 'notSelected';
  protected pivotState = 'pivot';

  private delay: number;

  public abstract sort(array: SortingItem[]): void;

  public getArray(size: number, multiplier: number) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push({ state: this.notSelectedState, value: Math.floor(Math.random() * multiplier) });
    }

    return array;
  }

  public setDelay(delay: number) {
    this.delay = delay;
  }

  protected timeout() {
    return new Promise(resolve => setTimeout(resolve, this.delay ?? 100));
  }
}
