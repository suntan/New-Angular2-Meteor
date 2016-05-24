import {loadParties} from './load-parties';
import {Meteor} from 'meteor/meteor';
import './parties';
import './users';
import '../collections/methods';
 
Meteor.startup(loadParties);
