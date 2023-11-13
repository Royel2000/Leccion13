import { ChatService } from './../../providers/chat.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: []
})
export class ChatComponent implements OnInit{

  mensaje: string = "";
  elemento: any;

  constructor( public _cs: ChatService) {
    this._cs.cargarMensajes()
    .subscribe(()=> {
      setTimeout(() => {
        this.elemento.scrollingTop = this.elemento.scrollHeight;
      }, 20);
    });
   }

   ngOnInit() {
    this.elemento = document.getElementById('app-mensaje');

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
