import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordforgetPage } from './passwordforget.page';

describe('PasswordforgetPage', () => {
  let component: PasswordforgetPage;
  let fixture: ComponentFixture<PasswordforgetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordforgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
