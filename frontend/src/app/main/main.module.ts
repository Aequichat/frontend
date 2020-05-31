import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from '../app-routing.module';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { TimeTransitionComponent } from './components/time-transition/time-transition.component';
import { ChatTemplateComponent } from './pages/chat-template/chat-template.component';
import { ChatComponent } from './pages/chat/chat.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LoginComponent } from './pages/login/login.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { EndHistoryComponent } from './components/end-history/end-history.component';
import { EndHistoryWrapperComponent } from './components/end-history-wrapper/end-history-wrapper.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatOptionsComponent } from './components/chat-options/chat-options.component';

@NgModule({
  declarations: [
    LoginComponent,
    StoryCardComponent,
    StoriesComponent,
    ChatTemplateComponent,
    ChatComponent,
    IntroductionComponent,
    TimeTransitionComponent,
    EndHistoryComponent,
    EndHistoryWrapperComponent,
    ChatHeaderComponent,
    ChatBodyComponent,
    ChatOptionsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    MatSidenavModule,
    MatTooltipModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule
  ],
  entryComponents: [
    EndHistoryComponent
  ]
})
export class MainModule { }
