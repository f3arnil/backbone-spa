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
        var load = this.name + ':load';
        var destroy = this.name + ':destroy';
        var currentView = this.name + ':changeView'
        _.extend(this, Backbone.Events);

        this.once(load, this.setViewLoad, this);
        this.on(destroy, this.destroyView, this);
        this.on(currentView, this.changeCurrentView, this);

        this.setDefault();
    };

    Module.prototype.setDefault = function () {
        var defaultProp = ['layoutView', 'router'];
        _.each(defaultProp, function (property) {
            if (!(property in this)) {
                return;
            }

            var elem = this[property];

            if (!_.has(elem, 'constructor')) {
                return;
            };

            if (property === 'layoutView' && this.switchable === true) {
                console.log('No create layout view for -> ', this.name);
                return;
            }

            var Element = elem.constructor;
            var options = elem.options || {};
            this[property] = new Element(options);
        }, this);


        this.on(this.name + ':module:loaded', this.moduleLoaded, this);
        this.subModulesConstruct();
    };

    Module.prototype.subModulesConstruct = function () {

        this.subModulesCount = 0;

        this.on(this.name + ':submodule:loaded', this.subModuleLoaded, this);

        _.each(this.modules, function (object, index) {
            this.subModulesCount++;
        }, this);

        console.log(this.name, ' submodules count = ', this.subModulesCount);

        if (!this.modules) {
            console.log(this.name, ' submodule loaded ... ');
            console.log(this.name, ' module load ...');
            this.trigger(this.parentModule + ':submodule:loaded');
            return;
        };

        this.modules.sort(this.compareWeight);

        _.each(this.modules, function (object, index) {
            var module = new object.module({
                parentModule: this.name
            });
            this[module.name] = module;
        }, this);

    };

    Module.prototype.subModuleLoaded = function () {
        this.subModulesCount--;
        if (this.subModulesCount <= 0) {
            console.log(this.name, 'loaded...')
            this.trigger(this.name + ':module:loaded');
        }
    };

    Module.prototype.moduleLoaded = function () {
        if (!this.parentModule) {
            console.log('APP MODULE LOAD...');
            this.trigger('start:app');
        } else {
            this.trigger(this.parentModule + ':submodule:loaded');
        }
    };

    Module.prototype.setViewLoad = function () {

        this.trigger(this.parentModule + ':changeView', this.name);
        
        var elem = this['layoutView'];
        var Element = elem.constructor;
        var options = elem.options || {};
        this['layoutView'] = new Element(options);
    };

    Module.prototype.destroyView = function () {
        this.subViewsCount = 0;
        if (this.modules) {
            this.subViewsCount = this.modules.length;
            this.on(this.name + ':parentview:destroy', this.destroyCurrentView, this);
            _.each(this.modules, function (elem) {
                this.trigger(elem.module.prototype.name + ':destroy');
            }, this);
        } else {
            this.destroyCurrentView();
        }
    };

    Module.prototype.destroyCurrentView = function () {
        this.subViewsCount--;

        if (this.subViewsCount > 0) { 
            return;
        }

        var load = this.name + ':load';
        this.layoutView.dispose(this.name);
        delete this.layoutView;
        this.once(load, this.setViewLoad, this);
        this.trigger(this.parentModule + ':parentview:destroy');
        this.off(this.parentModule + ':parentview:destroy');
    }

    Module.prototype.changeCurrentView = function (name) {
        if (this.currentView && this.currentView != name) {
            this.trigger(this.currentView + ':destroy');
        }
        this.currentView = name;
    }

    Module.prototype.compareWeight = function (moduleA, moduleB) {
        return moduleA.weight - moduleB.weight;
    };

    return Module;
})();
