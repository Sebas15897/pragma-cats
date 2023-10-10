import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ICat } from '../../interfaces/cat.interface';

@Injectable({
  providedIn: 'root',
})

export class CatsService {
  constructor(
    private httpClient: HttpClient,
    private appSettins: AppSettings
  ) {}

  getCats() {
    const url = this.appSettins.cats.urls.getCats;
    return this.httpClient.get<ICat[]>(url);
  }
}
