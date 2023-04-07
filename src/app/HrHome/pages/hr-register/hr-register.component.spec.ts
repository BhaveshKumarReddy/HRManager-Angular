import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRegisterComponent } from './hr-register.component';

describe('HrRegisterComponent', () => {
  let component: HrRegisterComponent;
  let fixture: ComponentFixture<HrRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
