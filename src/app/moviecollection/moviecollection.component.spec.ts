import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecollectionComponent } from './moviecollection.component';

describe('MoviecollectionComponent', () => {
  let component: MoviecollectionComponent;
  let fixture: ComponentFixture<MoviecollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviecollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
