import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoPageRoutingModule } from './yo-routing.module';

import { YoPage } from './yo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoPageRoutingModule
  ],
  declarations: [YoPage]
})
export class YoPageModule {}
