import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular/umd';

import { BrokeraddPage } from './brokeradd';

@NgModule({
  declarations: [
    BrokeraddPage,
  ],
  imports: [
    IonicPageModule.forChild(BrokeraddPage),
    TranslateModule.forChild()
  ],
  exports: [
    BrokeraddPage
  ]
})
export class BrokeraddPageModule { }
