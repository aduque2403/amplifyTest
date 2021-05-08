import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.page.html',
  styleUrls: ['./image-upload.page.scss'],
})
export class ImageUploadPage implements OnInit {

  imagePath;

  isOpenLoader = false;
  current = 0;
  max = 100;

  constructor(
    public ngZone: NgZone,
  ) { }

  ngOnInit() {
    console.log('Image upload manually Page');
  }

  webSelectImage(element) {
    if (element) {
      const file = element.target.files[0];
      this.saveImageInAmplify(element.target.files[0].name, file);
    }
  }

  saveImageInAmplify(filename, file) {
    this.isOpenLoader = true;

    const customPrefix = {
      public: 'myPublicPrefix/', 
      protected: 'myProtectedPrefix/',
      private: 'myPrivatePrefix/'
    };
    const self = this;
    Storage.put(filename, file, {
      progressCallback(progress) {
        const value = Math.round(progress.loaded / progress.total * 100);
        self.current = value;
        console.log('Uploaded : ', value, self.current);
      },
      contentType: 'image/png',
    }).then((result: any) =>{
      console.log('Success result =>', result);
      this.isOpenLoader = false;
      //this.imagePath = 'URL AMAZON' + result.key;
    }).catch((err) =>{
      console.log('error =>', err);
      this.isOpenLoader = false;
    });
  }

}
