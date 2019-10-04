import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { ApiProvider} from '../../providers/api/api';
import {HomePage} from '../home/home';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

// declared variable 
  password:any
  email:any
  errorMessage:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public storage: Storage) {
  
  }

  // Login Function 
  onlogin(email, password){

    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
 
    // var userData = { "email": email, "password": password}
 
    var userData = { "email": "rob@email.com", "password": "password","returnSecureToken":true }

      this.Api.PUTapiLoginUrl(userData).subscribe(DATA =>{

      //dismiss loader
      loader.dismiss();

      //local storage
      this.storage.set('StoreSecureToken', DATA)
     
      // Route to Home page
      this.navCtrl.setRoot(HomePage,{
        key: DATA
      })
     
    },error =>{
        loader.dismiss();
        console.log(" ", error)
        console.log("error ", JSON.parse(error._body))

        this.errorMessage = JSON.parse(error._body)
        console.log(" e", this.errorMessage.error.message)

        const alert = this.alertCtrl.create({
          title: 'Error Login',
          subTitle: this.errorMessage.error.message,
          buttons: ['OK']
        });
        alert.present();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
