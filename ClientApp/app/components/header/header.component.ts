import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'main-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	heading: string;
	title: string = 'Test';

	constructor(private ar: ActivatedRoute) { }

	ngOnInit() {
		switch (this.ar.routeConfig.path) {
			case 'index/create':
				this.heading = "Create";
				break;
			case 'index/edit/:id':
				this.heading = `Edit ${this.title}`;
				break;
			default: this.heading = "Pensive";
		}
	}
}
