import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDicectiveComponent } from './structural-dicective.component';

describe('StructuralDicectiveComponent', () => {
  let component: StructuralDicectiveComponent;
  let fixture: ComponentFixture<StructuralDicectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDicectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDicectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
