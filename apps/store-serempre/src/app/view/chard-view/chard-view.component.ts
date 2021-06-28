import { Component, OnInit } from '@angular/core';
import { GallegyAlbumService } from '../../shared/services/gallegyAlbum.service';

@Component({
  selector: 'app-serempre-chard-view',
  templateUrl: './chard-view.component.html',
  styleUrls: ['./chard-view.component.scss'],
})
export class ChardViewComponent implements OnInit {
  public sendPhotos: any;
  public pagination: number = 2;
  constructor(private _GallegyAlbumService: GallegyAlbumService) {}
  ngOnInit(): void {
    this.getImages(1);
  }
  public nextAlbum() {
    this.getImages(this.pagination++);
  }

  public getImages(page: number) {
    this._GallegyAlbumService.getAlbum(page).subscribe((data) => {
      this.sendPhotos = data;

      console.log(data);
    });
  }
}
