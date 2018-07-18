import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  constructor(public navCtrl: NavController) {
    this.title = "aaaaa"
  }


  pushTestPage() {
    this.navCtrl.push('TabsPage')
   }

  showNavbar() {
    
  }
  hideNavbar(){
  }
  //沟崽子们
  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    console.log('触发ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('触发ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('触发ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('触发ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('触发ionViewWillUnload');
  }


}
