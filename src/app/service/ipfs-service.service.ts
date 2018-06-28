import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Config } from '../config/config';
import { Store } from '@ngrx/store';
import { DOCUMENT_ADD, DocumentAddAction, docState } from '../reducers/documentReducer';
import { MatDialog } from '@angular/material';
import * as base64 from 'base64-arraybuffer';
import {PdfDialogComponent as PdfDialog} from '../components/pdf-dialog/pdf-dialog.component';

@Injectable()
export class IpfsService {

	ipfs: any;

	constructor(public http: HttpClient, private store: Store<docState> , public dialog: MatDialog) {

	}

	getDocument(hash) {

		if(hash) {

			//let params = new HttpParams().set('id', id);
			let params = new HttpParams().set('hash', hash);

			return this.http.get(`${Config.apiServer}/document`,{ params: params }).subscribe(
				res => {
				
					  if(res['code'] == 0 && res['data']){

						this.dialog.closeAll();

						let dialogRef = this.dialog.open(PdfDialog,{
							minWidth: '600px',
							data: { 
								'data' : res['data']
							} 
						});
					}			 
				},
				err => {
					console.log("IpfsService getDocument error occured");
					console.log(err);
				}
			);
	
		}
	}

	saveDocument(id, fileName, data) {

		if(id && fileName && data) {

			return this.http.post(`${Config.apiServer}/document`, { 'id': id, 'fileName':fileName, 'data': data }).subscribe(
				res => {
				
					if(res['code'] == 0 && res['data']){

						let retId = res['data']['id'];
						let retFileName = res['data']['fileName'];
						let retHash = res['data']['hash'];

						let documents = JSON.parse(localStorage.getItem('dnf-documents'));
						if(!documents) {
							documents = [];
						}				

						documents.unshift({
							'id':retId,
							'fileName':retFileName,
							'hash':retHash
						})

						localStorage.setItem('dnf-documents',JSON.stringify(documents));

						let action = new DocumentAddAction({	
							'id':retId,
							'fileName':retFileName,
							'hash':retHash}
						);

						this.store.dispatch(action);
					}			 
				},
				err => {
					console.log("IpfsService saveDocument error occured");
					console.log(err);
				}
			);
	
		}
	}
}