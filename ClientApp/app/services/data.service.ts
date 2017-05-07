
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	getAll() {
		return [{
			id: 1,
			content: "first thought",
			color: "red"
		}, {
			id: 2,
			content: "second thought",
			color: "yellow"
		}]
	}
}