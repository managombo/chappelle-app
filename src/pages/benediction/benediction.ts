import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-benediction',
  templateUrl: 'benediction.html',
})
export class BenedictionPage {

  language;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BenedictionPage');
  }


  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
    });
  }

}
