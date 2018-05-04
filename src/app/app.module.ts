import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
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
import { HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {HorairePage} from "../pages/horaire/horaire";
import {IonicStorageModule} from "@ionic/storage";
// import { Storage } from '@ionic/storage';
import {LocalNotifications} from "@ionic-native/local-notifications";
import {ParametresPage} from "../pages/parametres/parametres";
import {MedaillePage} from "../pages/medaille/medaille";
// import {BackgroundMode} from "@ionic-native/background-mode";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';
import localeAr from '@angular/common/locales/ar';
import localePt from '@angular/common/locales/pt';
import {Push} from "@ionic-native/push";
import {DeviceFeedback} from "@ionic-native/device-feedback";
import {FCM} from "@ionic-native/fcm";
import {UserAgent} from "@ionic-native/user-agent";

registerLocaleData(localeFr);
registerLocaleData(localeEs);
registerLocaleData(localeAr);
registerLocaleData(localePt);


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
    TabsPage,
    HorairePage,
    ParametresPage,
    MedaillePage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgCalendarModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    // IonicStorageModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpModule
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
    TabsPage,
    HorairePage,
    ParametresPage,
    MedaillePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    // BackgroundMode,
    // { provide: LOCALE_ID, useValue: 'fr' },
    // {provide: ErrorHandler, useClass: IonicErrorHandler},
    Push,
    DeviceFeedback,
    FCM,
    UserAgent,


    // RssService
  ]
})

export class AppModule {}
