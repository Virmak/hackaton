import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HackatonProvider } from '../../providers/hackaton/hackaton';

/**
 * Generated class for the ShowEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-event',
  templateUrl: 'show-event.html',
})
export class ShowEventPage {

  eventData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: HackatonProvider) {
  
    console.log(this.navParams.data);
    //this.provider.getEventById(this.navParams.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowEventPage');
  }

}
