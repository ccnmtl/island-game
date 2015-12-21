var Backbone = require('backbone');

module.exports.GameElement = Backbone.Model.extend({
    defaults: {
        name: '',
        min_value: 0,
        max_value: 10,
        starting_value: 0,
        value: 0,
        start_offset: {x: 0, y: 0},
        end_offset: {x: 0, y: 0},
        draggable: false,
        gender: '',
        enabled: true,
        visible: true,
        horizontal_range: 0,
        vertical_range: 0
    },

    unit: function() {
        var range = this.get('max_value') - this.get('min_value');
        return {
            x: (this.get('end_offset').x -
                this.get('start_offset').x) / range,
            y: (this.get('end_offset').y -
                this.get('start_offset').y) / range
        };
    }
});
