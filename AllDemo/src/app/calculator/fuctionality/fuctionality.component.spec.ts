import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuctionalityComponent } from './fuctionality.component';

describe('FuctionalityComponent', () => {
  let component: FuctionalityComponent;
  let fixture: ComponentFixture<FuctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuctionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
