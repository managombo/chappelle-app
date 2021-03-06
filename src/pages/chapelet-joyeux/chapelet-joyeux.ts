import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular';


/**
 * Generated class for the ChapeletJoyeuxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapelet-joyeux',
  templateUrl: 'chapelet-joyeux.html',
})
export class ChapeletJoyeuxPage {

  language;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              public viewCtrl: ViewController,
              public plt: Platform

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapeletJoyeuxPage');
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
      }else if (this.language == 'arabic') {
        this.viewCtrl.setBackButtonText('الى الخلف');
      }
    }

  }

}
