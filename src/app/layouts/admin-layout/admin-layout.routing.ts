import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProductsComponent } from '../../products/products.component';
import { CommandsComponent } from '../../commands/commands.component';
import { RecieversComponent } from '../../recievers/recievers.component';
import { UsersComponent } from '../../users/users.component';
import {OffreListComponent} from '../../offre/offre-list/offre-list.component';
import {ListRequestComponent} from '../../Request/list-request/list-request.component';
import {TestComponent} from '../../test/test.component';
import {BookListComponent} from '../../book/bookAdmin/book-list/book-list.component';
import {OnHoldListComponent} from '../../book/on-hold-list/on-hold-list.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products',      component: ProductsComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'recievers', component: RecieversComponent },
  { path: 'users',   component: UsersComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
  { path: 'offres',  component: OffreListComponent },
  { path: 'requests',  component: ListRequestComponent },
  { path: 'books',  component: BookListComponent },
  { path: 'OnHold',  component: OnHoldListComponent },

];
