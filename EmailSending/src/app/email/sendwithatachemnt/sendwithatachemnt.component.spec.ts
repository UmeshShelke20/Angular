import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendwithatachemntComponent } from './sendwithatachemnt.component';

describe('SendwithatachemntComponent', () => {
  let component: SendwithatachemntComponent;
  let fixture: ComponentFixture<SendwithatachemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendwithatachemntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendwithatachemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
