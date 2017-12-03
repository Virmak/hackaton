import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HackatonProvider } from '../../providers/hackaton/hackaton';
import { ShowEventPage } from '../show-event/show-event';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  items:any;

  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: HackatonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(event){
    this.provider.searchEventByName(this.searchQuery).subscribe(response => this.items=response);
  }

  gotoEvent(id) {
    this.navCtrl.push(ShowEventPage, id);
  }

}
