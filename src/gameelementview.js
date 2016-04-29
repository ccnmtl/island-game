var Backbone = require('backbone');
var jQuery = require('jquery');

module.exports.GameElementView = Backbone.View.extend({
    initialize: function(options) {
        _.bindAll(this, 'val', 'pos', 'setValue', 'getValue',
                  'resetValue', 'getFraction', 'render');
        this.model.bind('change:value', this.render);
        this.model.bind('change:visible', this.render);

        this.parent = options.parent;
        this.offset = jQuery(this.parent.el).position();

        this.initializePosition();
        this.resetValue();
        this.render();
    },

    initializePosition: function() {
        var position = jQuery(this.el).position();
        var offset = this.offset;

        this.model.set('start_offset',
                       {x: position.left + offset.left,
                        y: position.top + offset.top +
                        this.model.get('vertical_range')});
        this.model.set('end_offset',
                       {x: position.left + offset.left +
                        this.model.get('horizontal_range'),
                        y: position.top + offset.top});
    },

    resetValue: function() {
        this.model.set('value', this.model.get('starting_value'));
    },

    setValue: function(value) {
        this.model.set('value', value);
    },

    hide: function() {
        this.model.set('visible', false);
    },

    show: function() {
        this.model.set('visible', true);
    },

    disable: function() {
        this.model.set('enabled', false);
    },

    enable: function() {
        this.model.set('enabled', true);
    },

    getValue: function() {
        // the current value of the slider
        var pos = jQuery(this.el).position();
        return this.val(pos.left, pos.top);
    },

    getFraction: function() {
        // the current value of the slider as a fraction of its max setting.
        var diff = this.model
            .get('max_value') - this.model.get('min_value');
        return (this.getValue() - this.model.get('min_value')) / diff;
    },

    val: function(x, y) {
        // returns the value, with respect to the slider,
        // of a pair of mouse coordinates.
        var v = 0;
        var unit = this.model.unit();
        if (unit.x !== 0) {
            v =  (x - this.model.get('start_offset').x) / unit.x;
        } else {
            v = (y - this.model.get('start_offset').y) / unit.y;
        }
        if (v < this.model.get('min_value')) {
            return this.model.get('min_value');
        } else if (v > this.model.get('max_value')) {
            return this.model.get('max_value');
        } else {
            return v;
        }
    },

    pos: function(v) {
        // the position of the movable part of the slider
        // when the slider is set to a given value.
        var unit = this.model.unit();
        var x = this.model.get('start_offset').x + unit.x * v;
        var y = this.model.get('start_offset').y + unit.y * v;
        return [x, y];
    },

    render: function() {
        if (this.model.get('visible')) {
            jQuery(this.el).show();
        } else {
            jQuery(this.el).hide();
        }

        // position the image properly at the given value
        var value = this.model.get('value');
        var p = this.pos(value);

        jQuery(this.el).css({'left':  (p[0]) + 'px',
                             'top': (p[1]) + 'px'});
    }
});
