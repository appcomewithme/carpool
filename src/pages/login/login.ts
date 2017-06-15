import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Signup } from '../signup/signup';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  backgrounds = [
    "assets/img/background/background-1.jpg",
    "assets/img/background/background-2.jpg",
    "assets/img/background/background-3.jpg",
    "assets/img/background/background-4.jpg"
  ]
  public loginForm: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      mobile: ['', Validators.compose([Validators.minLength(10),
      Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }
  doLogin() {
    debugger;
    if (!this.loginForm.valid) {
      console.log("Invalid or empty data");
    } else {
      let userEmail = this.loginForm.value.email;
      let userPassword = this.loginForm.value.password;

      console.log('user data', userEmail, userPassword);
    }
  }
  CreateAccount() {
    this.navCtrl.setRoot(Signup);
  }

}
