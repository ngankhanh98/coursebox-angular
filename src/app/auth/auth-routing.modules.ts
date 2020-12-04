import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      // {
      //   path: 'layout',
      //   loadChildren: () => import('./layout/layout.module')
      //     .then(m => m.LayoutModule),
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
