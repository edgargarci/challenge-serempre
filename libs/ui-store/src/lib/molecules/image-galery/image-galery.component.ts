import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serempre-image-galery',
  templateUrl: './image-galery.component.html',
  styleUrls: ['./image-galery.component.scss'],
})
export class ImageGaleryComponent {

  private _images: any;

  @Input()
  get images(): Array<string> {
    return this._images;
  }
  set images(value) {
    this._images = value;
  }

  public activeImg: string = '';
  constructor() {}

  ngOnChanges(): void {
    [this.activeImg] = this.images;
  }

  public showImg(url: string) {
    this.activeImg = url;
  }
}
