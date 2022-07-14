import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultar-curso',
  templateUrl: './consultar-curso.component.html',
  styleUrls: ['./consultar-curso.component.css']
})
export class ConsultarCursoComponent implements OnInit {

  curso: any[] = [];

  constructor(private httpclient : HttpClient) { }


  formPeriodo = new FormGroup({
    descricao: new FormControl(''),
    dtInicio: new FormControl(''),
    dtTermino: new FormControl('')

  });

  get form(): any {
    return this.formPeriodo.controls;

  }

  ngOnInit(): void {
    this.httpclient.get('http://localhost:8080/api/cursos').subscribe(
      (data)=> {
      this.curso = data as any[];
    },
    (e) => {
      alert(e.error)
      console.log(e);
    }
  )
  }

  onSubmit(): void {
    this.httpclient.get('http://localhost:8080/api/cursos' + '?descricao=' + this.formPeriodo.value.descricao +
    "&dtInicio=" + this.formPeriodo.value.dtInicio + "&dtTermino=" + this.formPeriodo.value.dtTermino).subscribe(
     (data)=> {
     this.curso = data as any[];
   },
   (e) => {
     alert(e.error)
     console.log(e);
   }
 )
  }

  excluir(idCurso:number):void{
    if(window.confirm('Dejesa excluir o cadastro selecionado?')){
      this.httpclient.delete('http://localhost:8080/api/cursos/' + idCurso,
      {responseType: 'text'}).subscribe(
        (data) => {
          alert(data);
        this.ngOnInit();
      },
        (e) =>{
          alert(e.error)
          console.log(e);
        }
      )
    }
  }

}
