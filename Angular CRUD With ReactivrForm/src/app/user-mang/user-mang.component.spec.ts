import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMangComponent } from './user-mang.component';

describe('UserMangComponent', () => {
  let component: UserMangComponent;
  let fixture: ComponentFixture<UserMangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
