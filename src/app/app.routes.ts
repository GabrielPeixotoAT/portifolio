import { Routes } from '@angular/router';
import { Eletronics } from './features/lab/pages/eletronics/eletronics';
import { HomeComponent } from './features/home/home-component/home-component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "portifolio",
    },
    {
        path: "portifolio",
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "eletronics",
                component: Eletronics
            }
        ]
    }
];
