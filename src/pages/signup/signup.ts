import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular';
import { Login } from '../login/login';
import { HomePage } from '../home/home';
import { Confirmation } from './confirmation';
import firebase from 'firebase';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  backgrounds = [
    "assets/img/background/background-1.jpg",
    "assets/img/background/background-2.jpg",
    "assets/img/background/background-3.jpg",
    "assets/img/background/background-4.jpg"
  ]
  private recaptchaVerifier: any;
  public data: any = {
    mobile: '',
    otp: ''
  };
  public isSubmitted: boolean = false;
  public confirmationResult1: any;




  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  doLogin() {
    if (!this.data.mobile) {
      console.log("Invalid or empty data");
    } else {
      var self = this;
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': function (response) {
          self.onSignInSubmit();
        }
      });
      // [END appVerifier]
      this.recaptchaVerifier.render().then(function (widgetId) {


      });
    };
  }

  onSignInSubmit() {
    var phoneNumber = `+91 ${this.data.mobile}`;
    debugger;
    var appVerifier = this.recaptchaVerifier;
    var self = this;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        self.confirmationResult1 = confirmationResult;
        self.isSubmitted = true;
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
      }).catch(function (error) {
        // Error; SMS not sent
        debugger;
        // console.error('Error during signInWithPhoneNumber', error);
        // window.alert('Error during signInWithPhoneNumber:\n\n'
        //   + error.code + '\n\n' + error.message);
        // window.signingIn = false;
        // updateSignInFormUI();
        // updateSignInButtonUI();
      });

  }

  verification() {
    var self = this;
    this.confirmationResult1.confirm(this.data.otp).then(function (result) {
      // User signed in successfully.
      self.confirmationResult1 = null;
      self.navCtrl.setRoot(HomePage);
    }).catch(function (error) {
      // User couldn't sign in (bad verification code?)
      console.error('Error while checking the verification code', error);
    });
  };

}



