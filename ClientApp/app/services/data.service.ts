import { IThought } from '../models/index';
import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
	private apiUrl: string = '/api/thoughts';

	constructor(private json: Jsonp) { }

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

	createThought(thought: IThought): Observable<IThought>{
		return this.json.put(this.apiUrl, thought)
			.map((r: Response) => <IThought>r.json());
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

	private handleError(e: Response) {
		return Observable.throw(e.statusText);
	}
}