import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardOperacionalComponent } from "./dashboard-operacional/dashboard-operacional.component";
import { FormComponent } from "./form/form.component";

const routes: Routes = [
  { path: "dashboard-operacional", component: DashboardOperacionalComponent },
  { path: "form", component: FormComponent },
  { path: "", redirectTo: "dashboard-operacional",pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
