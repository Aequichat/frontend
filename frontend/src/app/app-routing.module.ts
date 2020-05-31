import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { ChatTemplateComponent } from './main/pages/chat-template/chat-template.component';
import { ChatComponent } from './main/pages/chat/chat.component';
import { IntroductionComponent } from './main/pages/introduction/introduction.component';
import { LoginComponent } from './main/pages/login/login.component';
import { NotFoundComponent } from './main/pages/not-found/not-found.component';
import { LoginGuard } from './shared/guards/login.guard';
import { UserGuard } from './shared/guards/user.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'chats',
    component: ChatTemplateComponent,
    canActivate: [UserGuard],
    canActivateChild: [UserGuard],
    children: [
      {
        path: ':id',
        component: ChatComponent
      },
      {
        path: '',
        component: IntroductionComponent
      }
    ]
  },
  {
    path: 'items',
    loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
