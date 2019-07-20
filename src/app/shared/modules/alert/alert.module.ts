import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
    declarations: [AlertComponent],
    imports: [CommonModule, MessageModule, MessagesModule],
    exports: [AlertComponent],
    providers: [MessageService]
})
export class AlertModule {}
