import { IThought } from '../models/index';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	getAll(): IThought[] {
		return [{
			id: 1,
			title: "t1",
			content: "first thought",
			color: "Salmon"
		}, {
			id: 2,
			title: "t2",
			content: "second thought",
			color: "yellow"
		}, {
			id: 3,
			title: "t3",
			content: "third though",
			color: "Violet"
		}];
	}

	getAllColors(): string[] {
		return [
			"Aqua",
			"Bisque",
			"Cyan",
			"Khaki",
			"Moccasin",
			"Plum",
			"Salmon",
			"Turquoise",
			"Violet",
			"Yellow"
		];
	}
}