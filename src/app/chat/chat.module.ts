import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: ChatComponent
    }
]);

@NgModule({
    imports: [
        homeRouting,
        SharedModule
    ],
    declarations: [
        ChatComponent
    ],
    providers: []
})
export class ChatModule { }