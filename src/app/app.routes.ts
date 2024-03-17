import { Routes } from '@angular/router';
import { OurPetsComponent } from './pages/our-pets/our-pets.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpDonateComponent } from './pages/help-donate/help-donate.component';
import { AllPetsComponent } from './pages/all-pets/all-pets.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
  {path: '', component: OurPetsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'donate', component: HelpDonateComponent},
  {path: 'all-pets', component: AllPetsComponent},
  {path: '**', redirectTo: ''}
];
