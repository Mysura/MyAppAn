import { Routes, RouterModule } from '@angular/router';

import {RegisterComponent} from './register/index';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
