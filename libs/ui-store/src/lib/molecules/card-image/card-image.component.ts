import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serempre-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
})
export class CardImageComponent {
  @Input() photos:any = [];

  constructor() {
  }

  ngOnChanges(){
    console.log(this.photos, 'las fotos');

  }
}
