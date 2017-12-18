import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgCalendarModule} from "ionic2-calendar";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AccueilPage} from "../pages/accueil/accueil";
import {AgendaPage} from "../pages/agenda/agenda";
import {BenedictionPage} from "../pages/benediction/benediction";
import {HistoriquePage} from "../pages/historique/historique";
import {ChapeletPage} from "../pages/chapelet/chapelet";
import {PrieresPage} from "../pages/prieres/prieres";
import {ParcoursPage} from "../pages/parcours/parcours";
import {IntentionPage} from "../pages/intention/intention";
import {ChapeletsPage} from "../pages/chapelets/chapelets";
import {ChapeletGlorieuxPage} from "../pages/chapelet-glorieux/chapelet-glorieux";
import {ChapeletLumineuxPage} from "../pages/chapelet-lumineux/chapelet-lumineux";
import {ChapeletDouloureuxPage} from "../pages/chapelet-douloureux/chapelet-douloureux";
import {ChapeletJoyeuxPage} from "../pages/chapelet-joyeux/chapelet-joyeux";
import {TabsPage} from "../pages/tabs/tabs";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccueilPage,
    AgendaPage,
    BenedictionPage,
    HistoriquePage,
    PrieresPage,
    ParcoursPage,
    IntentionPage,
    ChapeletsPage,
    ChapeletPage,
    ChapeletGlorieuxPage,
    ChapeletLumineuxPage,
    ChapeletDouloureuxPage,
    ChapeletJoyeuxPage,
    TabsPage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgCalendarModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccueilPage,
    AgendaPage,
    BenedictionPage,
    HistoriquePage,
    PrieresPage,
    ParcoursPage,
    IntentionPage,
    ChapeletsPage,
    ChapeletPage,
    ChapeletGlorieuxPage,
    ChapeletLumineuxPage,
    ChapeletDouloureuxPage,
    ChapeletJoyeuxPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
