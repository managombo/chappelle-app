import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrieresPage} from "../prieres/prieres";
import {AgendaPage} from "../agenda/agenda";
import {BenedictionPage} from "../benediction/benediction";
import {HistoriquePage} from "../historique/historique";
import {IntentionPage} from "../intention/intention";
import {ParcoursPage} from "../parcours/parcours";
import {ChapeletsPage} from "../chapelets/chapelets";



@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  navigationMenu = {
    "prieres": PrieresPage,
    "chapelets": ChapeletsPage,
    "agenda": AgendaPage,
    "benediction": BenedictionPage,
    "historique": HistoriquePage,
    "intention": IntentionPage,
    "parcours": ParcoursPage,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  onNavSelect(name: string){
    this.navCtrl.push(this.navigationMenu[name]);
  }

}
