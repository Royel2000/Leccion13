import { ChatService } from './../../providers/chat.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: []
})
export class ChatComponent {

  mensaje: string = "";

  constructor( public _cs: ChatService) {

    this._cs.cargarMensajes()
    .subscribe();
   }


  enviar_mensaje(){
       console.log( this.mensaje );

       if( this.mensaje.length === 0 ){
        return;
       }

       this._cs.agregarMensaje( this.mensaje )
             .then( ()=>this.mensaje = "")
             .catch( (err)=>console.error('Error al enviar', err));



  }

}
