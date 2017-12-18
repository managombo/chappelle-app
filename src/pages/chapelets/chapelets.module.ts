import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChapeletsPage } from './chapelets';

@NgModule({
  declarations: [
    ChapeletsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChapeletsPage),
  ],
})
export class ChapeletsPageModule {}
