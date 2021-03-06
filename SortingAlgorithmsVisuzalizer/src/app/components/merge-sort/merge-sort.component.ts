import { MergeSortService } from './../../services/merge-sort.service';
import { Component, OnInit } from '@angular/core';
import { VisuzalizationComponent } from '../visuzalization/visuzalization.component';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-merge-sort',
  templateUrl: '../visuzalization/visuzalization.component.html',
  styleUrls: ['../visuzalization/visuzalization.component.css'],
  animations: [
    trigger('isSelected',
      [state('selected', style({
        backgroundColor: 'orange'
      })),
      state('notSelected', style({
        backgroundColor: 'rgb(87, 125, 168)'
      })),
      state('highest', style({
        backgroundColor: 'red'
      })),

      // transition('notSelected => selected', animate('600ms')),
      // transition('notSelected => pivot', animate('600ms')),
      // transition('pivot => notSelected', animate('600ms')),
      // transition('selected => notSelected', animate('600ms')),
      ])
  ]
})
export class MergeSortComponent extends VisuzalizationComponent {

  constructor(protected algorithmService: MergeSortService) {
    super(algorithmService);
  }

}
