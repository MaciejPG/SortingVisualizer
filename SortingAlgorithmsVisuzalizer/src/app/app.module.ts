import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { VisuzalizationComponent } from './components/visuzalization/visuzalization.component';
import { BubbleSortComponent } from './components/bubble-sort/bubble-sort.component';
import { MergeSortComponent } from './components/merge-sort/merge-sort.component';
import { QuickSortComponent } from './components/quick-sort/quick-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    VisuzalizationComponent,
    BubbleSortComponent,
    MergeSortComponent,
    QuickSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
