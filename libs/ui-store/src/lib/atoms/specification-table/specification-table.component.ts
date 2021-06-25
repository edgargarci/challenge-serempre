import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Especification } from '../../interfaces/especification.interface';

@Component({
  selector: 'app-serempre-specification-table',
  templateUrl: './specification-table.component.html',
  styleUrls: ['./specification-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecificationTableComponent implements OnInit {

  private _specification:any;
  @Input()
  get specification(): Array<Especification>{
    return this._specification;
  }
  set specification(value){
    this._specification = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
