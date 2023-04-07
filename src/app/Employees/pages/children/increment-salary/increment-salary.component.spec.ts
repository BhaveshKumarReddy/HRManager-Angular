import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementSalaryComponent } from './increment-salary.component';

describe('IncrementSalaryComponent', () => {
  let component: IncrementSalaryComponent;
  let fixture: ComponentFixture<IncrementSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
