import { InfoTabs } from './../../interfaces/infoTabs.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serempre-info-tabs',
  templateUrl: './info-tabs.component.html',
  styleUrls: ['./info-tabs.component.scss'],
})
export class InfoTabsComponent {
  private _infoTabs: any;

  @Input()
  get infoTabs(): Array<InfoTabs> {
    return this._infoTabs;
  }
  set infoTabs(value) {
    this._infoTabs = value;
  }

  constructor() {}
  public info: string = '';

  public showInfo(infoTab:any) {
    this.info = infoTab;
  }

  ngOnChanges(): void {
    this.showInfo(this.infoTabs.length && this.infoTabs[0].info);
  }
}
