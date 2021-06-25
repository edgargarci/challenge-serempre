import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationTableComponent } from './specification-table.component';

describe('SpecificationTableComponent', () => {
  let component: SpecificationTableComponent;
  let fixture: ComponentFixture<SpecificationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
