import { ModifypofilePage } from './../modifypofile/modifypofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HackatonProvider } from '../../providers/hackaton/hackaton';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userData={
    imageSrc:"",
    firstName:"skander",
    lastName:"loussaief",
    userName:"sk",
    email:"Iskander@gmail.com",
    tel :"24717078",
    adresse :"rte gremda",
    score:"5"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider:HackatonProvider) {

    this.provider.getUserById(2).subscribe((response) => {
      console.log(response);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  editprofile()
  {
    this.navCtrl.push(ModifypofilePage);
  }

}