import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChapeletPage } from './chapelet';

@NgModule({
  declarations: [
    ChapeletPage,
  ],
  imports: [
    IonicPageModule.forChild(ChapeletPage),
  ],
})
export class ChapeletPageModule {}
