const MqttSocket = require('./mqtt');
const mqtt = new MqttSocket();
mqtt.connect({
    'host': 'mqtt://bitid.co.za',
    'port': 1888,
    'username': 'telemetry',
    'password': 'telemetry1!'
});