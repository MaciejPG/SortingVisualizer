import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';
let BubbleSortService = class BubbleSortService extends SortingAlgorithmService {
    sort(array, delay) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < array.length; i++) {
                yield this.timeout(delay);
                for (let j = 0; j < array.length - i - 1; j++) {
                    yield this.timeout(delay);
                    this.moveSingleItem(array, j, delay);
                }
            }
        });
    }
    moveSingleItem(array, j, delay) {
        return __awaiter(this, void 0, void 0, function* () {
            if (array[j].value > array[j + 1].value) {
                const temp = array[j];
                temp.state = 'selected';
                array[j] = array[j + 1];
                array[j + 1] = temp;
                yield this.timeout(delay);
                array[j + 1].state = 'notSelected';
            }
        });
    }
};
BubbleSortService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BubbleSortService);
export { BubbleSortService };
//# sourceMappingURL=bubble-sort.service.js.map