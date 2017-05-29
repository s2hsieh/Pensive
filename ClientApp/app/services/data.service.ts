import { IThought } from '../models/index';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	getYourThoughts(): IThought[] {
		return [{
			id: 1,
			title: "Summer plan",
			content: "first thought",
			color: "Salmon"
		}, {
			id: 2,
			title: "Fall plan",
			content: "second thought",
			color: "Yellow"
		}, {
			id: 3,
			title: "Winter plan",
			content: "third though",
			color: "Violet"
		}];
	}

	getThought(id: number): IThought {
		console.log(id);
		return {
			title: "Test",
			content: "Dummy date",
			color:"Aqua"
		}
	}

	getYourColors(): string[] {
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