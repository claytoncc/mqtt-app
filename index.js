const MQTT = require('mqtt');

try {
    console.log('Connecting to mqtt');

    const client = MQTT.connect('mqtt:/bitid.co.za', {
        'host': 'mqtt:/bitid.co.za',
        'port': 1888,
        'clean': true,
        'username': 'telemetry',
        'password': 'telemetry1!',
        'keepalive': 60
    });

    client.on('end', () => {
        console.error('Connecting to mqtt: END');
    });

    client.on('close', () => {
        console.error('Connecting to mqtt: CLOSE');
    });

    client.on('offline', () => {
        console.error('Connecting to mqtt: OFFLINE');
    });

    client.on('disconnect', () => {
        console.error('Connecting to mqtt: DISCONNECT');
    });

    client.on('error', error => {
        console.error(error);
    });

    client.on('connect', () => {
        console.log('Connecting to mqtt: Success');
    });
} catch (error) {
    console.error(error.message);   
};