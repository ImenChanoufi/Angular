import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHoldListComponent } from './on-hold-list.component';

describe('OnHoldListComponent', () => {
  let component: OnHoldListComponent;
  let fixture: ComponentFixture<OnHoldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnHoldListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnHoldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
