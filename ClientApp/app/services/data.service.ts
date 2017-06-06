import { IThought } from '../models/index';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
	private apiUrl: string = 'api/thoughts';

	constructor(private http: Http) { }

	getYourThoughts(): Observable<IThought[]> {
		return this.http.get(this.apiUrl)
			.map(r => <IThought>r.json())
			.catch(this.handleError)
	}

	getThought(id: number): Observable<IThought> {
		return this.http.get(`${this.apiUrl}/${id}`)
			.map(r => <IThought>r.json())
			.catch(this.handleError);
	}

	createThought(thought: IThought): Observable<IThought>{
		return this.http.post(this.apiUrl, thought)
			.map(r => <IThought>r.json())
			.catch(this.handleError);
	}

	updateThought(thought: IThought): Observable<IThought> {
		return this.http.put(`${this.apiUrl}/${thought.id}`, thought)
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