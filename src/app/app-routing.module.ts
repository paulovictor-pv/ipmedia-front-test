import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryInfoComponent } from 'src/app/components/country-info/country-info.component';
import { CountrySummaryComponent } from 'src/app/components/country-summary/country-summary.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'country-summary',
  },
  {
    path: 'country-summary',
    component: CountrySummaryComponent,
  },
  {
    path: 'country-info',
    component: CountryInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
