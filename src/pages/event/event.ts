import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;
@IonicPage()

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  @ViewChild('map') mapRef : ElementRef;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showmap();
  }
  showmap(){
    //map location
    const location=new google.maps.LatLng(34.7452,10.7613);
    //map option
    const options={
      center : location,
      zoom : 15,
      streetViewControl:false,
      mapTypeId : 'roadmap'
    }
    
    const map= new google.maps.Map(this.mapRef.nativeElement,    options);

  //  setTimeout(()=>{
    //  map.setMapTypeId('roadmap')},3000);
                    
    this.addMarker(location,map);
  }
  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
  }
}
