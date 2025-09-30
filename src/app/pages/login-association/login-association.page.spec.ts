import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginAssociationPage } from './login-association.page';

describe('LoginAssociationPage', () => {
  let component: LoginAssociationPage;
  let fixture: ComponentFixture<LoginAssociationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAssociationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
