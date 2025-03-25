import { bootstrapApplication } from '@angular/platform-browser';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
