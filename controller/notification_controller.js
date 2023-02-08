const socketIo = require('socket.io');

class notifications{
   
    constructor(server){
                this.socketIo = socketIo(server)
    }

    connection(onConnect, onNotification){
this.socketIo.on('connection',socket=>{
    onConnect(socket,this.socketIo);
    socket.on('notification',notification=>{
        onNotification(notification, socket, this.socketIo )
    })
})
    }
}