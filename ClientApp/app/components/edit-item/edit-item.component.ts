import { IThought } from '../../models/index';
import { DataService } from '../../services/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'edit-item',
	templateUrl: './edit-item.component.html'
})
export class EditItemComponent implements OnInit {
	currentData: IThought;
	editForm: FormGroup;
	content: FormControl;
	color: FormControl;
	colors: string[];

	constructor(private fb: FormBuilder, private ds: DataService, private ar: ActivatedRoute, private r:Router) { }

	ngOnInit() {
		this.colors = this.ds.getAllColors();
		this.ar.data.subscribe(d => {
			this.currentData = d['thought'];
			this.editForm = this.fb.group({
				content: [this.currentData.content, [Validators.required, Validators.maxLength(200)]],
				color: [this.currentData.color, [Validators.required]]
			});
			this.content = <FormControl>this.editForm.controls.content;
			this.color = <FormControl>this.editForm.controls.color;
		});
	}

	update(data: IThought) {
		if (this.editForm.valid) {
			this.currentData.content = data.content;
			this.currentData.color = data.color;
			this.ds.updateThought(this.currentData).subscribe(t => this.r.navigate(['/index']));
		}
	}
}
