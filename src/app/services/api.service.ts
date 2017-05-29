import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import * as url from '../shared/globals';

@Injectable()
export class ApiService {
	url = url.baseUrl();
  renderPlanner=false;
  error:number;

  constructor (private http: Http) {
  	
  }
  
  getAll(data): Observable<any> {
  	let url = this.url+'api/get/'+data; 

    return this.http.get(url)
                 .map(this.extractData)
                 .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = ` -  `;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  postOrder(data){
    let postData = JSON.stringify(data);
    //console.log(postData);
    let url = this.url+'api/post_order';

    this.http.post(url,postData).subscribe();
  }

  getItems(data): Observable<any>{
    let url = this.url+'api/get_items';
    return this.http.post(url,JSON.stringify(data)).map(this.extractData).catch(this.handleError);
  }

  createCustomer(data): Observable<any>{
    let postData = JSON.stringify(data);
    //console.log(postData);
    let url = this.url+'api/post_customer';

    return this.http.post(url,postData).catch(this.handleError);

  }
   
  UpdateCustomer(data): Observable<any>{
    let postData = JSON.stringify(data);
    //console.log(postData);
    let url = this.url+'api/update_customer';

    return this.http.post(url,postData).catch(this.handleError);

  }

  updateMaterial(data): Observable<any>{
      let postData = JSON.stringify(data);
      let url = this.url+'api/update_material';
      return this.http.post(url,postData).catch(this.handleError);
  }

  updateProduct(data){
      let postData = JSON.stringify(data);
      let url = this.url+'api/update_product';
      return this.http.post(url,postData).catch(this.handleError);
  }

  getPendingOrders(): Observable<any>{
     let url = this.url+'api/pending_orders';
      
     return this.http.get(url).map(this.extractData).catch(this.handleError); 
      
  }
  getProductWithId(id){
    let postData = JSON.stringify(id);
    let url  = this.url+'api/get_product_with_id';
    return this.http.post(url,postData).catch(this.handleError);
  }

  getPendingItems(){
    let url = this.url+'api/pending_items';
    return this.http.get(url).map(this.extractData).catch(this.handleError);
  }

  saveSchedule( schedule ) {
    let postData = JSON.stringify(schedule);
    let url  = this.url+'api/save_schedule';
    return this.http.post(url,postData).catch(this.handleError);
  }

  getScheduled(product_id){
    let postData = JSON.stringify(product_id);
    let url = this.url+'api/schedules';
    return this.http.post(url, postData).map(this.extractData).catch(this.handleError);   
  }

  renderScheduledUpdatePlanner(product){
    this.renderPlanner = true;
  }

  get_qa_holds(product,disposition){
    product['disposition_by'] = disposition;
    let postData = JSON.stringify(product);
    let url = this.url+"api/get_qa_with_product_id";
    return this.http.post(url, postData).map(this.extractData).catch(this.handleError);   
  }

  getFormulaWithId(id): Observable<any>{
    console.log(id);
    let url  = this.url+'api/get_formula_with_id/'+id;
    return this.http.get(url).catch(this.handleError); 
  }

  postFormula(formula){
    let postData = JSON.stringify(formula);
    let url  = this.url+'api/post_formula';
    return this.http.post(url,postData).catch(this.handleError); 
  }
  
  updateFormula(formula){
    let postData = JSON.stringify(formula);
    console.log(postData);
    let url  = this.url+'api/update_formula';
    return this.http.post(url,postData).catch(this.handleError); 
  }

  getForcast(id,year) : Observable<any>{
    let url  = this.url+'api/forecast/'+id+'/'+year;
    return this.http.get(url).catch(this.handleError); 
  }

  update_par_from_forecaster(id,amount){
    console.log(id,amount);
    let url  = this.url+'api/forcaster_update_par/'+parseInt(id)+'/'+parseFloat(amount);
    return this.http.get(url).catch(this.handleError); 
  }
 
}