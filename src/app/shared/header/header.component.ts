import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from 'src/app/service/configuration.service';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    private loggerService: LoggerService,
    private configurationService: ConfigurationService
  ) { }

  ngOnInit(): void {
  }

}
