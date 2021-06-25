import { Features } from './../../interfaces/features.interface';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-serempre-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureComponent implements OnInit {
  private _tfeatureInfo: any;
  @Input()
  get featureInfo(): Features {
    return this._tfeatureInfo;
  }
  set featureInfo(value: Features) {
    this._tfeatureInfo = value;
  }


  constructor() {

  }

  ngOnInit(): void {

  }
}
