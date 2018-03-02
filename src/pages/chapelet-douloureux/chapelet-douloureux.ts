import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the ChapeletDouloureuxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapelet-douloureux',
  templateUrl: 'chapelet-douloureux.html',
})
export class ChapeletDouloureuxPage {

  language;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              public viewCtrl: ViewController,
              public plt: Platform

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapeletDouloureuxPage');
  }



  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
      this.changeBackButton();
    });
  }



  changeBackButton(){
    if(this.plt.is("ios")) {
      if (this.language == 'french') {
        this.viewCtrl.setBackButtonText('Retour');
      } else if (this.language == 'english') {
        this.viewCtrl.setBackButtonText('Back');
      } else if (this.language == 'spanish') {
        this.viewCtrl.setBackButtonText('Retorno');
      }
    }

  }

}
