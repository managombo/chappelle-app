import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ChapeletGlorieuxPage} from "../chapelet-glorieux/chapelet-glorieux";
import {ChapeletLumineuxPage} from "../chapelet-lumineux/chapelet-lumineux";
import {ChapeletJoyeuxPage} from "../chapelet-joyeux/chapelet-joyeux";
import {ChapeletDouloureuxPage} from "../chapelet-douloureux/chapelet-douloureux";
import {ChapeletPage} from "../chapelet/chapelet";
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the ChapeletsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapelets',
  templateUrl: 'chapelets.html',
})
export class ChapeletsPage {

  language;

  navigationMenu = {
    "apropos": ChapeletPage,
    "glorieux": ChapeletGlorieuxPage,
    "lumineux": ChapeletLumineuxPage,
    "joyeux": ChapeletJoyeuxPage,
    "douloureux": ChapeletDouloureuxPage
  };

  // tabsPage = TabsPage;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              public viewCtrl: ViewController,
              public plt: Platform
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapeletsPage');
  }


  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;

        this.changeBackButton();

    });

  }

  onNavSelect(name: string){
    this.navCtrl.push(this.navigationMenu[name]);
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
