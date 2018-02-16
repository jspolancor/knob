import Tone from 'tone';
import Osc from '../../component/Osc';
import Knob from '../../component/Knob';
import Steps from '../../component/Steps';

export default {
  name: 'HomePage',
  components: {
    Knob,
    Osc,
    Steps,
  },
  data() {
    return {
      output: null,
      globalBpm: null,
    };
  },
  created() {
    Tone.Transport.start();
    Tone.Transport.bpm.value = 120;
    this.globalBpm = Tone.Transport.bpm;

    const sampler = new Tone.Sampler(
      {
        D3: '../../../static/mp3/sense.mp3',
      },
      () => {
        sampler.triggerAttack('D3');
      },
    ).toMaster();
  },
};
