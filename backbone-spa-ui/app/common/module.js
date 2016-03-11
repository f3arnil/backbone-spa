'use strict'

module.exports = (function () {

    var Module = function (params) {
        if (params) {
            this.view = {}
            this.modules = [];
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
                console.log('No ' + el + 'in ' + this.name);
                return;
            }
            var elem = this[el];
            if (_.has(elem, 'constructor')) {
                var Element = elem.constructor;
                var options = elem.options || {};
                this[el] = new Element(options);
            }
        }, this);
    }

    Module.prototype.subModulesConstruct = function () {
        if (!this.modules || this.modules.length == 0) {
            console.log(this.name, ': No modules param or empty');
            return;
        };

        this.modules.sort(this.compareWeight);
        _.each(this.modules, function (el, index) {
            var tmp = new el.module();
            if (!_.has(el, 'switchable') || !el.switchable){
                var module = new el.module(tmp.options);
                this[module.name] = module;
            }
                
        }, this);

    };

    Module.prototype.compareWeight = function (moduleA, moduleB) {
        return moduleA.weight - moduleB.weight;
    };

    Module.prototype.init = function () {
        this.setDefault();
        this.construct();
        this.subModulesConstruct();
        this.switcher();
        //console.log(this);
    };

    Module.prototype.switcher = function () {
        _.each(this.modules, function (el, index) {
            if (_.has(el, 'switchable') && el.switchable) {
                this.listenTo(Backbone.Events, el.event, function () {
                    console.log('Catched');
                    this['currentModule'] = new el.module();
                })
            }

            //this[el.name] = new el.module();
        }, this)
    }
    return Module;

})();
