import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HackatonProvider } from '../../providers/hackaton/hackaton'; 
import { ShowEventPage } from '../show-event/show-event';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  events : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: HackatonProvider) {

    this.provider.getEvents().subscribe((response) => this.events = response);

  }

  openEvent(id) {
    this.navCtrl.push(ShowEventPage, id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
