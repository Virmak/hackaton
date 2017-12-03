import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from '../event/event';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToEvent(){
    this.navCtrl.push(EventPage)

  }
  goToSign(){
    this.navCtrl.push(SigninPage)

  }
}
