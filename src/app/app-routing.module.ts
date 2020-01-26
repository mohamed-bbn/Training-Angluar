import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsComponent } from './terms/terms.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutusComponent },
  { path: "terms", component: TermsComponent },
  { path: "contact", component: ContactusComponent },
  { path: "products", component: ProductsComponent },
  { path: "login", component: LoginComponent },
  { path: "productdetails/:id", component: ProductdetailsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
