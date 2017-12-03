import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { CreateEventPage } from '../create-event/create-event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoinscription(){
    this.navCtrl.push(SignupPage);
  }

  gotoCreateEvent()
  {
    this.navCtrl.push(CreateEventPage);
  }

}
