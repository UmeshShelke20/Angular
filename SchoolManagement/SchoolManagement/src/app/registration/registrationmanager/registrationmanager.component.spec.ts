import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationmanagerComponent } from './registrationmanager.component';

describe('RegistrationmanagerComponent', () => {
  let component: RegistrationmanagerComponent;
  let fixture: ComponentFixture<RegistrationmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
