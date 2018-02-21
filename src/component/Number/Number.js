import Nexus from 'nexusui';
import VueTypes from 'vue-types';

export default {
  name: 'Number',
  props: {
    min: VueTypes.number.isRequired,
    max: VueTypes.number.isRequired,
    step: VueTypes.number.isRequired,
    input: VueTypes.any.isRequired,
    label: VueTypes.string.isRequired,
  },
  data() {
    return {
      id: null,
      number: {},
    };
  },
  mounted() {
    this.id = `number-${this._uid}`;
    this.$nextTick(() => {
      this.number = new Nexus.Number(`#${this.id}`, {
        size: [60, 30],
        min: this.min,
        max: this.max,
        step: this.step,
        value: 0,
      });
      this.number.on('change', this.dataChanged);
    });
  },
  methods: {
    dataChanged(v) {
      this.$parent.dataChanged(v, this.input); // It works 💃
    },
  },
};
