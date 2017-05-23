/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const request = require('request-promise');
const languages = require ('languages');
const nodemailer = require('nodemailer');

exports.onSignUp = functions.auth.user().onCreate(event => {
  // ...
  
	const user = event.data; // The Firebase user.

	const email1 = user.email; // The email of the user.
	const displayName1 = user.displayName; // The display name of the user.
	const uid1 = user.uid; // The display name of the user.

	return admin.database().ref('/users/'+uid1).set({uid: uid1, displayName: displayName1, email: email1});
  

});
