import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage {

  language;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriquePage');
  }



  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
    });
  }

}
