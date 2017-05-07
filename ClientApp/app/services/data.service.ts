import { IThought } from '../models/index';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	getAll(): IThought[] {
		return [{
			id: 1,
			content: "first thought",
			color: "red"
		}, {
			id: 2,
			content: "second thought",
			color: "yellow"
			}, {
				id: 3,
				content: "third though",
				color: "blue"
			}]
	}
}