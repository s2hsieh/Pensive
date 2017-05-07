
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/index';

@Component({
	selector: 'index',
	templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit{
	isLoading = true;
	thoughts: any[];

	constructor(private data: DataService) { }

	ngOnInit() {
		this.thoughts = this.data.getAll();
		this.isLoading = false;
	}
}
