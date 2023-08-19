import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApointmentManagerComponent } from './apointment-manager.component';

describe('ApointmentManagerComponent', () => {
  let component: ApointmentManagerComponent;
  let fixture: ComponentFixture<ApointmentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApointmentManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApointmentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
