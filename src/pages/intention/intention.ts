import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the IntentionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intention',
  templateUrl: 'intention.html',
})
export class IntentionPage {

  prayType = "thanks";
  language;
;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private http: HttpClient
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntentionPage');
  }



  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
    });
  }

  onSend(){

    var option = {
      hostname : "35.189.73.232" ,
      port : 3000 ,
      method : "POST",
      path : "/"
    }

   this.http.get(option , function(resp){
      resp.on("data",function(chunck){
        console.log(chunck.toString());
      })
    })
    request.end();
  }

}
