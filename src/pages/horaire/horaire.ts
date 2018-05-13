import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
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
    private storage: Storage,
    public plt: Platform,
    public viewCtrl: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorairePage');
  }



  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
    });
    this.changeBackButton();
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
