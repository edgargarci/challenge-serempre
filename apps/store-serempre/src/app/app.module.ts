import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiStoreModule} from '@app-serempre/ui-store';
import { ProductComponent } from './view/product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { AmountService } from './shared/services/amount.service';
@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [BrowserModule, UiStoreModule, AppRoutingModule, HttpClientModule],
  providers: [AmountService],
  bootstrap: [AppComponent],
  exports: [
  ],
})
export class AppModule {}
