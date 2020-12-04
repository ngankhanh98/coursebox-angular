import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "explore", component: ExploreComponent },
      {
        path: "attend",
        children: [
          {
            path: "enrolled-courses",
          },
          {
            path: "my-courses",
          },
        ],
      },
      { path: "account" },
    ],
  },
  { path: "", redirectTo: "explore", pathMatch: "full" },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
