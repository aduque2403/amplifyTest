import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';

import Amplify from 'aws-amplify';
import amplify from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform : Platform,
    private splashScreen : SplashScreen,
    private statusBar : StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      Amplify.configure(amplify);
    })
  }

}