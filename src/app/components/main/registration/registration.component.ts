import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IpfsService } from '../../../service/ipfs-service.service';
import {AlertDialogComponent as AlertDialog} from '../../alert-dialog/alert-dialog.component';
import * as base64 from 'base64-arraybuffer';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	documentId : string = "";
	fileName : string = "";
	file : File;

	constructor(private ipfsService : IpfsService, private dialog: MatDialog) { 

	}

	ngOnInit() {
	}

	getFileInfo(file) {
		//console.log(file.name);
		this.fileName = file.name;
		this.file = file;
	}

	registerFile(event) {

		if(this.documentId && this.documentId !== "" && this.file) {

			let reader = new FileReader();

			reader.onload = () => {
				let str64 = base64.encode(reader.result);
				this.ipfsService.saveDocument(this.documentId, this.fileName, str64);

				this.documentId = "";
				this.file = undefined;
				this.fileName = "";
			};

			reader.readAsArrayBuffer(this.file);
		}


/*
		this.dialog.closeAll();

		let dialogRef = this.dialog.open(AlertDialog,{
			minWidth: '300px',
			data: { 
				title:"Test", 
				message:this.file
			} 
		});
*/
	}
}
