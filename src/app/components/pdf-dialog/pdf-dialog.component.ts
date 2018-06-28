import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as base64 from 'base64-arraybuffer';

@Component({
	selector: 'app-pdf-dialog',
	templateUrl: './pdf-dialog.component.html',
	styleUrls: ['./pdf-dialog.component.css']
})
export class PdfDialogComponent implements OnInit {

	dataBuffer : ArrayBuffer;
	dataString : string;

	constructor(public dialogRef: MatDialogRef<PdfDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
		this.dataBuffer = base64.decode(data.data);
		this.dataString = atob(data.data);
	}

	ngOnInit() {

	}

}
