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
//    Module.prototype.on = Backbone.Events.on;
//    Module.prototype.off = Backbone.Events.off;
//    console.log(Backbone.Events);

    
    Module.prototype.init = function () {
        console.log('Init >>', this.name);
        var loaded = this.name + ':loaded';
        this.listenTo(Backbone.Events, loaded, this.onLoyoutViewLoad);
        this.setDefault();                  // Loaded layoutview and router
    };
    
    Module.prototype.setDefault = function () {
        var defaultProp = ['layoutView', 'router']
        _.each(defaultProp, function (property) {
            if (!(property in this)) {
                //console.log('No ' + property + 'in ' + this.name);
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
    };

    Module.prototype.onLoyoutViewLoad = function() {
        console.log(this.name, ' is loaded');
        this.subModulesConstruct();
        this.switcher();
    }
    
    Module.prototype.subModulesConstruct = function () {
        if (!this.modules || this.modules.length == 0) {
            //console.log(this.name, ': No modules param or empty');
            return;
        };

        this.modules.sort(this.compareWeight);
        _.each(this.modules, function (object, index) {

            if (_.has(object, 'switchable') || object.switchable) return;

            var module = new object.module();
            this[module.name] = module;


        }, this);

    };

    Module.prototype.compareWeight = function (moduleA, moduleB) {
        return moduleA.weight - moduleB.weight;
    };



    Module.prototype.switcher = function () {
        _.each(this.modules, function (object, index) {
            if (_.has(object, 'switchable') && object.switchable) {
                console.log('Set listener to ', object.event);
                this.listenTo(Backbone.Events, object.event, function () {
                    console.log('Catched', object.event);

                    if (_.has(this.currentModule, 'view')) {
                        //                        console.log('Remove existing current.', this.currentModule);
                        //                        this.currentModule.view.off();
                        //                        this.currentModule.view.remove();
                        //                        this.currentModule = {};
                    }

                    var module = new object.module();
                    this['currentModule'] = module;

                }, this)
            }
        }, this)
    };

    return Module;

})();


//    Module.prototype.construct = function () {
//        _.each(this, function (el, index) {
//            if (_.has(el, 'constructor')) {
//                var Element = el.constructor;
//                var options = el.options || {};
//                this[index] = new Element(options);
//            }
//        }, this);
//    };
