import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SenderRoutingModule } from './sender-routing.module';
import { SenderComponent } from './sender.component';
import { SenderService } from './sender.service';
import { DatePipe } from '@angular/common';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, TranslateModule, SenderRoutingModule, SharedModule],
  declarations: [SenderComponent],
  providers: [SenderService, DatePipe]
})
export class SenderModule {}
