import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serempre-thumb-img',
  templateUrl: './thumb-img.component.html',
  styleUrls: ['./thumb-img.component.scss'],
})
export class ThumbImgComponent implements OnInit {
  private _srcImg = '';
  @Input()
  get srcImg(): string {
    return this._srcImg;
  }
  set srcImg(value: string) {
    this._srcImg = value;
  }

  private _forName = '';
  @Input()
  get forName(): string {
    return this._forName;
  }
  set forName(value: string) {
    this._forName = value;
  }

  constructor() {}

  ngOnInit(): void {}

  public showImg(url: string) {


  }
}
