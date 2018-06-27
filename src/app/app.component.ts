import { Component } from '@angular/core';
import { IpfsService } from './service/ipfs-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	constructor(private ipfsService : IpfsService) {

	}
}
