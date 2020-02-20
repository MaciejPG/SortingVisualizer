import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class SortingAlgorithmService {
  public abstract sort(array: number[]): void;

  public getArray(size: number) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 10));
  }
}
