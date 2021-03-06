import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Signup } from '../pages/signup/signup';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any }>;
  rootPage: any = HomePage;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.initializeApp();
    this.firebaseInitialize();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

    firebase.auth().onAuthStateChanged(function (user) {
      var self = this;
      if (user) {
        self.rootPage = HomePage;
      } else {
        self.rootPage = Signup;
      }
    });
  }
  firebaseInitialize() {
    firebase.initializeApp({
      apiKey: "AIzaSyAOG0dg28CjbNrEgOfdqraNn_XbtwbNmEo",
      authDomain: "appcomewithme-f5eb1.firebaseapp.com",
      databaseURL: "https://appcomewithme-f5eb1.firebaseio.com",
      storageBucket: "appcomewithme-f5eb1.appspot.com",
      messagingSenderId: "151609093465"
    });


  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
