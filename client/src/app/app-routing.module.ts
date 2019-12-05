// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { KaryawanEditComponent} from './pages/karyawan-edit/karyawan-edit.component';
import { KaryawanListComponent} from './pages/karyawan-list/karyawan-list.component';
import { ScheduleEditComponent} from './pages/schedule-edit/schedule-edit.component';
import { ScheduleListComponent} from './pages/schedule-list/schedule-list.component';
import { ShiftEditComponent} from './pages/shift-edit/shift-edit.component';
import { ShiftListComponent} from './pages/shift-list/shift-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'karyawans/:id',  loadChildren: './pages/karyawan-edit/karyawan-edit.module#KaryawanEditModule' , canActivate: [AuthGuard] },
    { path: 'karyawans',  loadChildren: './pages/karyawan-list/karyawan-list.module#KaryawanListModule' , canActivate: [AuthGuard] },
    { path: 'schedules/:id',  loadChildren: './pages/schedule-edit/schedule-edit.module#ScheduleEditModule' , canActivate: [AuthGuard] },
    { path: 'schedules',  loadChildren: './pages/schedule-list/schedule-list.module#ScheduleListModule' , canActivate: [AuthGuard] },
    { path: 'shifts/:id',  loadChildren: './pages/shift-edit/shift-edit.module#ShiftEditModule' , canActivate: [AuthGuard] },
    { path: 'shifts',  loadChildren: './pages/shift-list/shift-list.module#ShiftListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
