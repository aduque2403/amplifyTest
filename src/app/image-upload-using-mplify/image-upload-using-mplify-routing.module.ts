import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageUploadUsingMplifyPage } from './image-upload-using-mplify.page';

const routes: Routes = [
  {
    path: '',
    component: ImageUploadUsingMplifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageUploadUsingMplifyPageRoutingModule {}
