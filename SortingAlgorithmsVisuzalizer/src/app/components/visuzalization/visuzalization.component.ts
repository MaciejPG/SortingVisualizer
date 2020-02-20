import { QuickSortService } from './../../services/quick-sort.service';
import { BubbleSortService } from './../../services/bubble-sort.service';
import { MergeSortService } from './../../services/merge-sort.service';
import { Component, OnInit } from '@angular/core';
import { SortingAlgorithmService } from 'src/app/services/sorting-algorithm.service';

@Component({
  selector: 'app-visuzalization',
  templateUrl: './visuzalization.component.html',
  styleUrls: ['./visuzalization.component.css']
})
export class VisuzalizationComponent implements OnInit {
  public array: number[];
  private TEMP_CONSTANT_ARRAY_SIZE = 5;

  constructor(private algorithmService: MergeSortService) { }

  public ngOnInit(): void {
    this.array = this.algorithmService.getArray(this.TEMP_CONSTANT_ARRAY_SIZE);
  }

  public run() {
    this.algorithmService.sort(this.array);
  }
}
