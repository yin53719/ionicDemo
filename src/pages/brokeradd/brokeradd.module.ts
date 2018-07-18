import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { BrokerAddPage } from './BrokerAdd';

@NgModule({
  declarations: [
    BrokerAddPage,
  ],
  imports: [
    IonicPageModule.forChild(BrokerAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    BrokerAddPage
  ]
})
export class BrokerAddModule { }
