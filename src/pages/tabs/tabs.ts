import {Component} from "@angular/core";
import {ChapeletPage} from "../chapelet/chapelet";
import {ChapeletGlorieuxPage} from "../chapelet-glorieux/chapelet-glorieux";
import {ChapeletLumineuxPage} from "../chapelet-lumineux/chapelet-lumineux";
import {ChapeletDouloureuxPage} from "../chapelet-douloureux/chapelet-douloureux";
import {ChapeletJoyeuxPage} from "../chapelet-joyeux/chapelet-joyeux";

@Component({
  selector: 'page-tabs',
  template:`
    <ion-tabs>
      <ion-row>
      <ion-tab [root]="chapeletPage" tabTitle="A propos" tabIcon="star"></ion-tab>
      </ion-row>
      <ion-row>
      <ion-tab [root]="chapeletGlorieuxPage" tabTitle="Glorieux" tabIcon="book"></ion-tab>
      <ion-tab [root]="chapeletLumineuxPage" tabTitle="Lumineux" tabIcon="book"></ion-tab>
      <ion-tab [root]="chapeletDouloureuxPage" tabTitle="Douloureux" tabIcon="book"></ion-tab>
      <ion-tab [root]="chapeletJoyeuxPage" tabTitle="Joyeux" tabIcon="book"></ion-tab>
      </ion-row>
    </ion-tabs>
  `
})
export class TabsPage{
  chapeletPage = ChapeletPage;
  chapeletGlorieuxPage = ChapeletGlorieuxPage;
  chapeletLumineuxPage = ChapeletLumineuxPage;
  chapeletDouloureuxPage = ChapeletDouloureuxPage;
  chapeletJoyeuxPage = ChapeletJoyeuxPage;
}
