import { AmountService } from './../../../../../../apps/store-serempre/src/app/shared/services/amount.service';
import { Observable } from 'rxjs';
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


  public cost:any;
  constructor(private _AmountService: AmountService) {
    this._AmountService.amount(0);
    this.cost = _AmountService.getMasAmount()
  }

  ngOnInit(): void {}
}
