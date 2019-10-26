import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionableBooleanPipe } from './questionable-boolean.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [QuestionableBooleanPipe],
    exports: [QuestionableBooleanPipe]
})
export class SharedPipesModule {}
