import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorModalData } from 'src/app/model/dialog/error-modal-data.model';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-error.dialog',
  templateUrl: './error.dialog.component.html'
})
export class ErrorDialogComponent implements OnInit {

  public title: string | null;
  public errorMessage: string | null;

  constructor(
    @Inject(MAT_DIALOG_DATA) private modalData: ErrorModalData,
    private dialogRef: MatDialogRef<ErrorDialogComponent>,
    private loggerService: LoggerService
  ) { 
    this.title = modalData?.title || "Error";
    this.errorMessage = modalData?.errorMessage || "Something happened";
  }

  ngOnInit(): void {
    this.loggerService.consoleLog(this.modalData);
  }

  public dismiss(): void {
    this.dialogRef.close();
  }
}
