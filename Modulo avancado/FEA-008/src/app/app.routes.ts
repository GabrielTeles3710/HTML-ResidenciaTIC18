import { Routes } from '@angular/router';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';
import { Component3Component } from './component-3/component-3.component';

export const routes: Routes = [
    {
        path: 'component-1',
        component: Component1Component
    },
    {
        path: 'component-2',
        loadComponent: () => import('./component-2/component-2.component').then(comp => comp.Component2Component)
    },
    {
        path: 'component-3',
        loadComponent: () => import('./component-3/component-3.component').then(comp => comp.Component3Component)
    }    
];
