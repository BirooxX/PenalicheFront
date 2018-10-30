import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SenderRoutingModule } from './sender-routing.module';
import { SenderComponent } from './sender.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SenderRoutingModule],
  declarations: [SenderComponent]
})
export class SenderModule {}
