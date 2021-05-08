import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageUploadUsingMplifyPageRoutingModule } from './image-upload-using-mplify-routing.module';

import { ImageUploadUsingMplifyPage } from './image-upload-using-mplify.page';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageUploadUsingMplifyPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AmplifyService
  ],
  declarations: [ImageUploadUsingMplifyPage]
})
export class ImageUploadUsingMplifyPageModule {}
