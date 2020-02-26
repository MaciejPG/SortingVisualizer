import { QuickSortComponent } from './components/quick-sort/quick-sort.component';
import { BubbleSortComponent } from './components/bubble-sort/bubble-sort.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeSortComponent } from './components/merge-sort/merge-sort.component';


const routes: Routes = [
  {path: 'bubble-sort', component: BubbleSortComponent},
  {path: 'merge-sort', component: MergeSortComponent},
  {path: 'quick-sort', component: QuickSortComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
