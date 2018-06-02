import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmovieComponent } from './bmovie.component';

describe('BmovieComponent', () => {
  let component: BmovieComponent;
  let fixture: ComponentFixture<BmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
