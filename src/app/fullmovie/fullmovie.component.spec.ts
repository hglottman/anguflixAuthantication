import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullmovieComponent } from './fullmovie.component';

describe('FullmovieComponent', () => {
  let component: FullmovieComponent;
  let fixture: ComponentFixture<FullmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
