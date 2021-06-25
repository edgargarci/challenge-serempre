import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serempre-big-img',
  templateUrl: './big-img.component.html',
  styleUrls: ['./big-img.component.scss']
})
export class BigImgComponent implements OnInit {

  private _srcImg = '';
  @Input()
  get srcImg(): string {
    return this._srcImg;
  }
  set srcImg(value: string) {
    this._srcImg = value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
