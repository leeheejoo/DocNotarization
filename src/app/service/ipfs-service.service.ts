import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
//import { Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import * as ipfsApi from 'ipfs-api';
//import { readFileSync } from 'fs';

@Injectable()
export class IpfsService {

	ipfs: any;


	constructor(public http: HttpClient) {
		//this.ipfs = ipfsApi('localhost', '5001', { protocol: 'http' });
		//console.log(this.ipfs);
	}

/*
	add(file: File, progressFunction?: Function): Observable<AddResult> {

		return new Observable<AddResult>((subscriber: Subscriber<AddResult>) => {

			const files = [
				{
				path: file.path,
				content: readFileSync(file.path)
				}
			];

			const options = {
				progress: (bytes: number) => {
					if (progressFunction) {
						progressFunction(bytes)
					}
				}
			};

			this.ipfs.files.add(files, options, (err, res) => {

				if (err) {
					subscriber.error(err);
				} else {
					for (let i = 0; i < res.length; i++) {
						subscriber.next(res[i]);
					}
					subscriber.complete();
				}

			});
		});
	}
*/
}