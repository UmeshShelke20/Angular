import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientmanagerComponent } from './patientmanager.component';

describe('PatientmanagerComponent', () => {
  let component: PatientmanagerComponent;
  let fixture: ComponentFixture<PatientmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
