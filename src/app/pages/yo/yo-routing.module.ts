import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoPage } from './yo.page';

const routes: Routes = [
  {
    path: '',
    component: YoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoPageRoutingModule {}
