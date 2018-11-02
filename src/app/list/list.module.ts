import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListService } from './list.service';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, TranslateModule, ListRoutingModule, SharedModule],
  declarations: [ListComponent],
  providers: [ListService]
})
export class ListModule {}
