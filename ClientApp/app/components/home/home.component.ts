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
		this.ds.getYourThoughts().subscribe(data => {
			this.thoughts = data.sort(this.dateSort);
			this.filteredThoughts = this.thoughts.slice(0);
			this.isLoading = false;
		});
	}

	applyFilter(filter: IFilter) {
		this.filteredThoughts = this.thoughts.slice(0);
		if (filter.color) {
			this.filteredThoughts = this.filteredThoughts.filter(t => t.color == filter.color);
		}
		if (filter.search) {
			let search = filter.search.toLowerCase();
			this.filteredThoughts = this.filteredThoughts.filter(t => t.title.toLowerCase().includes(search) || t.content.toLowerCase().includes(search));
		}
		if (filter.sortBy == 'date') {
			this.filteredThoughts = this.filteredThoughts.sort(this.dateSort)
		} else if (filter.sortBy == 'title') {
			this.filteredThoughts = this.filteredThoughts.sort((t1, t2) => t1.title > t2.title ? 1 : -1)
		}

	}

	dateSort(t1: IThought, t2: IThought): number {
		return Date.parse(t1.dateModified.toString()) > Date.parse(t2.dateModified.toString()) ? -1 : 1;
	}
}
