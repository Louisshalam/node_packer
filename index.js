/**
 * Created by louisshalam on 6/15/15.
 */

"use strict";

var fs = require("fs");
var util = require("util");

var emails = fs.readFileSync('/Users/louisshalam/GitHub/Packer/node_packer/resources/emails.txt', {encoding:'utf8'});
console.log(util.inspect(emails));

var emailsArray = emails.split('\n');

console.log(emailsArray);

var domains = {};

emailsArray.forEach(function(email, index, array) {
    var splitEmail = email.split('@');
    var domain = splitEmail[1];
    console.log(domain);
    if(domains[domain]) {
        domains[domain]++;
    } else {
        domains[domain] = 1;
    }
});

console.log(domains);
