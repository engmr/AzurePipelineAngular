import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PromptYesNoModalData } from 'src/app/model/dialog/prompt-yes-no-modal-data.model';
import { PromptYesNoModalResponse } from 'src/app/model/dialog/prompt-yes-no-modal-response';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-prompt-yes-no.dialog',
  templateUrl: './prompt-yes-no.dialog.component.html'
})
export class PromptYesNoDialogComponent implements OnInit {

  public title: string | null;
  public prompt: string | null;
  private response: PromptYesNoModalResponse;
  public actionChosen: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private modalData: PromptYesNoModalData,
    private dialogRef: MatDialogRef<PromptYesNoDialogComponent>,
    private loggerService: LoggerService
  ) { 
    this.title = modalData?.title || "The choice is yours Neo";
    this.prompt = modalData?.prompt || "The red pill or blue pill";
    this.response = new PromptYesNoModalResponse();
  }

  ngOnInit(): void {
    this.loggerService.consoleLog(this.modalData);
  }

  public yes(): void {
    if (this.actionChosen) {
      return;
    }

    this.actionChosen = true;
    this.response.yes = true;
    this.response.no = false;
    this.dialogRef.close(this.response);
  }

  public no(): void {
    if (this.actionChosen) {
      return;
    }

    this.actionChosen = true;
    this.response.yes = false;
    this.response.no = true;
    this.dialogRef.close(this.response);
  }
}
