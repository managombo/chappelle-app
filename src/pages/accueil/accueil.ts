import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage
              // private backgroundMode: BackgroundMode
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
    // this.backgroundMode.enable();
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
    });


  }

  onNavSelect(name: string){
    this.navCtrl.push(this.navigationMenu[name]);
  }

}
