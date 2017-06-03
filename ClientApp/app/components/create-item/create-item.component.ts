import { IThought } from '../../models/index';
import { DataService } from '../../services/index';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'create-item',
	templateUrl: './create-item.component.html'
})
export class CreateItemComponent implements OnInit {
	createForm: FormGroup;
	title: FormControl;
	content: FormControl;
	color: FormControl;
	colors: string[];

	constructor(private fb: FormBuilder, private ds: DataService, private r: Router) { }

	ngOnInit() {
		this.colors = this.ds.getAllColors();

		this.createForm = this.fb.group({
			title: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
			content: ['', [Validators.required, Validators.maxLength(200)]],
			color: ['Cyan', [Validators.required]]
		});
		this.title = <FormControl>this.createForm.controls.title;
		this.content = <FormControl>this.createForm.controls.content;
		this.color = <FormControl>this.createForm.controls.color;
	}

	create(data: IThought) {
		if (this.createForm.valid) {
			this.ds.createThought(data).subscribe(t => console.log(t));
			this.r.navigate(['/index']);
		}
	}
}
