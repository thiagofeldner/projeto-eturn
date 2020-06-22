import { Contato } from './contato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'

})
export class ContatoService {

    private contatoUrl: string = 'http://localhost:3000/contatos';

    constructor(private http: HttpClient) { }

    cadastrarContato(contato: Contato): Observable<any> {
        return this.http.post("http://localhost:3000/contatos/", contato);
    } 
    
    listarContatos(): Observable<any>{
      return this.http.get("http://localhost:3000/contatos/");
    }

    retrieveAll(): Observable<Contato[]> {
        return this.http.get<Contato[]>(this.contatoUrl);
    }

    retrieveById(id: number): Observable<Contato> {
        return this.http.get<Contato>(`${this.contatoUrl}/${id}`);
    }

    save(contato: Contato): Observable<Contato> {
        if(contato.id){
            return this.http.put<Contato>(`${this.contatoUrl}/${contato.id}`, contato);
        } else {
            return this.http.post<Contato>(`${this.contatoUrl}`, contato);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.http.delete<any>(`${this.contatoUrl}/${id}`);
    }
}


       

