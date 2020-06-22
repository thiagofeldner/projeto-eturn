import { NgModule } from "@angular/core";
import { CadastroContatosComponent} from './cadastro-contatos/cadastro-contatos.component';
import { ContatosListComponent } from './contatos-list.component';
import { ContatoInfoComponent } from './contato-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      ContatosListComponent,
      ContatoInfoComponent,
      CadastroContatosComponent,
    ], 
    imports: [
        CommonModule,     
        FormsModule,
        RouterModule.forChild([
            {
            path: 'cadastrar', component: CadastroContatosComponent 
            },
            {
            path: 'contatos', component: ContatosListComponent 
            },
            {
            path: 'contato/info/:id' , component: ContatoInfoComponent
            }
        ])
    ]
})
export class ContatoModule {

}