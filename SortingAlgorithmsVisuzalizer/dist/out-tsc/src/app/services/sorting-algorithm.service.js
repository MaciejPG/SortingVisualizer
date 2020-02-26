import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SortingAlgorithmService = class SortingAlgorithmService {
    getArray(size) {
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push({ state: 'notSelected', value: Math.floor(Math.random() * 10) });
        }
        return array;
    }
    timeout(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }
};
SortingAlgorithmService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SortingAlgorithmService);
export { SortingAlgorithmService };
//# sourceMappingURL=sorting-algorithm.service.js.map