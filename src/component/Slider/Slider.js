import Nexus from 'nexusui';
import VueTypes from 'vue-types';

export default {
  name: 'Slider',
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
      slider: {},
    };
  },
  mounted() {
    this.id = `slider-${this._uid}`;
    this.$nextTick(() => {
      this.slider = new Nexus.Slider(`#${this.id}`, {
        size: [120, 20],
        mode: 'relative',
        min: this.min,
        max: this.max,
        step: this.step,
        value: 0,
      });
      this.slider.on('change', this.dataChanged);
    });
  },
  methods: {
    dataChanged(v) {
      this.$parent.dataChanged(v, this.input); // It works 💃
    },
  },
};
