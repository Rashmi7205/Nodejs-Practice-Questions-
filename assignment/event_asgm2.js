const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
const eventHandler = () => {
    console.log('Event handler is triggered!');
};

eventEmitter.on('myevent', eventHandler);

eventEmitter.emit('myevent');
eventEmitter.removeListener('myevent', eventHandler);
eventEmitter.emit('myevent');
