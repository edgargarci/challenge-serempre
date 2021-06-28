import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './atoms/button/button.component';
import { FooterComponent } from './molecules/footer/footer.component';
import { HeaderComponent } from './molecules/header/header.component';
import { FeatureComponent } from './atoms/feature/feature.component';
import { SpecificationTableComponent } from './atoms/specification-table/specification-table.component';
import { ThumbImgComponent } from './atoms/thumb-img/thumb-img.component';
import { ImageGaleryComponent } from './molecules/image-galery/image-galery.component';
import { BigImgComponent } from './atoms/big-img/big-img.component';
import { InfoTabsComponent } from './molecules/info-tabs/info-tabs.component';
import { CardImageComponent } from './molecules/card-image/card-image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    FeatureComponent,
    SpecificationTableComponent,
    ThumbImgComponent,
    ImageGaleryComponent,
    BigImgComponent,
    InfoTabsComponent,
    CardImageComponent
  ],
  exports:[ButtonComponent, FooterComponent, HeaderComponent, FeatureComponent, SpecificationTableComponent, ThumbImgComponent, ImageGaleryComponent, BigImgComponent, InfoTabsComponent, CardImageComponent]
})
export class UiStoreModule {}
