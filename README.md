# AzurePipelineAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Prerequisites
* HTML / CSS / JS
* JSON
* Angular / TypeScript

### One-time Steps To Run On a Machine
Steps can be skipped if already done

Node.js Installed (version > 16.17.0)
* Verify with `node -v` in cmd.

npm installed (version >= 8.18.0)
* Verify with `npm -v` in cmd.

Proxy Setup
If behind a proxy, npm will need to be configured to use the proxy
```
npm config set proxy "http://<base>:<port>/"
npm config set https-proxy "https://<base>:<port>/"
//Confirm
npm config get proxy
npm config get https-proxy
```

First-time restore of node_modules
In CMD:
* run `cd c:/git/azurepipelineangular`
* run `npm install`
The process will take a few minutes if never run before

Install http-server pakcage
* Run `npm install -g http-server`
* Test by running `http-server` on a directory

Install browserstack-cypress CLI
* Run `npm install -g browserstack-cypress-cli`

Install BrowserStack Local MSI
[Guide](https://www.browserstack.com/docs/local-testing/desktop-app-config-guide)
