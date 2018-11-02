import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarOverviewComponent } from './snack-bar-overview.component';

describe('SnackBarOverviewComponent', () => {
  let component: SnackBarOverviewComponent;
  let fixture: ComponentFixture<SnackBarOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
