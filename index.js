/**
 * Created by louisshalam on 6/15/15.
 */

"use strict";

var fs = require("fs");
var util = require("util");
var packerCmd = require('node-packer').packerCmdLine;
var PackerFile = require('node-packer').PackerFile;


var nodeAmi = new PackerFile();
nodeAmi.filePath='~/Desktop/Node-template.json';
nodeAmi.build(function(err, output){
        if(err){
            console.log("Fiddlesticks! Something went wrong :-(", err);
        } else {
            console.log("The formatted output from the nodeAmi build:", output);
        }
    });

var javaAmi = new PackerFile();
javaAmi.filePath='~/Desktop/Java-template.json';
javaAmi.build(function(err, output){
        if(err){
            console.log("Fiddlesticks! Something went wrong :-(", err);
        } else {
            console.log("The formatted output from the javaAmi build:", output);
        }
    });


