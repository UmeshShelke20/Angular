import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFounddmissComponent } from './not-founddmiss.component';

describe('NotFounddmissComponent', () => {
  let component: NotFounddmissComponent;
  let fixture: ComponentFixture<NotFounddmissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFounddmissComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFounddmissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
