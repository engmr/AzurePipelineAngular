import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProgessDialogComponent } from './progess.dialog.component';

describe('ProgessDialogComponent', () => {
  let component: ProgessDialogComponent;
  let fixture: ComponentFixture<ProgessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgessDialogComponent ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
