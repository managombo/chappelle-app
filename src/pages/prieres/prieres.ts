import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {RssService} from "../../services/rss-service";
import moment from 'moment';
import { UserAgent } from '@ionic-native/user-agent';
import { Storage } from '@ionic/storage';



import {HttpClient} from "@angular/common/http";
// import {LocalNotifications} from "@ionic-native/local-notifications";

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

  public prieres: any = null;
  loading:any;
  language;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public rssService: RssService,
              // private localNotifications: LocalNotifications,
              public loadingCtrl: LoadingController,
              private http: HttpClient,
              private userAgent: UserAgent,
              public plt: Platform,
              public viewCtrl: ViewController,
              private storage: Storage
              ) {

  }




  ionViewDidLeave(){
    this.loading.dismiss();
  }

  ionViewWillEnter(){
    this.storage.get('language').then((val) => {
      this.language = val;
      this.changeBackButton();
    });

  }

  ionViewDidLoad(){
    this.loading = this.loadingCtrl.create({
      content: ``
    });

    // this.userAgent.set('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')
    //   .then((res: any) => console.log(res))
    //   .catch((error: any) => console.error(error));



    this.loading.present();
    // this.http.get('priere/feed', { responseType: 'text' })
    // this.http.get('https://raw.githubusercontent.com/managombo/chappelle-app/master/test.xml', { responseType: 'text' })
    // this.http.get('https://www.medaille-miraculeuse.fr/feed/', { responseType: 'text' })
    // this.http.get('http://localhost:8080/', { responseType: 'text' })
    this.http.get('https://medaille-miraculeuse-prieres.appspot.com/', { responseType: 'text' })
    // this.http.get('https://raw.githubusercontent.com/managombo/chappelle-app/master/src/assets/xml/test.xml', { responseType: 'text' })
    // this.http.get('assets/xml/test.xml', { responseType: 'text' })
      .map(res=>res.toString())
      .subscribe(data => {

        if (data) {
          console.log(data);
          var parser = new DOMParser();
          var xmlData = parser.parseFromString(data, "application/xml");
          var items = xmlData.querySelectorAll("item");

          this.loading.dismiss();

          // Or to get a key/value pair
          this.prieres = items;
          // this.prieres = data;
          var title_priere = this.prieres[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
          var text_priere = this.decodeHtml(this.prieres[0].getElementsByTagName("description")[0].childNodes[0].nodeValue.replace(/<a\b[^<]*(?:(?!<\/a>)<[^<]*)*<\/a>/gi, ""));
          console.log(text_priere);
          var test_title= 'test3';
          console.log(typeof title_priere);


          // this.storage.get('prieres').then((val) => {
          //   if (this.prieres != val) {
          //     this.storage.set('name', this.prieres);

              // this.localNotifications.schedule({
              //   // text: "test1",
              //   // text: title_priere,
              //   text: text_priere,
              //   title: title_priere,
              //
              //   led: 'FF0000',
              //   sound: null
              // });

        }
      });

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

