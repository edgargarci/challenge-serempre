import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(protected httpClient: HttpClient) {}

  public getInfo(product: string) {
    console.log(`traer info, se recibe el ID ${product}`);
    return this.httpClient.get(`assets/data/infoTabs.json`);
  }
}
