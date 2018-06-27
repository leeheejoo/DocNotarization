import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AlertDialogComponent as AlertDialog} from '../alert-dialog/alert-dialog.component';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	constructor(public dialog: MatDialog) { 

	}

	ngOnInit() {
	}

	openFile(e) {

		this.dialog.closeAll();

		let dialogRef = this.dialog.open(AlertDialog,{
			minWidth: '300px',
			data: { 
				title:"Test", 
				message:'test!!'
			} 
		});
	}
}
