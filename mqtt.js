const MQTT = require('mqtt');
const EventEmitter = require('events').EventEmitter;

class MqttSocket extends EventEmitter {

    constructor() {
        super();
    };

    connect(server) {
        try {
            console.log('Connecting to mqtt: ' + JSON.stringify(server));

            this.mqtt = MQTT.connect(server.host, {
                'host': server.host,
                'port': server.port,
                'clean': true,
                'username': server.username,
                'password': server.password,
                'keepalive': 60
            });

            this.mqtt.on('end', () => {
                console.log('Connecting to mqtt: END');
            });

            this.mqtt.on('close', () => {
                console.log('Connecting to mqtt: CLOSE');
            });

            this.mqtt.on('offline', () => {
                console.log('Connecting to mqtt: OFFLINE');
            });

            this.mqtt.on('disconnect', () => {
                console.log('Connecting to mqtt: DISCONNECT');
            });

            this.mqtt.on('error', error => {
                console.log(error);
            });
    
            this.mqtt.on('connect', () => {
                console.log('Connecting to mqtt: Success');

                this.mqtt.subscribe(server.subscribe.data, (error) => {
                    if (error) {
                        console.log(error.message);
                    } else {
                        console.log('Subscribed to mqtt data');
                    };
                });
    
                this.mqtt.subscribe(server.subscribe.control, (error) => {
                    if (error) {
                        console.log(error.message);
                    } else {
                        console.log('Subscribed to mqtt control');
                    };
                });
            });
    
            this.mqtt.on('message', (topic, message) => {
                switch (topic) {
                    case ('rock/v1.1/data'):
                        this.emit('data', JSON.parse(message.toString()));
                        break;
                    case ('rock/v1.1/control'):
                        this.emit('control', JSON.parse(message.toString()));
                        break;
                };
            });
        } catch (error) {
            console.log(error.message);   
        };
    };

    send(topic, payload) {
        this.mqtt.publish(topic, JSON.stringify(payload));
    };

};

module.exports = MqttSocket;