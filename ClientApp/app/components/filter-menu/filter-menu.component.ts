import { IFilter } from '../../models/index';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'filter-menu',
	templateUrl: './filter-menu.component.html'
})
export class FilterMenuComponent {
	filters: IFilter = {
		color: "",
		serch: "",
		sortBy:"date"
	}
	@Output() changeFilter = new EventEmitter();

	updateFilter() {
		this.changeFilter.emit(this.filters);
	}
}
