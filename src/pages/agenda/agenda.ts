import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Activity} from "../../data/activity.interface";
import{HttpClient} from "@angular/common/http";
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage implements OnInit {

  activities: Activity[]=[];

  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }; // these are the variable used by the calendar.

  evenements:any;
  pays:any;
  pelerinages:any;
  activity: Activity;



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  convertToActivities(source: string){

  }

  ngOnInit(){


    this.activity ={
      id:'',
      title:'',
      startTime:'',
      endTime:'',
      allDay:false,
      description:'',
      country:'',
      type:'',
      category:'',
    };

   // console.log(this.httpProvider.getJsonData('../../data/mr_evenements.json'));
    console.log('test1');
   // console.log(this.httpProvider.getJsonData('../../../data/mr_evenements.json'));
   //  this.httpProvider.getJsonData('../../../data/mr_evenements.json');


    this.http.get('/assets/json/mr_evenements.json').subscribe((res) => {
      // return res;
      this.evenements = res;
      // console.log(this.evenements);



      for(var evenement of this.evenements){
        console.log(evenement);

        this.activity.id =evenement.id;
        this.activity.title=evenement.nom;
        this.activity.startTime=(evenement.date+"T"+evenement.heure_debut);
        this.activity.endTime=(evenement.date+"T"+evenement.heure_fin);
        this.activity.allDay=false;
        this.activity.description=evenement.descriptif;
        this.activity.country=evenement.pays;
        this.activity.category="evenement";

        this.activities.push(this.activity);
      }


      this.http.get('/assets/json/mr_pelerinages.json').subscribe((res) => {
        // return res;
        this.pelerinages = res;
        // console.log(this.pelerinages);
        for(var pelerinage of this.pelerinages){

          this.activity.id =pelerinage.id;
          this.activity.title=pelerinage.nom;
          this.activity.startTime=(pelerinage.date+"T"+pelerinage.heure_debut);
          this.activity.endTime=(pelerinage.date+"T23:59:59");
          this.activity.allDay=false;
          this.activity.description=pelerinage.ref;
          this.activity.country=pelerinage.pays;
          this.activity.category="pelerinage";

          // console.log(this.activity);

          this.activities.push(this.activity);
          console.log(this.activities);
        }
      });



    });
    this.http.get('/assets/json/mr_pays.json').subscribe((res) => {
      // return res;
      this.pays = res;
      // console.log(this.pays);
    });



  }



  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
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
  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
        endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false
        });
      }
    }
    return events;
  }
  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
  markDisabled = (date:Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };



}
