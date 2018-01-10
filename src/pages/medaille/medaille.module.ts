import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedaillePage } from './medaille';

@NgModule({
  declarations: [
    MedaillePage,
  ],
  imports: [
    IonicPageModule.forChild(MedaillePage),
  ],
})
export class MedaillePageModule {}
