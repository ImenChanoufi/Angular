import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEcrivainComponent } from './home-ecrivain.component';

describe('HomeEcrivainComponent', () => {
  let component: HomeEcrivainComponent;
  let fixture: ComponentFixture<HomeEcrivainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEcrivainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEcrivainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
