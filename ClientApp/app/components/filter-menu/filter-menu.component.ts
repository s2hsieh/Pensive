import { IFilter } from '../../models/index';
import { DataService } from '../../services/index';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector: 'filter-menu',
	templateUrl: './filter-menu.component.html'
})
export class FilterMenuComponent implements OnInit {
	filters: IFilter = {
		color: "",
		search: "",
		sortBy: "date"
	}
	@Output() changeFilter = new EventEmitter();
	colors: string[];

	constructor(private ds: DataService) { }

	ngOnInit() {
		this.colors = this.ds.getAllColors();
	}

	updateFilter(element: string, value: string) {
		this.filters[element] = value;
		this.changeFilter.emit(this.filters);
	}
}
