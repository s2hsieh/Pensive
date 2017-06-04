import { IThought } from '../models/index';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
	private apiUrl: string = 'api/thoughts';

	constructor(private http: Http) { }

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
		return this.http.post(this.apiUrl, thought)
			.map(r => <IThought>r.json())
			.catch(this.handleError);
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