var awsIot = require('aws-iot-device-sdk');
var path = require('path');

//var rpio = require('rpio');

var device = awsIot.device({
    /*keyPath: '/home/pi/deviceSDK/certs/private.pem.key',
    certPath: '/home/pi/deviceSDK/certs/certificate.pem.crt',
    caPath: '/home/pi/deviceSDK/certs/caCert.crt',
    clientId: '<YOUR THING NAME>',
    region: '<YOUR REGION>'*/
    keyPath: path.join('./', 'FarmBox.private.key'),
    certPath: path.join('./', 'FarmBox.cert.pem'),
    caPath: path.join('./', 'root-CA.crt'),
   // clientId: '205612092240',
//    region: 'us-east-1',
    host: 'a36bz20xtb4kpv.iot.us-east-1.amazonaws.com'
});

// setup the logic for listening to an MQTT event by subscribing to a topic
device.on('connect', function() {
    device.subscribe('LED');
    
    device.subscribe('$aws/things/FarmBox/shadow/get');
    
   // var payload = { test_data: 1};
    var payload = {
        'state': {
            'reported': {
                'actual_pool_temp': 20 + Math.random() * 10
            }
        }
    };
    
  //  device.publish('$aws/things/FarmBox/shadow/update', JSON.stringify(payload));
});

// setup the listener for when a TOPIC we subscribed to receives a message
device.on('message', function(topic, payload) {
    payload = JSON.parse(payload.toString());
    //show the incoming message
    console.log(payload);
    /*
    if(topic == 'LED') {
        if(payload.light == 'on'){
            rpio.write(12, rpio.HIGH);
        } else {
            rpio.write(12, rpio.LOW);
        }
    }*/
});

// in AWS IoT, pubish on the topic a test rule with the payload { "light": "on" }
