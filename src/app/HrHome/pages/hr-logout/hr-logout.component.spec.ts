import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLogoutComponent } from './hr-logout.component';

describe('HrLogoutComponent', () => {
  let component: HrLogoutComponent;
  let fixture: ComponentFixture<HrLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
