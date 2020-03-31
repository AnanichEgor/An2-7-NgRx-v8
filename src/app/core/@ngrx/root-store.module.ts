import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TasksStoreModule } from './tasks/tasks-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
       strictStateImmutability: true,
       strictActionImmutability: true,
       strictStateSerializability: true,
       strictActionSerializability: true
     }
   }),
    TasksStoreModule

  ]
})
export class RootStoreModule { }
