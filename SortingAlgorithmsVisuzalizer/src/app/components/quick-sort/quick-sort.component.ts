import { QuickSortService } from './../../services/quick-sort.service';
import { Component } from '@angular/core';
import { VisuzalizationComponent } from '../visuzalization/visuzalization.component';
import { trigger, style, state } from '@angular/animations';

@Component({
  selector: 'app-quick-sort',
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
      state('pivot', style({
        backgroundColor: 'red'
      })),

        // transition('notSelected => selected', animate('600ms')),
        // transition('notSelected => pivot', animate('600ms')),
        // transition('pivot => notSelected', animate('600ms')),
        // transition('selected => notSelected', animate('600ms')),
      ])
  ]
})
export class QuickSortComponent extends VisuzalizationComponent {

  constructor(protected algorithmService: QuickSortService) {
    super(algorithmService);
  }

}
