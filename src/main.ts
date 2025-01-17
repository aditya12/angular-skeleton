import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { jsPlumbToolkit } from "jsplumbtoolkit";

if (environment.production) {
  enableProdMode();
}


jsPlumbToolkit.ready(()=> {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
})


