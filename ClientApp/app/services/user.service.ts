import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
	private readonly apiUrl = "api/user";

	constructor(private http: Http) { }

	getuserName(): Promise<string> {
		return this.http.get(`${this.apiUrl}/id`).toPromise()
			.then(r => r.text())
			.catch(e => console.log(e));
	}
}
