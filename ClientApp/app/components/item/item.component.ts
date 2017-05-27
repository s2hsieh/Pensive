import { IThought } from '../../models/index';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'item',
	templateUrl: './item.component.html',
})
export class ItemComponent {
	@Input() thought: IThought;
	expanded = false;

	expand() {
		this.expanded = !this.expanded;
	}
}
