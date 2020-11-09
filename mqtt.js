const mqtt = require('mqtt');
const EventEmitter = require('events').EventEmitter;

class MqttSocket extends EventEmitter {

    constructor() {
        super();
    };

    connect(server) {
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
    };

    send(topic, payload) {
        this.mqtt.publish(topic, JSON.stringify(payload));
    };

};

module.exports = MqttSocket;