import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/service/configuration.service';
import { CurrentSessionService } from 'src/app/service/current-session.service';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit, OnDestroy {

  public get pageVersion(): string {
    return this.configurationService.applicationVersion;
  }

  constructor(
    private configurationService: ConfigurationService,
    private loggerService: LoggerService,
    private currentSessionService: CurrentSessionService
  ) {

  }
  

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
