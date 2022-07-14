import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  mensagem: string = '';

  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute) { }

    formEditar = new FormGroup({
      idCurso: new FormControl(''),
      descricao: new FormControl("", [Validators.required]),
      dtInicio: new FormControl("", [Validators.required]),
      dtTermino: new FormControl("", [Validators.required]),
      qtdAluno: new FormControl(""),
      categoria: new FormControl("", [Validators.required])
    })

    get form(): any{
      return this.formEditar.controls;
    }

  ngOnInit(): void {
    const idCurso = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.httpClient.get('http://localhost:8080/api/cursos/' + idCurso).subscribe(
      (data:any) =>{
        this.formEditar.patchValue(data);
      },
      (e) =>{
        console.log(e);
      }
    )
  }

  onSubmit(): void{
    this.httpClient.put('http://localhost:8080/api/cursos', this.formEditar.value,
    {responseType: 'text'}).subscribe(data => {
      this.mensagem = data;},
     e => {
      alert(e.error)
      this.mensagem =  "";
      console.log(e);
    })
  }



}
