import { SortingItem } from './../../models/sorting-item';
import { Component, OnInit } from '@angular/core';
import { SortingAlgorithmService } from 'src/app/services/sorting-algorithm.service';

@Component({
  selector: 'app-visuzalization',
  templateUrl: './visuzalization.component.html',
  styleUrls: ['./visuzalization.component.css']
})
export class VisuzalizationComponent implements OnInit {
  public array: SortingItem[];
  public delay = 10;
  public INITIAL_ARRAY_SIZE = 200;
  public TEMP_MULIPLIER = 500;

  constructor(protected algorithmService: SortingAlgorithmService) { }

  public ngOnInit(): void {
    this.getArray(this.INITIAL_ARRAY_SIZE);
  }

  private getArray(arraySize: number) {
    this.array = this.algorithmService.getArray(arraySize, this.TEMP_MULIPLIER);
  }

  public run() {
    this.algorithmService.setDelay(this.delay);
    this.algorithmService.sort(this.array);
  }

  public setDelay(delay: number) {
    this.delay = -1 * delay;
    this.algorithmService.setDelay(this.delay);
    console.log(this.delay);
  }

  public getNewRandomArray(value: number) {
    this.getArray(value);
    console.log(value);
  }
}
