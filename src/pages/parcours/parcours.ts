import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HorairePage} from "../horaire/horaire";
import {MedaillePage} from "../medaille/medaille";
import {HistoriquePage} from "../historique/historique";
import {ChapeletPage} from "../chapelet/chapelet";

/**
 * Generated class for the ParcoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parcours',
  templateUrl: 'parcours.html',
})
export class ParcoursPage {

  horairePage = HorairePage;
  medaillePage = MedaillePage;
  historiquePage = HistoriquePage;
  chapeletPage = ChapeletPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParcoursPage');
  }

}
