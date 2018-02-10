import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ChapeletLumineuxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapelet-lumineux',
  templateUrl: 'chapelet-lumineux.html',
})
export class ChapeletLumineuxPage {

  language;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapeletLumineuxPage');
  }


  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
    });
  }

}
