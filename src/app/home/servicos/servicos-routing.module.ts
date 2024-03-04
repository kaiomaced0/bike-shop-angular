import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpCenterComponent } from './help-center/help-center.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path: '', component: HelpCenterComponent},
  {path: 'sugestoes', component: SuggestionsComponent},
  {path: 'questions', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
