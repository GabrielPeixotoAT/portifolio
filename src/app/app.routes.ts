import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home-component/home-component';
import { EletronicsComponent } from './features/lab/pages/eletronics-component/eletronics-component';

export const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "portfolio",
                component: HomeComponent
            },
            {
                path: "lab",
                children: [
                    {
                        path: "eletronics",
                        component: EletronicsComponent
                    }
                ]
            }
        ]
    }
];
