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

    // Module.prototype.listenTo = Backbone.Events.listenTo;
    // Module.prototype.on = Backbone.Events.on;
    // Module.prototype.off = Backbone.Events.off;
    // Module.prototype.once = Backbone.Events.once;

    //console.log(Module.prototype.once);

    
    Module.prototype.init = function () {
        console.log(this.name, ' LOADING START...');
        var loaded = this.name + ':loaded';
        _.extend(this, Backbone.Events);
        Backbone.Events.on(loaded, this.onLoyoutViewLoad, this);
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

    // Callback function loaded View
    Module.prototype.onLoyoutViewLoad = function () {
        //console.log(this.name, ' is loaded');
        Backbone.Events.on(this.name + ':submodules:loaded', this.onSubModulesLoad, this);
        Backbone.Events.on(this.name + ':modules:loaded', this.onModulesLoad, this);
        this.subModulesConstruct();
        this.switcher();
    }
    
    Module.prototype.onSubModulesLoad = function () {
        //console.log(this.name + ' -> Submodules loaded!');
        this.submodulesCount--;      
        if (this.submodulesCount <= 0) {
            Backbone.Events.trigger(this.name + ':modules:loaded');
        }
    }
    
    Module.prototype.onModulesLoad = function () {
        console.log(this.name, ' LOADING END...');
    }

    Module.prototype.subModulesConstruct = function () {

        this.submodulesCount = 0;
        
        _.each(this.modules, function (object, index) {
            if (_.has(object, 'switchable') || object.switchable) return;
            this.submodulesCount++;
        }, this);

        console.log(this.name + ' submodules -> ' + this.submodulesCount);
        
        if (!this.modules || this.modules.length == 0) {                // if there are no submodules
            if ( this.parentModule == 'undefined' ) { Backbone.Events.trigger('Start:app'); return; }
            
            Backbone.Events.trigger(this.name + ':submodules:loaded');
            Backbone.Events.trigger(this.parentModule + ':modules:loaded');
            
            console.log('PARENT >>> ', this.parentModule);
            
            return;
        };

        this.modules.sort(this.compareWeight);

        _.each(this.modules, function (object, index) {
            if (_.has(object, 'switchable') || object.switchable) return;

            var module = new object.module();                           // create module
            this[module.name] = module;                                 // add parameters
            this[module.name].parentModule = this.name;

        }, this);

    };

    Module.prototype.compareWeight = function (moduleA, moduleB) {
        return moduleA.weight - moduleB.weight;
    };

    Module.prototype.switcher = function () {
        _.each(this.modules, function (object, index) {
            if (_.has(object, 'switchable') && object.switchable) {
                //console.log('Set listener to ', object.event);
                this.listenTo(Backbone.Events, object.event, function () {
                    //console.log('Catched', object.event);

                    if (_.has(this.currentModule, 'view')) {
                        // console.log('Remove existing current.', this.currentModule);
                        // this.currentModule.view.off();
                        // this.currentModule.view.remove();
                        // this.currentModule = {};
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
