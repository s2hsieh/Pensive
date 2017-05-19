
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/index';
import { IThought } from '../../models/index';

@Component({
	selector: 'index',
	templateUrl: './index.component.html',
	styleUrls:['./index.component.css']
})
export class IndexComponent implements OnInit{
	isLoading = true;
	thoughts: IThought[];

	constructor(private ds: DataService) { }

	ngOnInit() {
		this.thoughts = this.ds.getAll();
		this.isLoading = false;
	}
}
