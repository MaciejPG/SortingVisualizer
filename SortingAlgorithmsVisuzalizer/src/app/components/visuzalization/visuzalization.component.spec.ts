import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuzalizationComponent } from './visuzalization.component';

describe('VisuzalizationComponent', () => {
  let component: VisuzalizationComponent;
  let fixture: ComponentFixture<VisuzalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuzalizationComponent ]
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
