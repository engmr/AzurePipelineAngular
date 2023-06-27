import { TestBed } from '@angular/core/testing';
import { MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct value for applicationVersion', () => {
    expect(service.applicationVersion).toBe(environment.applicationVersion);
  });

  it('should return correct value for webPortalBaseUrl', () => {
    expect(service.webPortalBaseUrl).toBe(window.location.origin);
  });

  it('should return correct value for pageTitlePrefix', () => {
    expect(service.pageTitlePrefix).toBe("Azure Pipeline Angular - ");
  });

  it('should return correct value for isDebugging', () => {
    expect(service.isDebugging).toBe(environment.enableDebug);
  });

  it('should return correct value for progressModalConfig', () => {
    var expectedModalConfig = new MatDialogConfig();
    expectedModalConfig.disableClose = true;
    expectedModalConfig.hasBackdrop = true;
    expectedModalConfig.closeOnNavigation = true;
    expect(service.progressModalConfig).toBeTruthy();
    expect(service.progressModalConfig).toEqual(expectedModalConfig);
  });

  it('should return correct value for errorModalConfig', () => {
    var expectedModalConfig = new MatDialogConfig();
    expectedModalConfig.disableClose = false;
    expectedModalConfig.hasBackdrop = true;
    expectedModalConfig.closeOnNavigation = true;
    expect(service.errorModalConfig).toBeTruthy();
    expect(service.errorModalConfig).toEqual(expectedModalConfig);
  });

  it('should return correct value for promptYesNoModalConfig', () => {
    var expectedModalConfig = new MatDialogConfig();
    expectedModalConfig.disableClose = true;
    expectedModalConfig.hasBackdrop = true;
    expectedModalConfig.closeOnNavigation = true;
    expect(service.promptYesNoModalConfig).toBeTruthy();
    expect(service.promptYesNoModalConfig).toEqual(expectedModalConfig);
  });
});
