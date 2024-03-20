import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCustomPage } from './my-custom.page';
import { MyCustomPageWithIdPage } from './my-custom-page-with-id/my-custom-page-with-id.page';

const routes: Routes = [
  {
    path: '',
    component: MyCustomPage
  },
  {
    path: 'my-custom-page-with-id/:id',
    component: MyCustomPageWithIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCustomPageRoutingModule {}
