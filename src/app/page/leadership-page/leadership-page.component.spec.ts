import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipPageComponent } from './leadership-page.component';

describe('LeadershipPageComponent', () => {
  let component: LeadershipPageComponent;
  let fixture: ComponentFixture<LeadershipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
