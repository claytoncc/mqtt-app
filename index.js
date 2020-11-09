const mqtt = require('./mqtt');

mqtt.connect({
    'host': 'mqtt://bitid.co.za',
    'port': 1888,
    'username': 'telemetry',
    'password': 'telemetry1!',
    'subscribe': {
        'data': 'rock/v1.1/data',
        'control': 'rock/v1.1/control'
    }
});