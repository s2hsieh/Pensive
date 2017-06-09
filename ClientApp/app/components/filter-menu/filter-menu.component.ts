import { IFilter, IThought, IColor } from '../../models/index';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/index';

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
	@Input() thoughts: IThought[];
	colors: IColor[] = [];

	constructor(private ds: DataService) { }

	ngOnInit() {
		let keys = this.ds.getAllColors();
		this.colors = keys.map(k => <IColor>{ name: k, count: 0 });
		this.thoughts.forEach(t => {
			this.colors[keys.indexOf(t.color)].count++;
		});
	}

	updateFilter(element: string, value: string) {
		this.filters[element] = value;
		this.changeFilter.emit(this.filters);
	}
}
