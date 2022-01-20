import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AddComponent } from './containers/add/add.component';
import { ListComponent } from './containers/list/list.component';
import { LearningResourcesComponent } from './learning-resources.component';
import { featureName, reducers } from './reducers';

const routes: Routes = [
  {
    path: 'learning-resources',
    component: LearningResourcesComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [LearningResourcesComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
  ],
})
export class LearningResourcesModule {}
