import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { OptionDatum } from '../model/option-datum';
import { ConfigurationService } from './configuration.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentSessionService {

  private pageArrivalTimeSubject: BehaviorSubject<Date | null> = new BehaviorSubject<Date | null>(null);
  public pageArrivalTime: Observable<Date | null>;

  //page data loaded from an API service
  private usStateOptionsSubject: BehaviorSubject<OptionDatum[]> = new BehaviorSubject<OptionDatum[]>([]);
  public usStateOptionsData: Observable<OptionDatum[]>;


  constructor(
    private configurationService: ConfigurationService,
    private loggerService: LoggerService
  ) {
    this.pageArrivalTime = this.pageArrivalTimeSubject.asObservable();
    this.usStateOptionsData = this.usStateOptionsSubject.asObservable();
    this.startPageArrivalTime();
    this.setUSStateOptionsState();
  }

  private startPageArrivalTime(): void {
    if (this.pageArrivalTimeSubject.value == null) {
      let newTime = new Date();
      this.loggerService.debugLog(`Page arrival time set to: ${newTime}`);
    }
    else {
      this.loggerService.debugLog(`Page arrival time already set to: ${this.pageArrivalTimeSubject.value}`);
    }
  }

  private setUSStateOptionsState(): void {
    let content: OptionDatum[] = require("../model/mock-data/us-state-options-data.json");
    this.usStateOptionsSubject.next(content);
  }
}
