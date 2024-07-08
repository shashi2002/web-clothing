import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcceComponent } from './home-acce.component';

describe('HomeAcceComponent', () => {
  let component: HomeAcceComponent;
  let fixture: ComponentFixture<HomeAcceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAcceComponent]
    });
    fixture = TestBed.createComponent(HomeAcceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
