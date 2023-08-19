import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllFilesComponent } from './get-all-files.component';

describe('GetAllFilesComponent', () => {
  let component: GetAllFilesComponent;
  let fixture: ComponentFixture<GetAllFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
