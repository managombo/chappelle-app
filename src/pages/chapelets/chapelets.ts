import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {ChapeletGlorieuxPage} from "../chapelet-glorieux/chapelet-glorieux";
import {ChapeletLumineuxPage} from "../chapelet-lumineux/chapelet-lumineux";
import {ChapeletJoyeuxPage} from "../chapelet-joyeux/chapelet-joyeux";
import {ChapeletDouloureuxPage} from "../chapelet-douloureux/chapelet-douloureux";
import {ChapeletPage} from "../chapelet/chapelet";

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

  // tabsPage = TabsPage;

  chapeletGlorieux = ChapeletGlorieuxPage;
  chapeletLumineux = ChapeletLumineuxPage;
  chapeletJoyeux = ChapeletJoyeuxPage;
  chapeletDouloureux = ChapeletDouloureuxPage;
  chapeletPage = ChapeletPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapeletsPage');
  }

}
