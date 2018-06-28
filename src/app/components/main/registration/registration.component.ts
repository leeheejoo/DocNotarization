import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AlertDialogComponent as AlertDialog} from '../../alert-dialog/alert-dialog.component';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	documentId : string = "";
	filePath : string = "";

	constructor(public dialog: MatDialog) { 

	}

	ngOnInit() {
	}

	uploadFile(path) {

		console.log(path.name);

		this.filePath = path.name;
/*
		this.dialog.closeAll();

		let dialogRef = this.dialog.open(AlertDialog,{
			minWidth: '300px',
			data: { 
				title:"Test", 
				message:'test!!'
			} 
		});
*/
	}

	registerFile(path) {

		this.dialog.closeAll();

		let dialogRef = this.dialog.open(AlertDialog,{
			minWidth: '300px',
			data: { 
				title:"Test", 
				message:path
			} 
		});
	}
}
