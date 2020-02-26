import { async, TestBed } from '@angular/core/testing';
import { VisuzalizationComponent } from './visuzalization.component';
describe('VisuzalizationComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VisuzalizationComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(VisuzalizationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=visuzalization.component.spec.js.map