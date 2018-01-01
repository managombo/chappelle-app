import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Activity} from "../../data/activity.interface";
import{HttpClient} from "@angular/common/http";
import * as moment from 'moment';
import {HorairePage} from "../horaire/horaire";

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage implements OnInit {

  activities: Activity[]=[];
  activitiesFiltered: Activity[]=[];
  horaire: any;
  eventSource;
  viewTitle;
  categorySelect = "all";
  countrySelect = "all";
  isToday: boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }; // these are the variable used by the calendar.

  evenements:any;
  pays:any =[];
  pelerinages:any;
  activity: Activity;



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private alertCrl: AlertController){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  convertToActivities(source: string){

  }

  ngOnInit(){
    this.horaire = HorairePage;


   // console.log(this.httpProvider.getJsonData('../../data/mr_evenements.json'));
   //  console.log('test1');
   // console.log(this.httpProvider.getJsonData('../../../data/mr_evenements.json'));
   //  this.httpProvider.getJsonData('../../../data/mr_evenements.json');





      this.http.get('assets/json/mr_evenements.json').subscribe((res) => {
        // return res;
        this.evenements = res;
        // console.log(this.evenements);


        // var i =0;
        for(var evenement of this.evenements){


          // i=i+1;
          // if(i>5) break;


          this.activities.push({
            id:evenement.id,
            title:evenement.nom,
            startTime:new Date(evenement.date+"T"+evenement.heure_debut),
            endTime:new Date(evenement.date+"T"+((evenement.heure_fin == "00:00:00")? "23:59:59" : evenement.heure_fin)),
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


        this.http.get('assets/json/mr_pelerinages.json').subscribe((res) => {
          // return res;
          this.pelerinages = res;
          // console.log(this.pelerinages);
          for(var pelerinage of this.pelerinages){


            // console.log(this.activity);

            this.activities.push({
              id:pelerinage.id,
              title:pelerinage.nom,
              startTime:new Date(pelerinage.date+"T"+pelerinage.heure_debut),
              endTime:new Date(pelerinage.date+"T23:59:59"),
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
        });



      });

    this.http.get('assets/json/mr_pays.json').subscribe((res) => {
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
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCrl.create({
      title: ''+event.title,
      subTitle: '<p text-center="">Du<br>'+ start+' <br> au <br>'+ end + '</p><br>'+ 'Description:<br>'+event.description,
      buttons: ['Enregistrer dans le calendrier','Ok']
    });

    alert.present();
  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  today() {
    this.calendar.currentDate = new Date();
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



}
