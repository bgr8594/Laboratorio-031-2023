import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements as defineCapacitorCamera } from '@capacitor/camera/dist/loader';
import { defineCustomElements as defineCapacitorFilesystem } from '@capacitor/filesystem/dist/loader';
import { defineCustomElements as defineCapacitorPreferences } from '@capacitor/preferences/dist/loader';
import { applyPolyfills, defineCustomElements as defineIonicPwaElements } from '@ionic/pwa-elements/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

async function init() {
  // Cargar elementos personalizados de Capacitor
  await applyPolyfills();
  defineCapacitorCamera();
  defineCapacitorFilesystem();
  defineCapacitorPreferences();

  // Cargar elementos personalizados de Ionic PWA Elements
  defineIonicPwaElements(window);

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
}

init();
