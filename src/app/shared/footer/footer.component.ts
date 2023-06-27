import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from 'src/app/service/configuration.service';
import { LoggerService } from 'src/app/service/logger.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  public applicationVersion: string = "";

  constructor(
    private modalService: ModalService,
    private loggerService: LoggerService,
    private configurationService: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.applicationVersion = this.configurationService.applicationVersion;
  }

}
