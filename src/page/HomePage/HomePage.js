import Tone from 'tone';
import Knob from '../../component/Knob';

export default {
  name: 'HomePage',
  components: {
    Knob,
  },
  data() {
    return {
      output: null,
    };
  },
  mounted() {
    const bell = new Tone.MetalSynth({
      harmonicity: 12,
      resonance: 800,
      modulationIndex: 20,
      envelope: {
        decay: 0.4,
      },
      volume: -15,
    }).toMaster();
    new Tone.Sequence(
      time => {
        bell.triggerAttack(time);
      },
      [300, null, 200, null, 200, 200, null, 200, null, 200, null, 200],
      '8t',
    ).start(0);
    Tone.Transport.bpm.value = 60;
    Tone.Transport.start('+0.1');
    this.output = Tone.Transport.bpm;
  },
};
