import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  nome: string = '';
  descricao: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = { nome: this.nome, descricao: this.descricao };

    this.http.post('http://localhost:3000/inserir-dados', data).subscribe(
      (response) => {
        console.log('Dados inseridos com sucesso!');
        // Faça algo após a inserção bem-sucedida, se necessário.
      },
      (error) => {
        console.error('Erro ao inserir dados:', error);
        // Lide com o erro, se necessário.
      }
    );
  }
}
