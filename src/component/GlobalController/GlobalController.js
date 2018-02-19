import Tone from 'tone';
import Nexus from 'nexusui';
import Knob from '../../component/Knob';

export default {
  name: 'GlobalController',
  components: {
    Knob,
  },
  data() {
    return {
      output: null,
      globalBpm: null,
    };
  },
  created() {
    Nexus.context = Tone.context;
    Tone.Transport.start();
    Tone.Transport.bpm.value = 10;
    this.globalBpm = Tone.Transport.bpm;
  },
  mounted() {
    const oscilloscope = new Nexus.Oscilloscope('#osc', {
      size: [100, 40],
    });
    this.$nextTick(() => {
      oscilloscope.connect(Tone.Master);
    });
  },
};
