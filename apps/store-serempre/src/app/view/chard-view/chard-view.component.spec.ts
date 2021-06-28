import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChardViewComponent } from './chard-view.component';

describe('ChardViewComponent', () => {
  let component: ChardViewComponent;
  let fixture: ComponentFixture<ChardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
