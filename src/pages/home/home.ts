import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { CreateEventPage } from '../create-event/create-event';
import { FeedPage } from '../feed/feed';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userId: number = 3;

  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.set('userId', this.userId);
  }
  gotoinscription(){
    this.navCtrl.push(SignupPage);
  }

  gotoCreateEvent()
  {
    this.navCtrl.push(CreateEventPage, this.userId);
  }

  gotoFeed()
  {
    this.navCtrl.push(FeedPage, this.userId);
  }

}
