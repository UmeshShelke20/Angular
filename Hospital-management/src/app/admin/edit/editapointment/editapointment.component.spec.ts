import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditapointmentComponent } from './editapointment.component';

describe('EditapointmentComponent', () => {
  let component: EditapointmentComponent;
  let fixture: ComponentFixture<EditapointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditapointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditapointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
