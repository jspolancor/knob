import Tone from 'tone';
import Knob from '../../component/Knob';
import Stepper from '../../component/Stepper';

export default {
  name: 'Osc',
  data() {
    return {
      osc: null,
    };
  },
  props: ['controllers'],
  components: {
    Knob,
    Stepper,
  },
  created() {
    this.osc = new Tone.Oscillator({
      type: 'square',
      frequency: 0,
      volume: 0,
      detune: 0,
    }).toMaster();
    this.osc.start();
  },
  methods: {
    dataChanged(v, input) {
      if (this.isValidInput) this.osc[input].value = v;
    },
    isValidInput(input) {
      return ['frequency', 'detune', 'volume'].find(prop => prop === input);
    },
  },
};
