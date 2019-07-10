import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseContactPipe } from './base-contact.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [BaseContactPipe],
    exports: [BaseContactPipe]
})
export class SharedPipesModule {}
