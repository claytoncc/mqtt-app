const mqtt = require('mqtt');
console.log('Connecting');

const client = mqtt.connect('mqtt://bitid.co.za', {
    'host': 'mqtt://bitid.co.za',
    'port': 1888,
    'username': 'telemetry',
    'password': 'telemetry1!'
});

client.on('connect', () => {
    console.log('Connected');
});