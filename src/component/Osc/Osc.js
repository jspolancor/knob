import Tone from 'tone';
import Knob from '../../component/Knob';
import Stepper from '../../component/Stepper';

export default {
  name: 'Osc',
  data() {
    return {
      osc: null,
      output: null,
      frequencyOut: null,
      detuneOut: null,
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
    this.frequencyOut = this.osc.frequency;
    this.detuneOut = this.osc.detune;
    this.output = this.osc;
  },
};
