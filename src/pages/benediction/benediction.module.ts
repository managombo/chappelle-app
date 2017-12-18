import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BenedictionPage } from './benediction';

@NgModule({
  declarations: [
    BenedictionPage,
  ],
  imports: [
    IonicPageModule.forChild(BenedictionPage),
  ],
})
export class BenedictionPageModule {}
