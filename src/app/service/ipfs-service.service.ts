import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Config } from '../config/config';
import * as base64 from 'base64-arraybuffer';

@Injectable()
export class IpfsService {

	ipfs: any;

	constructor(public http: HttpClient) {

	}

	getDocument(id) {

		if(id) {

			//let params = new HttpParams().set('id', id);
			let params = new HttpParams().set('hash', id);

			return this.http.get(`${Config.apiServer}/document`,{ params: params }).subscribe(
				res => {
				
					  if(res['code'] == 0 && res['data']){

						console.log(atob(res['data']));
					
						//let balance = res['data']['balance'];
						//console.log(balance);
						//this.store.dispatch({ type: ETH_BALACNE,
						//	'balance':balance,
						//});
					}			 
				},
				err => {
					console.log("IpfsService getDocument error occured");
					console.log(err);
				}
			);
	
		}
	}
}