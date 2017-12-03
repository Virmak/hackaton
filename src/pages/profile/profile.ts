import { ModifypofilePage } from './../modifypofile/modifypofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HackatonProvider } from '../../providers/hackaton/hackaton';
import { Storage } from '@ionic/storage';


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
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    tel :"",
    adresse :"",
    score:""
  };

  currentUser = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider:HackatonProvider,
    private storage: Storage) {

      if (this.navParams.data.userId == null) {
        this.storage.get('userId').then((val) => {
          
          this.provider.getUserById(val).subscribe((response) => {
            this.userData = response;
            
          });
        });

        this.currentUser = true;
      } else {
        this.provider.getUserById(this.navParams.data.userId).subscribe((response) => {
          this.currentUser = false;
          this.userData = response;
        });
      }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  editprofile()
  {
    this.navCtrl.push(ModifypofilePage, this.userData);
  }

}
