import { IThought } from '../models/index';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	getAll(): IThought[] {
		return [{
			id: 1,
			title: "summer plan",
			content: "first thought",
			color: "Salmon"
		}, {
			id: 2,
			title: "fall plan",
			content: "second thought",
			color: "Yellow"
		}, {
			id: 3,
			title: "winter plan",
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