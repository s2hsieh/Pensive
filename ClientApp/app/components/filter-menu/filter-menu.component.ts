import { IFilter, IThought, IColor } from '../../models/index';
import { DataService } from '../../services/index';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

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
		//let temp = this.thoughts.map(t => t.color);
		//this.colors = Array.from(new Set(temp));
		this.thoughts.forEach(t => {
			let c = t.color;
			let x = this.colors.map(c => c.color);
			let i = x.indexOf(c);
			if (!this.colors[i]) {
				this.colors.push({color:c, count: 1});
			} else {
				this.colors[i].count++;
			}
		});
	}

	updateFilter(element: string, value: string) {
		this.filters[element] = value;
		this.changeFilter.emit(this.filters);
	}
}
