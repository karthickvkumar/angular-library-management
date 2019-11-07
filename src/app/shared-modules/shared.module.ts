import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [],
	imports: [],
	exports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		MatToolbarModule,
		MatGridListModule,
		MatFormFieldModule,
		MatButtonModule,
		ReactiveFormsModule
	]

})
export class SharedModule { }
