import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ChapeletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapelet',
  templateUrl: 'chapelet.html',
})
export class ChapeletPage {

  language;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapeletPage');
  }

  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
    });
  }



}
