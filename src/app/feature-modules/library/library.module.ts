import { NgModule } from '@angular/core';

// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../../shared-modules/shared.module';

import { LibraryRoutingModule } from './library-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { LibraryComponent } from './library.component';


@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent, LibraryComponent],
  imports: [
    SharedModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
