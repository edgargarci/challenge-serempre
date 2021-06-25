import { InfoTabs } from 'libs/ui-store/src/lib/interfaces/infoTabs.interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Especification } from 'libs/ui-store/src/lib/interfaces/especification.interface';
import { InfoService } from '../../shared/services/info.service';
import { SpecificationsService } from '../../shared/services/specifications.service';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../../shared/services/images.service';

@Component({
  selector: 'app-serempre-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  public idProduct: string =
    this.activatedRoute.snapshot.paramMap.get('id') || '';

  public caracteristicas: Array<Especification> = [];
  public infoTabs: Array<InfoTabs> = [];
  public images: Array<string> = [];

  constructor(
    private _SpecificationsService: SpecificationsService,
    private _InfoService: InfoService,
    protected httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private _ImagesService: ImagesService
  ) {
    this.getSpecification();
    this.getInfoTabs();
    this.getImages();
  }

  public getSpecification() {
    this._SpecificationsService.getSpecification(this.idProduct).subscribe(
      (data: any) => {
        this.caracteristicas = data;
      },
      (err) => {
        console.log('ocurrio un error al traer las especificaciones');
      }
    );
  }

  public getInfoTabs() {
    this._InfoService.getInfo(this.idProduct).subscribe(
      (data: any) => {
        this.infoTabs = data;
        console.log(data);
      },
      (err) => {
        console.log('ocurrio un error al traer las tabs');
      }
    );
  }

  public getImages() {
    this._ImagesService.getIImages(this.idProduct).subscribe(
      (data: any) => {
        this.images = data;
        console.log(data);
      },
      (err) => {
        console.log('ocurrio un error al traer las imagenes');
      }
    );
  }

  OnInit() {}
}
