import Tone from 'tone';
import Knob from '../../component/Knob';

export default {
  name: 'Osc',
  data() {
    return {
      osc: null,
      frequency: 0,
      volume: 0,
      frequencyOut: null,
      volumeOut: null,
      detuneOut: null,
    };
  },
  components: {
    Knob,
  },
  created() {
    this.osc = new Tone.Oscillator({
      type: 'sawtooth6',
      frequency: this.frequency,
      volume: this.volume,
    }).toMaster();
    this.osc.start();
    this.frequencyOut = this.osc.frequency;
    this.volumeOut = this.osc.volume;
    this.detuneOut = this.osc.detune;
    console.log(this.osc);
  },
};
