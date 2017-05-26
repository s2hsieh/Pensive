import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/index';
import { IThought, IFilter } from '../../models/index';

@Component({
	templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
	isLoading = true;
	thoughts: IThought[];
	filteredThoughts: IThought[] = [];

	constructor(private ds: DataService) { }

	ngOnInit() {
		this.thoughts = this.ds.getAll();
		this.filteredThoughts = this.thoughts.slice(0);
		this.isLoading = false;
	}

	changeFilter(filter: IFilter) {
		this.filteredThoughts = this.thoughts.slice(0);
		if (filter.color) {
			this.filteredThoughts.filter(t => t.color == filter.color);
		} else if (filter.serch) {
			this.filteredThoughts.filter(t => t.title.includes(filter.serch) || t.content.includes(filter.serch));
		} 
	}
}
