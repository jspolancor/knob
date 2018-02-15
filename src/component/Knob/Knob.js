import Nexus from 'nexusui';

export default {
  name: 'Knob',
  props: ['min', 'max', 'step', 'input'],
  data() {
    return {
      id: null,
      dial: {},
      value: 0,
    };
  },
  mounted() {
    this.id = `k-${this._uid}`;
    this.$nextTick(() => {
      this.dial = new Nexus.Dial(`#${this.id}`, {
        size: [65, 65],
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
      this.value = v;
      this.input.value = v;
    },
  },
};
