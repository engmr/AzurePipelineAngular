import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OptionDatum } from 'src/app/model/option-datum';
import { ConfigurationService } from 'src/app/service/configuration.service';
import { CurrentSessionService } from 'src/app/service/current-session.service';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html'
})
export class ContactUsPageComponent implements OnInit, OnDestroy {

  private usStateOptionsSubscription: Subscription;
  public usStateOptions: OptionDatum[] = [];

  constructor(
    private loggerService: LoggerService,
    private configurationService: ConfigurationService,
    private currentSessionService: CurrentSessionService
  ) {
    this.usStateOptionsSubscription = this.currentSessionService.usStateOptionsData.subscribe(options => this.usStateOptions = options);
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.usStateOptionsSubscription.unsubscribe();
  }

}
