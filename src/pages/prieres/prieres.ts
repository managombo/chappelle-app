import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RssService} from "../../services/rss-service";
// import{Http} from "@angular/http";
// import {HttpClient} from "@angular/common/http";
import moment from 'moment';
import { Storage } from '@ionic/storage';


import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the PrieresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prieres',
  templateUrl: 'prieres.html',
  providers:[RssService]
})
export class PrieresPage implements OnInit{

  // public priere: any;
  public prieres: any = null;
  // public title:any;
  // public description:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              // public http: HttpClient,
              public rssService: RssService,
              private localNotifications: LocalNotifications,
              private storage: Storage
              ) {
  }



  ionViewDidLoad(){

    // this.localNotifications.schedule({
    //   text: "test",
    //   // text: this.prieres.getElementsByTagName("title")[0].childNodes[0].nodeValue,
    //   at: new Date(new Date().getTime() + 10),
    //   led: 'FF0000',
    //   sound: null
    // });

    this.rssService.load().subscribe(
      data => {
        console.log('load prieres');
        console.log(data);
        // this.prieres = data;
        // this.title = this.prieres.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        // console.log(this.prieres.getElementsByTagName("title")[0].childNodes[0].nodeValue);
        // console.log('1');
        // this.description = this.prieres.getElementsByTagName("description")[0].childNodes[0].nodeValue;
        // console.log(this.prieres.getElementsByTagName("description")[0].childNodes[0].nodeValue);
        // console.log('2');

        if (data) {

          // Or to get a key/value pair
          this.prieres = data;
          var title_priere = this.prieres[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
          var text_priere = this.decodeHtml(this.prieres[0].getElementsByTagName("description")[0].childNodes[0].nodeValue.replace(/<a\b[^<]*(?:(?!<\/a>)<[^<]*)*<\/a>/gi, ""));
          console.log(text_priere);
          var test_title= 'test3'
          console.log(typeof title_priere);


          // this.storage.get('prieres').then((val) => {
          //   if (this.prieres != val) {
          //     this.storage.set('name', this.prieres);

              this.localNotifications.schedule({
                // text: "test1",
                // text: title_priere,
                text: text_priere,
                title: title_priere,
                // text: test_title,
                // text: this.prieres[0].getElementsByTagName("title").childNodes[0].nodeValue,
                // at: new Date(new Date().getTime() + 10),
                // trigger: { every: { hour: 9, minute: 0 } },
                led: 'FF0000',
                sound: null
              });

          //   }
          // });
        } else {
          // this.storage.get('prieres').then((val) => {
          //   this.prieres = val;
          // });
        }


      });


      //   setInterval(function () {
      //
      //
      //     // this.title = this.priere.getElementsByTagName("title")[0].childNodes[0].nodeValue;
      //     // console.log(this.priere.getElementsByTagName("title")[0].childNodes[0].nodeValue);
      //     console.log('1');
      //     // this.description = this.priere.getElementsByTagName("description")[0].childNodes[0].nodeValue;
      //     // console.log(this.priere.getElementsByTagName("description")[0].childNodes[0].nodeValue);
      //     console.log('2');
      //   }
    //
    // }, 500000000);
  }

  ngOnInit(){
    // this.http.get('/assets/json/test.json').subscribe((res) => {
    //   // return res;
    //   this.pays = res;
    //
    //   console.log(this.pays);
    // });
  }

  onDateConvert(date){
    return moment(date).lang('fr').format('LL');
  }

  decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }


}

