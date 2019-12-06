'use strict'
var socketStatus = false;

class ServerController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  

  async onOpen () {
    console.log('Conectado al servidor');
    this.socketStatus = true;
  }

  async onReady(data) {
    this.socket.emit('mensajeServer',)
    this.socketStatus = true;
  }

  onMensaje(payload){
    console.log('Mensaje Recibido', payload);
  }

  sendMessage(mensaje) {
    const payload = {
      de: 'Julio',
      cuerpo: mensaje
    };
    this.wsService.emit('mensaje', payload);
  }

  async onClose () {
    console.log('Desconectado del servidor');
    this.socketStatus = false;
  }

}

module.exports = ServerController
