import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
let VisuzalizationComponent = class VisuzalizationComponent {
    constructor(algorithmService) {
        this.algorithmService = algorithmService;
        this.delay = 100;
        this.TEMP_CONSTANT_ARRAY_SIZE = 200;
    }
    ngOnInit() {
        this.array = this.algorithmService.getArray(this.TEMP_CONSTANT_ARRAY_SIZE);
    }
    run() {
        this.algorithmService.sort(this.array, this.delay);
    }
};
VisuzalizationComponent = __decorate([
    Component({
        selector: 'app-visuzalization',
        templateUrl: './visuzalization.component.html',
        styleUrls: ['./visuzalization.component.css'],
        animations: [
            trigger('isSelected', [state('selected', style({
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
], VisuzalizationComponent);
export { VisuzalizationComponent };
//# sourceMappingURL=visuzalization.component.js.map