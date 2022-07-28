import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNeededComponent } from './login-needed.component';

describe('LoginNeededComponent', () => {
  let component: LoginNeededComponent;
  let fixture: ComponentFixture<LoginNeededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNeededComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNeededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
