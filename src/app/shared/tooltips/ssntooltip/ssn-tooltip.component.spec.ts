import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { SSNTooltipComponent } from './ssn-tooltip.component';

describe('SSNTooltipComponent', () => {
  let component: SSNTooltipComponent;
  let fixture: ComponentFixture<SSNTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSNTooltipComponent ],
      imports: [
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSNTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
