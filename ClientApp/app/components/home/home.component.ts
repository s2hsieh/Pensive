import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/index';
import { IThought, IFilter } from '../../models/index';

@Component({
	templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
	isLoading = true;
	thoughts: IThought[];
	filteredThoughts: IThought[];

	constructor(private ds: DataService) { }

	ngOnInit() {
		this.thoughts = this.ds.getYourThoughts();
		this.filteredThoughts = this.thoughts.slice(0);
		this.isLoading = false;
	}

	changeFilter(filter: IFilter) {
		this.filteredThoughts = this.thoughts.slice(0);
		if (filter.color) {
			this.filteredThoughts = this.filteredThoughts.filter(t => t.color == filter.color);
		}
		if (filter.search) {
			this.filteredThoughts = this.filteredThoughts.filter(t => t.title.includes(filter.search) || t.content.includes(filter.search));
		}
		if (filter.sortBy == 'date') {
			//this.filteredThoughts = this.filteredThoughts.sort((t1, t2) => t1.dateModified.getTime() - t2.dateModified.getTime())
		}
		if (filter.sortBy == 'title') {
			this.filteredThoughts = this.filteredThoughts.sort((t1, t2) => t1.title > t2.title ? 1 : -1)
		}

	}
}
