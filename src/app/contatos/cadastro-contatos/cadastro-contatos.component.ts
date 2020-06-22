import { Component, OnInit } from "@angular/core";
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component ({
    selector: 'app-contatos',
    templateUrl: './cadastro-contatos.component.html',
    styleUrls: ['./cadastro-contatos.component.scss']
})

export class CadastroContatosComponent implements OnInit {

    contato: Contato = new Contato();
    contatos: Array<any> = new Array();

    constructor(private contatosService: ContatoService) {}

    ngOnInit(): void {
       
    }
    
    cadastrar(){
        console.log(this.contato);
        this.contatosService.cadastrarContato(this.contato).subscribe(contato =>{ 
          this.contato = new Contato();
         }, err => {
          console.log('Erro ao cadastrar novo contato', err)
        })
    }
       save(): void{
        this.contatosService.save(this.contato).subscribe({
            next: contato => console.log('Salvo com sucesso!', contato),
            error: err => console.log('Error', err)
        });
    }
 
}