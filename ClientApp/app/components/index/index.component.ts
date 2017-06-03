import { IThought } from '../../models/index';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'index',
	templateUrl: './index.component.html',
})
export class IndexComponent {
	@Input() thoughts: IThought[];
}
