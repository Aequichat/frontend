import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { ChatTemplateComponent } from './main/pages/chat-template/chat-template.component';
import { ChatComponent } from './main/pages/chat/chat.component';
import { IntroductionComponent } from './main/pages/introduction/introduction.component';
import { LoginComponent } from './main/pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'chats',
    component: ChatTemplateComponent,
    children: [
      {
        path: '',
        outlet: 'chat-outlet',
        component: IntroductionComponent
      },
      {
        path: ':id',
        outlet: 'chat-outlet',
        component: ChatComponent
      }
    ]
  },
  {
    path: 'items',
    loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
