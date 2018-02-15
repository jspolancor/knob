import Tone from 'tone';
import Osc from '../../component/Osc';
import Knob from '../../component/Knob';

export default {
  name: 'HomePage',
  components: {
    Knob,
    Osc,
  },
  data() {
    return {
      output: null,
      globalBpm: null,
    };
  },
  created() {
    Tone.Transport.start();
    Tone.Transport.bpm.value = 10;
    this.globalBpm = Tone.Transport.bpm;
  },
};
