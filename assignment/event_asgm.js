const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Subscribe to the "subscribe" event
eventEmitter.on('subscribe', () => {
    console.log('User has subscribed!');
});

// Simulate a user subscribing by triggering the "subscribe" event
function simulateSubscribe() {
    eventEmitter.emit('subscribe');
}

// Call the function to simulate a user subscribing
simulateSubscribe();
