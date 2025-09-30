import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfosSchoolPage } from './infos-school.page';

describe('InfosSchoolPage', () => {
  let component: InfosSchoolPage;
  let fixture: ComponentFixture<InfosSchoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
