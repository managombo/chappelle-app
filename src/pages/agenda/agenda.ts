import {Component, OnInit, ViewChild} from '@angular/core';
import {
  AlertController, Content, IonicPage, LoadingController, NavController, NavParams, Platform,
  ViewController
} from 'ionic-angular';
import {Activity} from "../../data/activity.interface";
import{HttpClient} from "@angular/common/http";
// import * as moment from 'moment';
import * as moment from 'moment-timezone';
// import {HorairePage} from "../horaire/horaire";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage implements OnInit {

  @ViewChild(Content) content: Content;

  activities: Activity[]=[];
  activitiesFiltered: Activity[]=[];
  horaire;
  eventSource;
  viewTitle;
  categorySelect = "all";
  countrySelect = "all";
  isToday: boolean;
  // calendar = {
  //   locale: 'en',
  //   mode: 'month',
  //   currentDate: new Date()
  // }; // these are the variable used by the calendar.

  calendar_french = {
    locale: 'fr',
    mode: 'month',
    currentDate: new Date()
  };

  calendar_spanish = {
    locale: 'es',
    mode: 'month',
    currentDate: new Date()
  };

  calendar_english = {
    locale: 'en',
    mode: 'month',
    currentDate: new Date()
  };

  calendar_portuguese = {
    locale: 'pt',
    mode: 'month',
    currentDate: new Date()
  };

  calendar_arabic = {
    locale: 'ar',
    mode: 'month',
    currentDate: new Date()
  };



  evenements:any;
  pays:any =[];
  pelerinages:any;
  activity: Activity;
  loading: any;
  language;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private alertCrl: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    public plt: Platform,
    public viewCtrl: ViewController
  ){
  }

  ionViewWillEnter(){


    this.storage.get('language').then((val) => {
      this.language = val;
      this.changeBackButton();
      console.log("### value language: "+val);
      //
      // this.calendar = {
      //   locale: '',
      //   mode: 'month',
      //   currentDate: new Date()
      // }; // these are the variable used by the calendar.
      //
      // if(this.language == "french"){
      //   this.calendar.locale = "fr-FR";
      // } else if(this.language == "english"){
      //   this.calendar.locale = "en-GB";
      // }
      //
      //
      // console.log("###### langage: "+this.language);
      // console.log("###### langage code: "+this.calendar.locale);

    });


    // this.storage.get('language').then((val) => {
    //   this.language = val;
    // });
    //
    //
    // if(this.language == "french"){
    //   this.calendar.locale = "fr";
    // } else if(this.language == "english"){
    //   this.calendar.locale = "en";
    // }
    // console.log("###### langage: "+this.language);

    // this.storage.get('language').then((val) => {
    //   this.language = val;
    //   console.log("### value language: "+val);
    //
    //   if(this.language == "french"){
    //     this.calendar.locale = "fr-FR";
    //   } else if(this.language == "english"){
    //     this.calendar.locale = "en-GB";
    //   }
    //   console.log("###### langage: "+this.language);
    //   console.log("###### langage code: "+this.calendar.locale);
    //
    // });

  }

  ionViewDidLeave(){
    this.loading.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
    this.horaire = 'HorairePage';

  }

  convertToActivities(source: string){

  }


  ngOnInit(){



//     this.storage.get('language').then((val) => {
//       this.language = val;
//     });
//
// console.log(this.language);
//     if(this.language == "french"){
//       this.calendar.locale = "fr";
//     } else if(this.language == "english"){
//       this.calendar.locale = "en";
//     }


   // console.log(this.httpProvider.getJsonData('../../data/mr_evenements.json'));
   //  console.log('test1');
   // console.log(this.httpProvider.getJsonData('../../../data/mr_evenements.json'));
   //  this.httpProvider.getJsonData('../../../data/mr_evenements.json');





    //
    //
    // if(this.language== "french"){
    //
    // this.loading = this.loadingCtrl.create({
    //   content: 'Chargement...'
    // });
    //   this.loading.present();
    // } else  if(this.language== "english"){

      this.loading = this.loadingCtrl.create({
        content: ''
      });
      this.loading.present();
    //
    // } else  if(this.language== "spanish"){
    //
    //   this.loading = this.loadingCtrl.create({
    //     content: 'Cargando...'
    //   });
    //   this.loading.present();
    //
    // }







      this.http.get('https://medaille-miraculeuse-prieres.appspot.com/agenda').subscribe((res) => {
      // this.http.get('http://localhost:8080/agenda').subscribe((res) => {
      // this.http.get('https://raw.githubusercontent.com/managombo/chappelle-app/master/src/assets/json/mr_evenements.json').subscribe((res) => {
      // this.http.get('https://raw.githubusercontent.com/managombo/chappelle-app/master/src/assets/json/mr_evenements.json').subscribe((res) => {
        // return res;
        this.evenements = res;
        // console.log(this.evenements);


        // var i =0;
        for(var evenement of this.evenements){

          var timezone = moment.tz.guess();
          var starthour = moment.tz(evenement.date+" "+evenement.heure_debut, timezone).clone().tz("Europe/Gibraltar").toDate();

          var endhour = moment.tz(evenement.date+((evenement.heure_fin == " 00:00:00")? " 23:59:59": " "+evenement.heure_fin), timezone).clone().tz("Europe/Gibraltar").toDate();
          // i=i+1;
          // if(i>5) break;


          this.activities.push({
            id:evenement.id,
            title:evenement.nom,
            // startTime:new Date(evenement.date+"T"+evenement.heure_debut),
            startTime:starthour,
            // endTime:new Date(evenement.date+"T"+((evenement.heure_fin == "00:00:00")? "23:59:59" : evenement.heure_fin)),
            endTime:endhour,
            allDay:false,
            description:evenement.descriptif,
            country:evenement.pays,
            type:'',
            category:"evenement",
          });

        }
        console.log("evenement");
        // console.log(this.activities);

        // console.log(this.activities);


        // this.http.get('https://raw.githubusercontent.com/managombo/chappelle-app/master/src/assets/json/mr_pelerinages.json').subscribe((res) => {
        // this.http.get('http://localhost:8080/pelerinages').subscribe((res) => {
        this.http.get('https://medaille-miraculeuse-prieres.appspot.com/pelerinages').subscribe((res) => {
          // return res;
          this.pelerinages = res;

          this.loading.dismiss();
          // console.log(this.pelerinages);
          for(var pelerinage of this.pelerinages){

            // var starthour =  new Date(pelerinage.date+"T"+pelerinage.heure_debut);
            // var endhour = new Date(pelerinage.date+"T23:59:59");

            var timezone = moment.tz.guess();

            // console.log("initial date begin "+pelerinage.date+" "+pelerinage.heure_debut);
            var starthour = moment.tz(pelerinage.date+" "+pelerinage.heure_debut, timezone).clone().tz("Europe/Gibraltar").toDate();
            // console.log("final date begin "+starthour);
            // starthour = moment.tz(starthour.toString(), timezone).clone().tz("Europe/Gibraltar").toDate();
            // console.log("initial date end "+pelerinage.date+" 23:59:59")
            // var endhour = moment.tz(pelerinage.date+" 23:59:59", "Europe/Paris").clone().tz("Europe/Gibraltar").toDate();
            var endhour = moment.tz(pelerinage.date+" 23:59:59", timezone).clone().tz("Europe/Gibraltar").toDate();
            // console.log("final date end "+endhour);
            // endhour = moment.tz(endhour.toString(), timezone).clone().tz("Europe/Gibraltar").toDate();
            // var actual_date = new Date();
            // var actual_paris_date = actual_date.tz("Europe/Paris").format('YYYY-MM-DD HH:mm:ss')
            // endhour.setHours(endhour.getHours() + 1);
            // console.log(this.activity);

            this.activities.push({
              id:pelerinage.id,
              title:pelerinage.nom,
              startTime:starthour,
              endTime: endhour,
              allDay:false,
              description:pelerinage.descriptif,
              country:pelerinage.pays,
              type:'',
              category:"pelerinage",
            });
            // console.log(this.activities);
          }
          console.log("pelerinage");
          // console.log(this.activities);

          this.loadEvents(this.activities);
          this.content.resize();
        });



      });

    this.http.get('https://raw.githubusercontent.com/managombo/chappelle-app/master/src/assets/json/mr_pays.json').subscribe((res) => {
      // return res;
      this.pays = res;

        // console.log(this.pays);
    });





  }



  loadEvents(activitiesToLoad: Activity[]) {
    this.eventSource = activitiesToLoad;
    // this.eventSource = this.createRandomEvents();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onEventSelected(event) {
    let start = moment(event.startTime).lang('fr').format('LLLL');
    let end = moment(event.endTime).lang('fr').format('LLLL');

    let alert = this.alertCrl.create({
      title: ''+event.title,
      subTitle: '<p text-center="">Du<br>'+ start+' <br> au <br>'+ end + '</p><br>'+ 'Description:<br>'+event.description,
      buttons: ['Ok']
    });

    alert.present();
  }
  changeMode(mode) {
    this.calendar_french.mode = mode;
    this.calendar_english.mode = mode;
    this.calendar_spanish.mode = mode;
    this.calendar_arabic.mode = mode;
  }
  today() {
    this.calendar_french.currentDate = new Date();
    this.calendar_english.currentDate = new Date();
    this.calendar_spanish.currentDate = new Date();
    this.calendar_arabic.currentDate = new Date();
  }
  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }
  onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
  markDisabled = (date:Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };

  onActivityFiltered(event){
    if(this.categorySelect == "evenement"){
      if (this.countrySelect=="all") {
        this.activitiesFiltered = this.activities.filter(value => value.category == "evenement");
      } else {
        this.activitiesFiltered = this.activities.filter(value => value.category == "evenement" && value.country == this.countrySelect);
      }
    } else if (this.categorySelect=="pelerinage"){
      if (this.countrySelect=="all") {
        this.activitiesFiltered = this.activities.filter(value => value.category == "pelerinage");
      } else {
        this.activitiesFiltered = this.activities.filter(value => value.category == "pelerinage" && value.country == this.countrySelect);
      }
    } else {

      if (this.countrySelect=="all") {
        this.activitiesFiltered = this.activities;
      } else {
        this.activitiesFiltered = this.activities.filter(value => value.country == this.countrySelect);
      }
    }

    this.loadEvents(this.activitiesFiltered);
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
