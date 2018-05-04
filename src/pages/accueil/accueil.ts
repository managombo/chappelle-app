import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {PrieresPage} from "../prieres/prieres";
import {AgendaPage} from "../agenda/agenda";
import {BenedictionPage} from "../benediction/benediction";
import {HistoriquePage} from "../historique/historique";
import {IntentionPage} from "../intention/intention";
import {ParcoursPage} from "../parcours/parcours";
import {ChapeletsPage} from "../chapelets/chapelets";
import {MedaillePage} from "../medaille/medaille";
import {ParametresPage} from "../parametres/parametres";
// import { BackgroundMode } from '@ionic-native/background-mode';
import { Storage } from '@ionic/storage';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { DeviceFeedback } from '@ionic-native/device-feedback';
import {FCM} from "@ionic-native/fcm";
import {LocalNotifications} from "@ionic-native/local-notifications";






@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  language='french';
  navigationMenu = {
    "prieres": PrieresPage,
    "chapelets": ChapeletsPage,
    "agenda": AgendaPage,
    "benediction": BenedictionPage,
    "historique": HistoriquePage,
    "intention": IntentionPage,
    "parcours": ParcoursPage,
    "medaille": MedaillePage,
    "parametres": ParametresPage
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              // private push: Push,
              private fcm: FCM,
              private deviceFeedback: DeviceFeedback,
              private localNotifications: LocalNotifications,
              // private backgroundMode: BackgroundMode,
              private platform: Platform
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
    // this.backgroundMode.enable();

    this.platform.ready().then(() => {


      //
      //   this.fcm.getToken().then(token=>{
      //     // backend.registerToken(token);
      //     console.log("success token"+token);
      //   });
      //
      //
      //
      // this.fcm.onNotification().subscribe(data => {
      //
      //   console.log("onNotification firebase");
      //
      //   // this.localNotifications.schedule({
      //   //   // text: "test1",
      //   //   // text: title_priere,
      //   //   text: JSON.stringify(data),
      //   //   title: data.title,
      //   //   // text: test_title,
      //   //   // text: this.prieres[0].getElementsByTagName("title").childNodes[0].nodeValue,
      //   //   // at: new Date(new Date().getTime() + 10),
      //   //   // trigger: { every: { hour: 9, minute: 0 } },
      //   //   led: 'FF0000',
      //   //   sound: null
      //   // });
      //
      //   if (data.wasTapped) {
      //     console.log("Received in background");
      //     // alert( JSON.stringify(data) );
      //
      //
      //   } else {
      //     console.log("Received in foreground");
      //   }
      //
      // });
      //
      // this.fcm.onTokenRefresh().subscribe(token=>{
      //   // backend.registerToken(token);
      // });

    });



  }


  ionViewWillEnter(){

    // Or to get a key/value pair
    this.storage.get('language').then((val) => {
      if(val == null){
        this.storage.set('language', 'french');
        this.language = 'french';
      } else {
        this.language = val;
      }

      // console.log('Your age is', val);
      console.log("### accueil language = "+this.language);
    });

    this.storage.get('subscribed').then((val) => {
      if(val == null){
        this.storage.set('subscribed', true);
        this.fcm.subscribeToTopic('all');
      }
    });


  }



  onNavSelect(name: string){
    this.navCtrl.push(this.navigationMenu[name]);
  }

}
