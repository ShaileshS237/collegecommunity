import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiurl: any = 'http://localhost:8080/';

  constructor(public http: HttpClient) {}

  get(subUrl: any) {
    return this.http.get(this.apiurl + subUrl);
  }

  post(subUrl: any, body: any) {
    return this.http.post(this.apiurl + subUrl, body);
  }

  put(subUrl: any) {
    return this.http.get(this.apiurl + subUrl);
  }

  delete(subUrl: any, body: any) {
    return this.http.post(this.apiurl + subUrl, body);
  }
}
