var Xray = require('x-ray');

// This module exports a constructor function with a parameter for configuration.
// The 'config' parameter will hold an object instance containing all configuration values defined for this connector.
module.exports = function (config) {

    var x = Xray();

    // config validation
    if (!config) throw new Error("'config' object is missing.");

    if (typeof(config.maxSize) !== 'number' || config.maxSize < 0) {
        throw new Error("configuration.maxSize must be a positive number.");
    }
    // instance variables initialization
    var maxSize = config.maxSize || Number.MAX_VALUE;
    var stack = [];

    // KidoZen will be able to invoke only public methods, so we define the methods 'push' and 'pop' as public

    // Adds an element at the top of the stack.
    // Parameters:
    // - options : [Required] object instance containing the property 'data' that represents the element to be added.
    // - callback : [Required] function instance.
    //
    // Returns : The method returns the number of elements present in the stack after the new element was added, or
    // an Error instance if the 'options' argument is invalid or the max size of the stack was reached
    this.parse = function (options, callback) {
        /*
        // options parameter validation
        if (!options) {
            callback(new Error("'options' is missing."));
            return;
        }
        // data parameter validation
        if (typeof options.url === undefined) {
            callback(new Error("options.url is missing."));
            return;
        }

        if (typeof options.model === undefined) {
            callback(new Error("options.model is missing."));
            return;
        }

        xray(options.url, options.scope, options.model)(function(err, data) {
            callback(null, data);
        });
        */
        xray('http://google.com', [{
            'title' : 'title'
        }])(function(err, data) {
            if (!err) {
                callback(null, data);
            } else {
                callback(new Error(err));
            }
        })
    };
};