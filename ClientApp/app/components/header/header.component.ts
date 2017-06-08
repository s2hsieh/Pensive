import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { DataService, UserService } from '../../services/index';

@Component({
	selector: 'main-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	heading: string;
	userName: string;

	constructor(private r: Router, private ds: DataService, private us: UserService) { }

	ngOnInit() {

		this.r.events.subscribe(ne => {
			if (ne instanceof NavigationEnd) {
				var url = this.r.url;
				if (url.startsWith('/index/create')) {
					this.heading = 'Create';
				} else if (url.startsWith('/index/edit/')) {
					this.ds.getThought(+url.slice(url.lastIndexOf('/') + 1)).subscribe(t => this.heading = `Edit ${t.title}`);
				} else {
					this.heading = "Pensive";
				}
			}
		});

		this.us.getuserName().then(user => this.userName = user);
	}

	logout() {
		location.replace("/Auth/Logout");
	}
}
