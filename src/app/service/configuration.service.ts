import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  /** App Version */
  get applicationVersion(): string {
    return environment.applicationVersion;
  }

  /** Base url of web page */
  get webPortalBaseUrl(): string {
    return window.location.origin;
  }

  get pageTitlePrefix(): string {
    return "Azure Pipeline Angular - "
  }

  get isDebugging(): boolean {
    return environment.enableDebug;
  }

  get isProductionEnvironment(): boolean {
    return environment.production;
  }

  get progressModalConfig(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;
    return dialogConfig;
  }

  get errorModalConfig(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;
    return dialogConfig;
  }

  get promptYesNoModalConfig(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;
    return dialogConfig;
  }

  constructor() { }
}
