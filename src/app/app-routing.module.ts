import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentjsComponent } from './documentjs/documentjs.component';

const routes: Routes = [
  {
    path: 'documentjs',
    component: DocumentjsComponent,
    data: { title: 'documentjs List' }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
