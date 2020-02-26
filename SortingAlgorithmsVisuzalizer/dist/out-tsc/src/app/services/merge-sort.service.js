import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SortingAlgorithmService } from './sorting-algorithm.service';
let MergeSortService = class MergeSortService extends SortingAlgorithmService {
    sort(array, delay) {
        this.mergeSort(array, 0, array.length - 1, 0, delay);
    }
    mergeSort(array, l, r, iteration, delay) {
        // setTimeout(() => {
        if (l < r) {
            // console.log(iteration);
            const roundedHalf = Math.floor((r + l) / 2);
            this.mergeSort(array, l, roundedHalf, iteration + 1, delay);
            this.mergeSort(array, roundedHalf + 1, r, iteration + 1, delay);
            this.merge(array, l, roundedHalf, r, iteration + 1);
            console.log(iteration);
        }
        // }, delay * iteration);
    }
    merge(array, l, m, r, iteration) {
        // setTimeout(() => {
        let leftArrayIndex = 0;
        let rightArrayIndex = 0;
        let k = l;
        const leftArrayLimit = m - l + 1;
        const rightArrayLimit = r - m;
        const lArray = new Array(leftArrayLimit);
        const rArray = new Array(rightArrayLimit);
        for (let i = 0; i < leftArrayLimit; i++) {
            lArray[i] = array[l + i];
        }
        for (let j = 0; j < rightArrayLimit; j++) {
            rArray[j] = array[m + 1 + j];
        }
        // setTimeout(() => {
        while (leftArrayIndex < leftArrayLimit && rightArrayIndex < rightArrayLimit) {
            if (lArray[leftArrayIndex].value < rArray[rightArrayIndex].value) {
                array[k] = lArray[leftArrayIndex];
                leftArrayIndex++;
            }
            else {
                array[k] = rArray[rightArrayIndex];
                rightArrayIndex++;
            }
            k++;
        }
        while (leftArrayIndex < leftArrayLimit) {
            array[k] = lArray[leftArrayIndex];
            leftArrayIndex++;
            k++;
        }
        while (rightArrayIndex < rightArrayLimit) {
            array[k] = rArray[rightArrayIndex];
            rightArrayIndex++;
            k++;
        }
        // }, 20 * (iteration));
    }
};
MergeSortService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MergeSortService);
export { MergeSortService };
//# sourceMappingURL=merge-sort.service.js.map