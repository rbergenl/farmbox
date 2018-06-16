var awsIot = require('aws-iot-device-sdk');
var path = require('path');

//var rpio = require('rpio');

var thingShadow = awsIot.thingShadow({
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

const thingName = 'FarmBox';


thingShadow.on('connect', function() {
    thingShadow.register(thingName, {}, function() {
       thingShadow.get(thingName);
    });
});

thingShadow.on('status',  function(thingName, stat, clientToken, stateObject) {
  console.log('received '+stat+' on '+thingName+': '+JSON.stringify(stateObject));
});
