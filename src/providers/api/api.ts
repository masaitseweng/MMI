import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  //login URL
  baseUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAR4Yezxk7Ao4qeFntu7tIvE7pH28Eh64Y"
  
  defaultURl ="https://momentum-retail-practical-test.firebaseio.com/clients/"
  // https://cors-anywhere.herokuapp.com/
  ProviderAcountlist = this.defaultURl;

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  // login provider
  PUTapiLoginUrl(body) {
    //Http Post function 
    var respond = this.http.post(this.baseUrl , body).map(res => res.json())
    return respond
  }

  // Acount list provider
  getapiAcountlist(localId, idToken) {
    // https://momentum-retail-practical-test.firebaseio.com/clients/<localId_from_login_response>.json?auth=<idToken_from_login_response>
    //Http get function 
    var respond = this.http.get("https://momentum-retail-practical-test.firebaseio.com/clients/"+localId+".json?auth="+idToken).map(res => res.json())
    return respond
  }

  getBalance(account_number, idToken){
    var respond = this.http.get("https://momentum-retail-practical-test.firebaseio.com/accounts/"+account_number+".json?auth="+idToken).map(res => res.json())
    return respond
  }

  PutDeposit(account_number, idToken,body){
    var respond = this.http.put("https://momentum-retail-practical-test.firebaseio.com/accounts/"+account_number+".json?auth="+idToken,body).map(res => res.json())
    return respond
  }

  putOpenAccount(localId,idToken,body){
    
    var respond = this.http.put("https://momentum-retail-practical-test.firebaseio.com/clients/"+localId+"/accounts.json?auth="+idToken,body).map(res => res.json())
    return respond
  }






}