import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { BaseResponse } from '../model/api/base-response.model';
import { ErrorModalData } from '../model/dialog/error-modal-data.model';
import { ErrorDialogComponent } from '../shared/dialogs/error/error.dialog.component';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private configuarationService: ConfigurationService,
    private matDialog: MatDialog
  ) { }

  public openErrorModalForApiResponse(
    apiResponse: BaseResponse<any>,
    modalTitle: string | null = null
  ): MatDialogRef<ErrorDialogComponent> {
    var errorModalData = new ErrorModalData();
    errorModalData.title = modalTitle;
    errorModalData.errorMessage = apiResponse.Message;

    const dialogConfig = this.configuarationService.errorModalConfig;
    dialogConfig.data = errorModalData;

    return this.matDialog.open(ErrorDialogComponent, dialogConfig);
  }

  public openErrorModal(modalErrorMessage: string | null = null, modalTitle: string | null = null) : MatDialogRef<ErrorDialogComponent> {
    var errorModalData = new ErrorModalData();
    errorModalData.title = modalTitle;
    errorModalData.errorMessage = modalErrorMessage;

    const dialogConfig = this.configuarationService.errorModalConfig;
    dialogConfig.data = errorModalData;

    return this.matDialog.open(ErrorDialogComponent, dialogConfig);
  }
}
