'use strict'

module.exports = (function () {

    var Module = function (params) {
        if (params) {
            _.extend(this, params);
        }
        this.init();
    }

    Module.extend = Backbone.View.extend;

    Module.prototype.init = function () {
        var loaded = this.name + ':load';
        Backbone.Events.on(loaded, function () {
            console.log('start:view:' + this.name);
        }, this);
        _.extend(this, Backbone.Events);
        this.setDefault();
        
    };

    Module.prototype.setDefault = function () {
        var defaultProp = ['router']
        _.each(defaultProp, function (property) {
            if (!(property in this)) {
                return;
            }
            var elem = this[property];
            if (!_.has(elem, 'constructor')) {
                return;
            };
            var Element = elem.constructor;
            var options = elem.options || {};
            this[property] = new Element(options);
        }, this);
        
        
        Backbone.Events.on(this.name + ':module:loaded', this.moduleLoaded, this);
        this.subModulesConstruct();
    };

    Module.prototype.subModulesConstruct = function () {
        
        this.subModulesCount = 0;
        
        Backbone.Events.on(this.name + ':submodule:loaded', this.subModuleLoaded, this);

        _.each(this.modules, function (object, index) {
            this.subModulesCount++;
        }, this);
        
        console.log(this.name, ' submodules count = ', this.subModulesCount);
        
        if (!this.modules) {
            console.log(this.name, ' submodule loaded ... ');
            console.log(this.name, ' module load ...');
            Backbone.Events.trigger(this.parentModule + ':submodule:loaded');
            return;
        };

        _.each(this.modules, function (object, index) {
            var module = new object.module({
                parentModule: this.name
            });
            this[module.name] = module;
        }, this);

    };
    
    Module.prototype.subModuleLoaded = function () {
        this.subModulesCount--;
        if (this.subModulesCount <= 0)  {
            console.log(this.name, 'loaded...')
            Backbone.Events.trigger(this.name + ':module:loaded');
        }
    };
    
    Module.prototype.moduleLoaded = function () {
        if (!this.parentModule) {
            console.log('APP MODULE LOAD...');
            Backbone.Events.trigger('start:app');
        } else {
            //console.log('       ', this.name, 'load!');
            Backbone.Events.trigger(this.parentModule + ':module:loaded');
        }
    };

    return Module;
})();
