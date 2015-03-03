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
