import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpecificationsService {
  constructor(protected httpClient: HttpClient) {}

  public getSpecification(product: string){
    console.log(`se recibe el ID ${product}`);
    return this.httpClient.get(`assets/data/especification.json`);
  }
}
