import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPageNotFoundComponent } from './department-page-not-found.component';

describe('DepartmentPageNotFoundComponent', () => {
  let component: DepartmentPageNotFoundComponent;
  let fixture: ComponentFixture<DepartmentPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentPageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
