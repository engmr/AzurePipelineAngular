import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressModalData } from 'src/app/model/dialog/progress-modal-data.model';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-progess.dialog',
  templateUrl: './progess.dialog.component.html'
})
export class ProgessDialogComponent implements OnInit {

  public message: string | null;

  constructor(
    @Inject(MAT_DIALOG_DATA) private modalData: ProgressModalData,
    private loggerService: LoggerService
  ) { 
    this.message = modalData?.message || 'Processing...'
  }

  ngOnInit(): void {
    this.loggerService.consoleLog(this.modalData);
  }

}
