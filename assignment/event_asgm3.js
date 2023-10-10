const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const currentMaxListeners = eventEmitter.getMaxListeners();
console.log(`Current Max Listeners: ${currentMaxListeners}`);

eventEmitter.setMaxListeners(51);

const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log(`Updated Max Listeners: ${updatedMaxListeners}`);
