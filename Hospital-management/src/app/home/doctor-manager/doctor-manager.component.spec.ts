import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorManagerComponent } from './doctor-manager.component';

describe('DoctorManagerComponent', () => {
  let component: DoctorManagerComponent;
  let fixture: ComponentFixture<DoctorManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
