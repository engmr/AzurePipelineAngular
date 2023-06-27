import { Injectable } from '@angular/core';

import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(
    private configurationService: ConfigurationService
  ) { }

  /** Logs based on if not production */
  consoleLog(message: any) {
    if (!this.configurationService.isProductionEnvironment) {
      console.log(message);
    }
  }

  /** Logs always */
  consoleLogAlways(message: any) {
    console.log(message);
  }

  /** Logs based only if debugging */
  debugLog(message: any) {
    if (this.configurationService.isDebugging) {
      console.log(message);
    }
  }
}
