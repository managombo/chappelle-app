import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RssService} from "../../services/rss-service";
// import{Http} from "@angular/http";
// import {HttpClient} from "@angular/common/http";
import moment from 'moment';


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
  public prieres: any;
  // public title:any;
  // public description:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              // public http: HttpClient,
              public rssService: RssService,
              private localNotifications: LocalNotifications
              ) {
  }



  ionViewDidLoad(){
    this.rssService.load().subscribe(
      data => {
        // console.log(data);
        // this.priere = data;
        // this.title = this.priere.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        // console.log(this.priere.getElementsByTagName("title")[0].childNodes[0].nodeValue);
        // console.log('1');
        // this.description = this.priere.getElementsByTagName("description")[0].childNodes[0].nodeValue;
        // console.log(this.priere.getElementsByTagName("description")[0].childNodes[0].nodeValue);
        // console.log('2');

        this.prieres = data;
        // this.title = this.priere.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        // console.log(this.priere.getElementsByTagName("title")[0].childNodes[0].nodeValue);
        console.log('1');
        // this.description = this.priere.getElementsByTagName("description")[0].childNodes[0].nodeValue;
        // console.log(this.priere.getElementsByTagName("description")[0].childNodes[0].nodeValue);
        console.log('2');
      }
    );
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      at: new Date(new Date().getTime() + 10),
      led: 'FF0000',
      sound: null
    });
    setInterval(function () {
      console.log("Hello");
    }, 5000);
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


}

