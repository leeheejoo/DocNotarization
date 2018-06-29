import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IpfsService } from '../../../service/ipfs-service.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DOCUMENT_ADD, Document, DocumentInitAction, docState } from '../../../reducers/documentReducer';
import {AlertDialogComponent as AlertDialog} from '../../alert-dialog/alert-dialog.component';

@Component({
	selector: 'app-documents',
	templateUrl: './documents.component.html',
	styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

	docOb : Observable<docState>;
	documents : Array<Document>;
	selectedIndex : number;

	constructor(private ipfsService : IpfsService,  private store: Store<docState>, public dialog: MatDialog) {
		
		this.docOb= this.store.select('documentReducer');

		this.docOb.subscribe(state => {

			if( (state.actionType === DOCUMENT_ADD) && state.documents){	
				this.documents = state.documents;
				//console.log(this.documents);
			}

		});

	}

	ngOnInit() {

		let documents = JSON.parse(localStorage.getItem('dnf-documents'));
		if(documents) {
			this.documents = documents;

			let action = new DocumentInitAction(documents);
			this.store.dispatch(action);
		}		

	}

	showDocument(hash, idx){
		this.selectedIndex = idx;
		this.ipfsService.getDocument(hash);
		//console.log(idx);
	}

}
