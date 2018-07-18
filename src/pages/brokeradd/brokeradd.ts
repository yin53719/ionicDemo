import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-brokeradd',
  templateUrl: 'BrokerAdd.html'
})
export class BrokerAddPage { 
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };
    constructor(public navCtrl: NavController) { 
      
    }
}