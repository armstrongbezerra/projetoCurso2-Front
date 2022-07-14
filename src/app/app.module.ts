import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarCursoComponent } from './consultar-curso/consultar-curso.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';


const routes: Routes = [
  {path: 'cadastrar-curso', component: CadastrarCursoComponent},
  {path: 'consultar-curso', component: ConsultarCursoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'editar-curso/:id', component: EditarCursoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ConsultarCursoComponent,
    CadastrarCursoComponent,
    HomeComponent,
    EditarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
