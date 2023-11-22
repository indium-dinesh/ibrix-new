// Angular Import
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';
import { DataFilterPipe } from './filter/data-filter.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

// third party
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import 'hammerjs';
import 'mousetrap';

// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from '../layout/admin/nav-bar/nav-bar.component';
import { NavigationComponent } from '../layout/admin/navigation/navigation.component';
import { NavLeftComponent } from '../layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from '../layout/admin/nav-bar/nav-right/nav-right.component';
import { NavSearchComponent } from '../layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChatMsgComponent } from '../layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component';
import { ChatUserListComponent } from '../layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import { FriendComponent } from '../layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component';
import { NavContentComponent } from '../layout/admin/navigation/nav-content/nav-content.component';
import { NavItemComponent } from '../layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavCollapseComponent } from '../layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from '../layout/admin/navigation/nav-content/nav-group/nav-group.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    BreadcrumbComponent,
    NgbDropdownModule,
    NgbNavModule,
    NgbModule,
    NgScrollbarModule,
    NgClickOutsideDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    BreadcrumbComponent,
    DataFilterPipe,
    SpinnerComponent,
    NgbModule,
    NgbDropdownModule,
    NgbNavModule,
    NgScrollbarModule,
    NgClickOutsideDirective,
    
    
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavSearchComponent,
    ChatMsgComponent,
    ChatUserListComponent,
    FriendComponent,
    NavContentComponent,
    NavItemComponent,
    NavCollapseComponent,
    NavGroupComponent
  ],
  declarations: [
    DataFilterPipe,
    SpinnerComponent,
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavSearchComponent,
    ChatMsgComponent,
    ChatUserListComponent,
    FriendComponent,
    NavContentComponent,
    NavItemComponent,
    NavCollapseComponent,
    NavGroupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SharedModule {}
