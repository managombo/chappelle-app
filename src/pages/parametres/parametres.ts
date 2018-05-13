import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular';
import {FCM} from "@ionic-native/fcm";
import { Platform } from 'ionic-angular';

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
  language;
  subscribed;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              public viewCtrl: ViewController,
              private fcm: FCM,
              public plt: Platform
              ) {
  }

  ionViewWillLoad(){
    this.storage.get('language').then((val) => {
      this.countrySelect = val;
      this.language = val;
      // console.log('Your age is', val);
    });

    this.storage.get('subscribed').then((val) => {
      this.subscribed = val;
    });
  }

  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
      this.changeBackButton();
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametresPage');


  }

  onLangageChoosen(event){
    this.storage.set('language', this.countrySelect);
    this.language = this.countrySelect;
    this.changeBackButton();
    console.log(this.countrySelect);
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

  updateItem(){
    this.storage.set('subscribed', this.subscribed);

    if(this.subscribed == true){
      this.fcm.subscribeToTopic('all');
      console.log("subcribed from notifications");
    } else if(this.subscribed == false){
      this.fcm.unsubscribeFromTopic('all');
      console.log("unsubcribed from notifications");
    }
  }



}
