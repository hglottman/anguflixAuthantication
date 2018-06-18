import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfileComponent } from './loginfile.component';

describe('LoginfileComponent', () => {
  let component: LoginfileComponent;
  let fixture: ComponentFixture<LoginfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
