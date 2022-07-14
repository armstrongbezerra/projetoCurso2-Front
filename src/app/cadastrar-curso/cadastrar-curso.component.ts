import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})


export class CadastrarCursoComponent implements OnInit {

  mensagem: string = '';


  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  formCadastro = new FormGroup({
    descricao: new FormControl("", [Validators.required]),
    dtInicio: new FormControl("", [Validators.required]),
    dtTermino: new FormControl("", [Validators.required]),
    qtdAluno: new FormControl(""),
    categoria: new FormControl("", [Validators.required])

  })

  get form():any{
    return this.formCadastro.controls;
  }

  onSubmit():void{
    this.httpClient.post('http://localhost:8080/api/cursos',
    this.formCadastro.value, { responseType: 'text'}).subscribe(
      data => { this.mensagem = data;
      this.formCadastro.reset();
      },
      e =>{

      alert(e.error)
      this.mensagem = '';
      console.log(e);
    }
    )
  }



}
