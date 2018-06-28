import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IpfsService } from '../../../service/ipfs-service.service';
import {AlertDialogComponent as AlertDialog} from '../../alert-dialog/alert-dialog.component';

@Component({
	selector: 'app-documents',
	templateUrl: './documents.component.html',
	styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

	constructor(private ipfsService : IpfsService, public dialog: MatDialog) {
		
	}

	ngOnInit() {

	}

	showDocument(){
		this.ipfsService.getDocument('QmPsdMann6D9N3isqezHYooVecTzyNdr9pJSuJ5bSXMSgg');
	}

}
