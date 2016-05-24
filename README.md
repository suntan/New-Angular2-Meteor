# New-Angular2-Meteor 2016.05.24

$ curl https://install.meteor.com/ | sh

$ meteor create My-Project

$ rm -rf My-Project/client/*.*

$ git clone https://github.com/suntan/New-Angular2-Meteor.git

$ cp -r New-Angular2-Meteor/. My-Project/

$ cd  My-Project

# Adding Angular 2 and it's dependencies

$ meteor remove blaze-html-templates

$ meteor add angular2-compilers barbatus:angular2-runtime

$ meteor npm install --save angular2-meteor @angular/platform-browser-dynamic

# Set TypeScript Typings

$ sudo npm install typings -g

$ typings init

$ typings install es6-promise --save

$ typings install dt~es6-shim --global --save

$ typings install registry:env/meteor --global


# Binding Meteor to Angular

$ meteor npm install angular2-meteor-auto-bootstrap --save

# Import Router Dependencies

$ meteor npm install --save @angular/router-deprecated

# Removing Insecure

$ $ meteor remove insecure

# Add User Accounts

$ meteor add accounts-password

$ meteor npm install --save angular2-meteor-accounts-ui

# Remove Auto Publish

$ meteor remove autopublish

# Reactive variables

$ meteor add reactive-var

# Add Pagination UI

$ meteor npm install angular2-pagination --save

# Generating Mock Data

$ meteor add anti:fake

# Add publish-counts Package

$ meteor add tmeasday:publish-counts

# Validating Methods with Check & Email

$ meteor add check

$ meteor add email

# Adding Google Maps

$ meteor npm install angular2-google-maps --save

# Adding and importing Bootstrap 4

$ meteor npm install --save bootstrap@4.0.0-alpha.2

$ meteor add fourseven:scss

# Running on an Android Device

$ meteor run android-device

Submit your Android app to the Play Store: https://github.com/meteor/meteor/wiki/How-to-submit-your-Android-app-to-Play-Store

# Running on an iPhone or iPad (Mac Only)

$ meteor run ios-device

Submit your iOS app to the App Store: https://github.com/meteor/meteor/wiki/How-to-submit-your-iOS-app-to-App-Store

# Running on Windows/Linux Server

$ meteor --port  ex: meteor 1688
