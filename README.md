# Macho Land

Mobile application of the MachoLand website. It uses the Ionic framework, which is
base upon Cordova framework. Please visit http://ionic.io for instructions on the
installation.

# Dependencies

## Cordova Plugin dependencies

In order to make the application work, you need some cordova plugins. In the root
folder of your project, run these commands:

    cordova plugin add org.apache.cordova.camera`
    cordova plugin add https://github.com/sp4ce/send-mail-cordova-plugin.git`

## Other Cordova dependencies

To build the icon of the application we use the application `cordova-icon`

    sudo npm install cordova-icon -g

# Configuration

## Configuration file

The configuration of the application itself is done in the file `www/js/config.js`. It the
file doesn't exist, copy the file `config.template.js` and fill it with the
right values

 - `GMAIL_ACCOUNT`: The GMail account used to send the email.
 - `GMAIL_ACCOUNT_PASSWORD`: The password of the GMail account.
 - `PHOTO_EMAIL`: The email where to send the photos.

## GMail account configuration

In order to be able to send an email, you need to activate some parameters in the GMail account. First you need to unlock your account and then activate the less secure application.

     - https://accounts.google.com/b/0/DisplayUnlockCaptcha
     - https://www.google.com/settings/security/lesssecureapps

Also, because you need to hard code the password in the code and deactivate basic
security on the GMail account, it is strongly advised to create a dedicated
GMail account to send email.

# Run on android

First you need to add the android platform (you do this only one time) and then
start to emulate on any android device. See the Android SDK documentation for
more information.

    ionic add platform android
    ionic emulate android

# Run on IOS

## Pantomime

In order to send mail on the IOS platform, we use the Pantomime library. IOS needs to add the Pantomime library to your project. To install the library on linux you can use GNUstep framework and then visit this wiki page. To install the library on IOS you need to use mac port to install the framework:

    port install Pantomime-Framework

## Run the application

    ionic add platform ios
    ionic emulate ios

#More information on the website

http://www.macholand.fr
