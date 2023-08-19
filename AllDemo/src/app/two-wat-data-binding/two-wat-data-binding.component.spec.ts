import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWatDataBindingComponent } from './two-wat-data-binding.component';

describe('TwoWatDataBindingComponent', () => {
  let component: TwoWatDataBindingComponent;
  let fixture: ComponentFixture<TwoWatDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWatDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWatDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
