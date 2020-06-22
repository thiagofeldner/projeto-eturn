import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';

@Component({
    templateUrl: './contatos-list.component.html',

})
export class ContatosListComponent implements OnInit { 

    filteredContatos: Contato[] = [];

    _contatos: Contato[] = [];
    _filterBy: string;

    constructor(private contatoService: ContatoService){ }

    ngOnInit(): void {
       this.retrieveAll();
    }
    
    retrieveAll(): void {
        this.contatoService.retrieveAll().subscribe({
            next: contatos => {
                this._contatos = contatos;
                this.filteredContatos = this._contatos;
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(contatoId: number): void{
        this.contatoService.deleteById(contatoId).subscribe({
            next: () => {
                console.log('Deletado com Sucesso!');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string){
        this._filterBy = value;

        this.filteredContatos = this._contatos.filter((contato: Contato) => 
                contato.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())> -1);
    }

    get filter(){
        return this._filterBy;
    }
}