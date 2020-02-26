import { SortingItem } from './../../models/sorting-item';
import { QuickSortService } from './../../services/quick-sort.service';
import { BubbleSortService } from './../../services/bubble-sort.service';
import { MergeSortService } from './../../services/merge-sort.service';
import { Component, OnInit } from '@angular/core';
import { SortingAlgorithmService } from 'src/app/services/sorting-algorithm.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-visuzalization',
  templateUrl: './visuzalization.component.html',
  styleUrls: ['./visuzalization.component.css'],
  animations: [
    trigger('isSelected',
      [state('selected', style({
        backgroundColor: 'green'
      })),
      state('notSelected', style({
        backgroundColor: 'gray'
      })),
      state('pivot', style({
        backgroundColor: 'blue'
      })),

      transition('notSelected => selected', animate('60ms')),
      transition('notSelected => pivot', animate('60ms')),
      transition('pivot => notSelected', animate('60ms')),
      transition('selected => notSelected', animate('60ms')),
      ])
  ]
})
export class VisuzalizationComponent implements OnInit {
  public array: SortingItem[];
  public delay = 100;
  private TEMP_CONSTANT_ARRAY_SIZE = 200;

  constructor(private algorithmService: QuickSortService) { }

  public ngOnInit(): void {
    this.array = this.algorithmService.getArray(this.TEMP_CONSTANT_ARRAY_SIZE);
  }

  public run() {
    this.algorithmService.sort(this.array, this.delay);
  }
}
