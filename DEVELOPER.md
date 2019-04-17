
# Connect thing to the Device Gateway
- In the AWS IOT console "register a thing" (which also creates a policy, and attach it to the certificate)
- Create and download a certificate (pem), private and public key.
- Run `$ curl https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem > root-CA.crt`
- Run `$ npm install aws-iot-device-sdk`
- 

# Process and act on data with the Rules Engine
# Read and set device state with Device Shadows


IoT Configure Device:
https://aws.amazon.com/blogs/iot/understanding-the-aws-iot-security-model/
https://github.com/aws/aws-iot-device-sdk-js/blob/master/README.md
https://docs.aws.amazon.com/iot/latest/developerguide/iot-button-quickstart.html
https://medium.com/@josephjguerra/aws-iot-button-setup-with-the-new-mobile-app-and-ifttt-1d5342f045ce

IoT Device as Access Point:
https://www.hackster.io/marko8904/web-connected-aws-iot-big-red-button-on-raspberry-pi-1b6496

Chromecast Discovery:
https://github.com/geraldnilles/Chromecast-Server/blob/master/docs/GoogleCastProtocol.markdown
https://en.wikipedia.org/wiki/Multicast_DNS
https://www.andriydruk.com/post/mdnsresponder/
https://developers.google.com/nearby/connections/overview

ZeroConf on Raspberry Pi:
http://www.kalitut.com/2017/11/raspberry-pi-set-up-zeroconf-bonjour.html
https://github.com/agnat/node_mdns
https://github.com/balthazar/react-native-zeroconf
https://en.wikipedia.org/wiki/AllJoyn (npm alljoyn)
https://cheesecakelabs.com/blog/developing-iot-apps-connecting-smart-devices/

Android Things and Nearby API
https://developer.android.com/things/versions/releases
https://github.com/Nilhcem/nearby-connections-api-sample-things
https://www.hackster.io/Salmanfarisvp/getting-started-in-android-things-with-raspberry-pi-6a980e

BarCode Scanner:
https://docs.expo.io/versions/latest/sdk/bar-code-scanner
=> Register Thing; Policy, and Keys.


# Troubleshooting