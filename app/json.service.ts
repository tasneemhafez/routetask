import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private _HttpClient: HttpClient) {}

  private jsonUrl = './../db.json';

  getDatacus(): Observable<any> {
    return this._HttpClient.get('./assets/db.json');
  }
}
