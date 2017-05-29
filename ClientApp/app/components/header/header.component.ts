import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'main-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	heading: string;
	title: string = 'Test';

	constructor(private r: Router) { }

	ngOnInit() {
		this.r.events.subscribe(ne => {
			if (ne instanceof NavigationEnd) {
				var url = this.r.url;
				if (url.startsWith('/index/create')) {
					this.heading = 'Create';
				} else if (url.startsWith('/index/edit/')) {
					this.heading = `Edit ${this.title}`;
				} else {
					this.heading = "Pensive";
				}
			}
		});
	}
}
