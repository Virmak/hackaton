
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from './../profile/profile';
import { InscriptionPage } from './../inscription/inscription';
import { SearchPage } from './../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SearchPage;
  tab4Root =InscriptionPage;
  tab5Root =ProfilePage;
 
  constructor() {

  }
}
