import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HorairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horaire',
  templateUrl: 'horaire.html',
})
export class HorairePage {

  language;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorairePage');
  }



  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
    });
  }

}
