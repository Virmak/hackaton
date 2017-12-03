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

  lat: number;
  lng: number;

  commentMessage: string = '';

  eventData: any = {
    name:"",
    start_date: "",
    description: "",
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: HackatonProvider) {
    this.provider.getEventById(this.navParams.data).subscribe(response => {
      this.eventData = response;
      this.eventData.location = this.eventData.location.replace('(', '').replace(')', '');
    });
  }

  submitComment() {
    this.provider.registerComment(2, this.navParams.data, this.commentMessage).subscribe(response => {
      console.log(response);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowEventPage');
  }

}
