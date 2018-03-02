import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AccueilPage} from "../pages/accueil/accueil";
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
// import {LocalNotifications} from "@ionic-native/local-notifications";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AccueilPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    // private push: Push,
    // private localNotifications: LocalNotifications,

  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // const options: any = {
      //   android: {
      //     senderID: 328264864972,
      //     sound: false,
      //     icon: 'notification',
      //     clearBadge: true
      //   },
      //   ios: {
      //     alert: 'true',
      //     badge: true,
      //     sound: 'false',
      //     clearBadge: true
      //   },
      //   windows: {}
      // };
      //
      // // const options: PushOptions = {
      // //   android: {
      // //     senderID: 328264864972
      // //   },
      // //   ios: {
      // //     alert: 'true',
      // //     badge: true,
      // //     sound: 'false'
      // //   },
      // //   windows: {},
      // //   browser: {
      // //     pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      // //   }
      // // };
      //
      // const pushObject: PushObject = this.push.init(options);
      //
      //
      // pushObject.on('notification').subscribe((notification: any) => {
      //   console.log('Received a notification', notification);
      //   this.localNotifications.schedule({
      //       // text: "test1",
      //       // text: title_priere,
      //       text: JSON.stringify(notification),
      //       title: notification.title,
      //       // text: test_title,
      //       // text: this.prieres[0].getElementsByTagName("title").childNodes[0].nodeValue,
      //       // at: new Date(new Date().getTime() + 10),
      //       // trigger: { every: { hour: 9, minute: 0 } },
      //       led: 'FF0000',
      //       sound: null
      //     });
      //
      // });
      // pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
      //
      // pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
      //


    });
  }
}

