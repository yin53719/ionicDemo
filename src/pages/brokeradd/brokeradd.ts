import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-brokeradd',
  templateUrl: 'BrokerAdd.html'
})
export class BrokerAddPage { 
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };
    constructor(public navCtrl: NavController,private camera: Camera) { 
      
    }

    opCamera (){
      alert(this.account.email)
     try {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      alert()
      this.camera.getPicture(options).then((imageData) => {
        alert(imageData)
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        //let base64Image = 'data:image/jpeg;base64,' + imageData;
       }, (err) => {
        alert(err)
        // Handle error
       });
     } catch (error) {
      alert(error)
     }
      
    }
}