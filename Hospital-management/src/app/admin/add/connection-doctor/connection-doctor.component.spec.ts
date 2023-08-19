import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionDoctorComponent } from './connection-doctor.component';

describe('ConnectionDoctorComponent', () => {
  let component: ConnectionDoctorComponent;
  let fixture: ComponentFixture<ConnectionDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
