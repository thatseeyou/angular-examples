import { NgModule } from '@angular/core';

import { StepperComponent } from './stepper.component';
import { DisplayComponent } from './display.component';
import { SliderComponent } from './slider.component';

@NgModule({
    imports: [],
    exports: [StepperComponent, DisplayComponent, SliderComponent],
    declarations: [StepperComponent, DisplayComponent, SliderComponent],
    providers: [],
})
export class WidgetModule { }
