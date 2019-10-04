import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  key:any

  acounts:any 

  name:any
  age:any

  balance:any
  overdraft:any
  acc =[]

  DepositAcc:any

  OpenAccount:any

  generateAcc=[]

  constructor(public navParams: NavParams, public navCtrl: NavController, public storage: Storage, public Api: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController,) {

    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    this.key = navParams.get('key')
    console.log("key ", this.key)
      //Get API 
    this.Api.getapiAcountlist(this.key.localId, this.key.idToken).subscribe(Acountlist =>{
     loader.dismiss();
      console.log(" ", Acountlist)

      

      var accountVar = Acountlist.accounts


// loop account 
     for(var loopAccount =0; loopAccount < accountVar.length; loopAccount++){
       console.log("loop ", accountVar[loopAccount])

       this.OpenAccount =accountVar[loopAccount]
       
       this.acc.push( accountVar[loopAccount]) 

        console.log("loop",this.acc)
     
      } 
   
      // this.acc = accountVar

      console.log(" ll", accountVar)

     var LastAccount = accountVar.pop()

    //  global variable
     this.DepositAcc = LastAccount
      // get the last Account and display Balance
      this.Api.getBalance(LastAccount, this.key.idToken).subscribe(DATA => {
        console.log(" balance", DATA)

        if(DATA === null){

          this.balance = "0.00"
        
          this.overdraft = "0.00"
        }
        else{
          this.balance = DATA.balance
        
          this.overdraft = DATA.overdraft
        }

       
      })

      this.name = Acountlist.name
      this.age = Acountlist.age
      console.log(" name", this.name )

    })
  }

  viewBalance(acc){
    console.log(" ", acc)

    this.DepositAcc = acc

    this.Api.getBalance(acc, this.key.idToken).subscribe(DATA =>{
      console.log(" D", DATA )
      if(DATA === null){

        this.balance = "0.00"
      
        this.overdraft = "0.00"
      }
      else{
        this.balance = DATA.balance
      
        this.overdraft = DATA.overdraft
      }
    })

  }

  openDeposit(){
    const prompt = this.alertCtrl.create({
      title: 'Deposit',
      message: "Enter amount you wanna deposit",
      inputs: [
        {
          name: 'Balance',
          placeholder: 'Balance'
        },
        {
          name: 'Overdraft',
          placeholder: 'Overdraft'
        },
      ],
      
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
            
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked',data);
           console.log("account" ,this.DepositAcc)

           var body ={
            "balance": data.Balance,
            "overdraft": data.Overdraft
            }
            

           this.Api.PutDeposit(this.DepositAcc,this.key.idToken,body).subscribe(DATA =>{
             console.log("Hi ",DATA)

             const alert = this.alertCtrl.create({
              title: 'Deposit',
              subTitle: 'Successfully deposited',
              buttons: ['OK']
            });
            alert.present();
       
           })

          }
        }
      ]
    });
    prompt.present();
  
  }

// withdraw Function
  openWithdraw(){
    const prompt = this.alertCtrl.create({
      title: 'Withdraw',
      message: "Enter amount you wanna Withdraw",
      inputs: [
        {
          name: 'Balance',
          placeholder: 'Balance'
        },
        {
          name: 'Overdraft',
          placeholder: 'Overdraft'
        },
      ],
      
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
            
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked',data);
           console.log("account" ,this.DepositAcc)

           var body ={
            "balance": data.Balance,
            "overdraft": data.Overdraft
            }
            

           this.Api.PutDeposit(this.DepositAcc,this.key.idToken,body).subscribe(DATA =>{
             console.log("Hi ",DATA)

             const alert = this.alertCtrl.create({
              title: 'Withdraw',
              subTitle: 'Successfully deposited',
              buttons: ['OK']
            });
            alert.present();
       
           })

          }
        }
      ]
    });
    prompt.present();
  
  }


  // open an Account
  openNewaccount(){

    console.log(
      Math.floor(100000 + Math.random() * 900000)
  );

  var GeneratedAccount = Math.floor(100000 + Math.random() * 900000);

  console.log("Ge ",GeneratedAccount )
  
  this.generateAcc.push(GeneratedAccount)

 


  var body =[
   this.generateAcc
]

console.log( " ge",body)
  
  this.Api.putOpenAccount(this.key.localId, this.key.idToken,body).subscribe(DATA =>{
    console.log(" ", DATA)
    const alert = this.alertCtrl.create({
      title: 'New Account',
      subTitle: 'Your new account has been created '+this.generateAcc,
      buttons: ['OK']
    });
    alert.present();
  })

  }


  hello(){
    this.storage.clear();

  }

}
