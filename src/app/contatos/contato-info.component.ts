import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contato } from './contato';
import { ContatoService } from './contato.service';

@Component({
    templateUrl: './contato-info.component.html'
})
export class ContatoInfoComponent implements OnInit{

    contato: Contato;
 
    constructor(private activetedRoute: ActivatedRoute, private contatoService: ContatoService) {}

    ngOnInit(): void {
        this.contatoService.retrieveById(
            +this.activetedRoute.snapshot.paramMap.get('id')).subscribe({
               next: contato => this.contato = contato,
               error: err => console.log('Error', err)
            });
    }

    save(): void{
        this.contatoService.save(this.contato).subscribe({
            next: contato => console.log('Salvo com sucesso!', contato),
            error: err => console.log('Error', err)
        });
    }
}