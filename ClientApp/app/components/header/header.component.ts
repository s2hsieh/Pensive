import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'main-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	heading: string = "Pensive";
	activeUrl: string;

	constructor(private ar: ActivatedRoute) { }

	ngOnInit() {
		this.ar.url.subscribe(url => {
			this.activeUrl = "/" + url.join('/');
			switch (this.activeUrl) {
				case '/index/create': this.heading = "Create"; break;
				default: this.heading = "Pensive";
			}
		});
	}
}
