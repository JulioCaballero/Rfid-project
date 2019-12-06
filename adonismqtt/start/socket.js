// const Ws = use('Ws')

// // Ws.channel('msj', 'ServerController')

// Ws.channel('msj', ({ socket }) => {
    
//     socket.on('open', () => {
//         console.log('Conectado al servidor');
//         this.socketStatus = true;
//     })

//     socket.on('mensaje', (payload) => {
//         console.log('Mensaje Recibido', payload);
//     });

//     socket.on('close', () => {
//         console.log('Desconectado del servidor');
//         this.socketStatus = false;
//     });
// })