import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';

@Component({
    selector: 'page-confirmation',
    templateUrl: 'confirmation.html',
})
export class Confirmation {


    verify() {
        confirmationResult.confirm(code).then(function (result) {
            // User signed in successfully.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }
}