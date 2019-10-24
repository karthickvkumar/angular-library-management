import { NgModule } from '@angular/core';

// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../../shared-modules/shared.module';

import { ReportRoutingModule } from './report-routing.module';
import { PendingComponent } from './pending/pending.component';
import { DueBooksComponent } from './due-books/due-books.component';


@NgModule({
  declarations: [PendingComponent, DueBooksComponent],
  imports: [
  	SharedModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
