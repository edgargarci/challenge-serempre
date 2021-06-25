import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { AmountService } from './shared/services/amount.service';
@Component({
  selector: 'app-serempre-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AmountService],
})
export class AppComponent implements OnInit {
  title = 'store-serempre';
  public feat = [
    {
      title: 'Free Shipping',
      description:
        'If anything goes wrong in the first two years, well replace it for free.',
    },
    {
      title: '2 years warranty',
      description: 'Get 2-day free shipping anywhere in North America.',
    },
  ];
  public total: any;

  public escucha: Observable<number>;
  constructor(private _AmountService: AmountService) {
    this.escucha = _AmountService.getmount();
  }
  ngOnInit(): void {

    this.total = this._AmountService.getMasAmount();


  }

  public changeAmount(cost: number) {
    this.total = cost;
  }
}
