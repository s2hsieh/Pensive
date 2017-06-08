import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	private readonly apiUrl = "api/user";

	constructor(private http: Http) { }

	getuserName(): Promise<string> {
		return this.http.get(`${this.apiUrl}/id`).toPromise()
			.then(r => r.text());
	}

	logout(): Promise<any> {
		return this.http.put(`${this.apiUrl}/logout`, {}).toPromise();
	}
}
