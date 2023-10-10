import { Injectable } from '@angular/core';
import { EndPoint } from './models/app.settings.model';

@Injectable({
  providedIn: 'root',
})
export class AppSettings {
  public cats = {
    urls: {
      getCats: EndPoint.urlBase('breeds'),
    },
  };

}
