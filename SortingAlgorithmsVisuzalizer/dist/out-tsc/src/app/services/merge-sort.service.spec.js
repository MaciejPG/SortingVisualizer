import { TestBed } from '@angular/core/testing';
import { MergeSortService } from './merge-sort.service';
describe('MergeSortService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MergeSortService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=merge-sort.service.spec.js.map