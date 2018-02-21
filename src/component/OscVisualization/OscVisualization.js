import Nexus from 'nexusui';
import VueTypes from 'vue-types';

export default {
  name: 'OscVisualization',
  props: {
    input: VueTypes.any.isRequired,
  },
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = `knob-${this._uid}`;
    this.$nextTick(() => {
      const oscilloscope = new Nexus.Oscilloscope(`#${this.id}`, {
        size: [150, 66],
      });
      oscilloscope.connect(this.$parent[this.input]);
    });
  },
};
