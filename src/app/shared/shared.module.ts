import { NgModule } from '@angular/core';
import { NavBarComponent } from './index';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [CommonModule, FormsModule, NavBarComponent],
    declarations: [NavBarComponent],
    providers: [],
})
export class SharedModule { }
