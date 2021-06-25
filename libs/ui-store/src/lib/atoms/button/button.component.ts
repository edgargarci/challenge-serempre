import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-serempre-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  private _textButton = '';
  @Input()
  get textButton(): string {
    return this._textButton;
  }
  set textButton(value: string) {
    this._textButton = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
