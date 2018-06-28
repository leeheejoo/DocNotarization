import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AlertDialogComponent as AlertDialog} from '../../alert-dialog/alert-dialog.component';

@Component({
	selector: 'app-documents',
	templateUrl: './documents.component.html',
	styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

	constructor(public dialog: MatDialog) {
		
	}

	ngOnInit() {
	}

}
