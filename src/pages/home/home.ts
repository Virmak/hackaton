import { InscriptionPage } from './../inscription/inscription';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoinscription(){
    this.navCtrl.push(InscriptionPage);
  }

}
