import Nexus from 'nexusui';
import VueTypes from 'vue-types';

export default {
  name: 'Knob',
  props: {
    min: VueTypes.number.isRequired,
    max: VueTypes.number.isRequired,
    step: VueTypes.number.isRequired,
    input: VueTypes.any.isRequired,
    label: VueTypes.string,
  },
  data() {
    return {
      id: null,
      dial: {},
    };
  },
  mounted() {
    this.id = `knob-${this._uid}`;
    this.$nextTick(() => {
      this.dial = new Nexus.Dial(`#${this.id}`, {
        size: [40, 40],
        interaction: 'radial',
        mode: 'relative',
        min: this.min,
        max: this.max,
        step: this.step,
        value: 0,
      });
      this.dial.on('change', this.dataChanged);
    });
  },
  methods: {
    dataChanged(v) {
      this.$parent.dataChanged(v, this.input);
    },
  },
};
