'use strict'

module.exports = (function () {

    var Module = function (params) {
        if (params) {
            this.view = {}
            this.modules = [];
            this.currentModule = {};
            _.extend(this, params);
        }
        this.init();
    }

    Module.extend = Backbone.View.extend;
    Module.prototype.listenTo = Backbone.Events.listenTo;

    Module.prototype.construct = function () {
        _.each(this, function (el, index) {
            if (_.has(el, 'constructor')) {
                var Element = el.constructor;
                var options = el.options || {};
                this[index] = new Element(options);
            }
        }, this);
    };

    Module.prototype.setDefault = function () {
        var defaultProp = ['view', 'router']
        _.each(defaultProp, function (el) {
            if (!(el in this)) {
                //console.log('No ' + el + 'in ' + this.name);
                return;
            }
            var elem = this[el];
            if (!_.has(elem, 'constructor')) {
                return;
            };
            var Element = elem.constructor;
            var options = elem.options || {};
            this[el] = new Element(options);

        }, this);
    };

    Module.prototype.subModulesConstruct = function () {
        if (!this.modules || this.modules.length == 0) {
            //console.log(this.name, ': No modules param or empty');
            return;
        };

        this.modules.sort(this.compareWeight);
        _.each(this.modules, function (el, index) {
            
            if (_.has(el, 'switchable') || el.switchable) return;

            var module = new el.module();
            this[module.name] = module;


        }, this);

    };

    Module.prototype.compareWeight = function (moduleA, moduleB) {
        return moduleA.weight - moduleB.weight;
    };

    Module.prototype.init = function () {
        console.log('Init ', this.name);
        this.setDefault();
        this.construct();
        this.subModulesConstruct();
        this.switcher();
    };

    Module.prototype.switcher = function () {
        _.each(this.modules, function (el, index) {
            if (_.has(el, 'switchable') && el.switchable) {
                console.log('Set listener to ', el.event);
                this.listenTo(Backbone.Events, el.event, function () {
                    console.log('Catched', el.event);
                    
                    if (_.has(this.currentModule, 'view')) {
                        console.log('Remove existing current.', this.currentModule);
                        this.currentModule.view.off();
                        this.currentModule.view.remove();
                        this.currentModule = {};
                    }
                    
                    var module = new el.module();
                    this['currentModule'] = module;

                }, this)
            }
        }, this)
    };

    return Module;

})();
