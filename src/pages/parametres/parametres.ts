import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ParametresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html',
})
export class ParametresPage {
  countrySelect;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage
              ) {
  }

  ionViewWillLoad(){
    this.storage.get('language').then((val) => {
      this.countrySelect = val;
      // console.log('Your age is', val);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametresPage');
  }

  onLangageChoosen(event){
    this.storage.set('language', this.countrySelect);
    console.log(this.countrySelect);
  }

}
