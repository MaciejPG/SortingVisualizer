import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';
let QuickSortService = class QuickSortService extends SortingAlgorithmService {
    sort(array, delay) {
        this.quickSort(array, 0, array.length - 1, delay, 0);
    }
    quickSort(array, low, high, delay, iteration) {
        return __awaiter(this, void 0, void 0, function* () {
            if (low < high) {
                const pivotIndex = yield this.partition(array, low, high, delay);
                //Promise.all([]);
                yield this.quickSort(array, low, pivotIndex - 1, delay, iteration);
                yield this.quickSort(array, pivotIndex + 1, high, delay, iteration);
            }
        });
    }
    partition(array, low, high, delay) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = low - 1;
            array[high].state = 'pivot';
            for (let j = low; j < high; j++) {
                if (array[j].value < array[high].value) {
                    i++;
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    if (j < high) {
                        array[j].state = 'selected';
                        yield this.timeout(delay);
                        array[j].state = 'notSelected';
                        // array[i].state = 'notSelected';
                    }
                }
            }
            const temp1 = array[i + 1];
            yield this.timeout(delay);
            array[high].state = 'notSelected'; // array[i+1] is equal to previous array[high]
            array[i + 1] = array[high];
            array[high] = temp1;
            return i + 1;
        });
    }
};
QuickSortService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], QuickSortService);
export { QuickSortService };
//# sourceMappingURL=quick-sort.service.js.map