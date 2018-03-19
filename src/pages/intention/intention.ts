import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HttpClient, HttpHeaders} from "@angular/common/http";


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
  name;
  subName;
  content;
  language;
;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private http: HttpClient,
              private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntentionPage');
  }


  ionViewWillEnter() {
    this.storage.get('language').then((val) => {
      this.language = val;
    });
  }


  submit() {

    var typepriere = {
      "illness": "Maladie et problèmes de santé",
      "thanks": "Remerciement",
      "school-failure": "Echec académique",
      "family-conflict": "Conflit Familial",
      "work-conflict": "Conflit de travail",
      "job-search": "Recherche d'emploi"
    }

    var link = 'http://35.189.73.232:3000';
    var myData = JSON.stringify({
      name: this.name,
      subName: this.subName,
      prayType: typepriere[this.prayType],
      content: this.content,
      language: this.language

    });

    console.log(myData);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(link, myData, httpOptions)
      .subscribe(data => {
        console.log(data); //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response

        var message = {
          french: "Message envoyé",
          english: "Message envoyé",
          spanish: "Mensaje enviado"
        }

        // var messageButton = {
        //   french: "Valier",
        //   english: "Message envoyé",
        //   spanish: "Mensaje enviado"
        // }

        let alert = this.alertCtrl.create({
          title: message[this.language],
          buttons: ['Ok']
        });

        alert.present();

        this.name= '';
        this.subName= '';
        this.prayType= '';
        this.content='';

      }, error => {
        console.log("Oooops!");
      });
  }

}
