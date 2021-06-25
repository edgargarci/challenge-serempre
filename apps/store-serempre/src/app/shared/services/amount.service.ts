import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable()
export class AmountService {
  private _amount: ReplaySubject<number> = new ReplaySubject();

  public amount(value: any) {
    this._amount = value;
  }

  public getMasAmount() {
    return this._amount;
  }

  public getmount(): Observable<number> {
    return this._amount.asObservable();
  }
}
