import { Component, Input, OnInit } from '@angular/core';
import { Features } from '../../interfaces/features.interface';
@Component({
  selector: 'app-serempre-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private _features: any;
  @Input()
  get features(): Array<Features> {
    return this._features;
  }
  set features(value) {
    this._features = value;
  }

  private _amount: any;
  @Input()
  get amount(): number {
    return this._amount;
  }
  set amount(value) {
    this._amount = value;
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this._amount);
  }
}
