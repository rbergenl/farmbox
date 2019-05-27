
# Connect thing to the Device Gateway
- In the AWS IOT console "register a thing" (which also creates a policy, and attach it to the certificate)
- Create and download a certificate (pem), private and public key.
- Run `$ curl https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem > root-CA.crt`
- Run `$ npm install aws-iot-device-sdk`
-

# Process and act on data with the Rules Engine
# Read and set device state with Device Shadows

# Troubleshooting
