import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcometwoPage } from './welcometwo.page';

describe('WelcometwoPage', () => {
  let component: WelcometwoPage;
  let fixture: ComponentFixture<WelcometwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcometwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
