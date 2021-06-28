import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GallegyAlbumService {
  constructor(protected HttpClient: HttpClient) {}

  public getAlbum(page: number = 1, limit: number = 5) {
    console.log(`se recibe page ${page}`);
    return this.HttpClient.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
    );
  }
}
