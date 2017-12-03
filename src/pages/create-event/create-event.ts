import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HackatonProvider } from '../../providers/hackaton/hackaton';

/**
 * Generated class for the CreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {
  @ViewChild('map') mapRef: ElementRef;
  eventData: any = {};
  marker = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: HackatonProvider) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    //map location
    const location=new google.maps.LatLng(34.7452,10.7613);
    //map option
    const options={
      center : location,
      zoom : 15,
      streetViewControl:false,
      mapTypeId : 'roadmap',
      disableDefaultUi: true
    }
    
    const map= new google.maps.Map(this.mapRef.nativeElement, options);

    map.addListener('click', (e) => {
      this.placeMarkerAndPanTo(e.latLng, map);
    });

  //  setTimeout(()=>{
    //  map.setMapTypeId('roadmap')},3000);
                    
    //this.addMarker(location,map);
  }

  placeMarkerAndPanTo(latLng, map) {
    if (this.marker == null) {
      this.marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    } else {
      this.marker.setPosition(latLng);
    }
    map.panTo(latLng);
  }

  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
  }

  createEvent() {
    if (this.marker == null) {
      alert('You must select position on map');
      return;
    }
    this.eventData.location = this.marker.getPosition();
    this.eventData.user_id = 2;
    this.provider.createEvent(this.eventData).subscribe(response => {
      if (response.result == 'success') {
        this.navCtrl.pop();
      }
    });
  }

}
