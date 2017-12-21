/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant 
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// All JavaScript in here will be loaded client-side

// Expose components globally so ReactJS.NET can use them

// Include react to the client.bundle.js so its available on the client.
var React = require('expose-loader?React!react');
var ReactDOM = require('expose-loader?ReactDOM!react-dom');

var Cito = require('expose-loader?Cito!../src/components');
