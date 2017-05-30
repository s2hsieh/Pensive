import { IThought } from '../../models/index';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'index',
	templateUrl: './index.component.html',
})
export class IndexComponent implements OnChanges {
	@Input() thoughts: IThought[];
	empty: boolean = true;

	ngOnChanges() {
		if (this.thoughts.length == 0) {
			this.empty = true;
		} else {
			this.empty = false;
		}
	}
}
