import Tone from 'tone';
import VueTypes from 'vue-types';

export default {
  name: 'Synth',
  data() {
    return {
      synth: {},
      polySynth: {},
    };
  },
  props: {
    type: VueTypes.oneOf(['synth', 'am', 'duo', 'fm', 'membrane', 'mono']),
  },
  created() {
    switch (this.type) {
      case 'synth':
        this.synth = Tone.Synth;
        break;
      case 'am':
        this.synth = Tone.AMSynth;
        break;
      case 'duo':
        this.synth = Tone.DuoSynth;
        break;
      case 'fm':
        this.synth = Tone.FMSynth;
        break;
      case 'membrane':
        this.synth = Tone.MembraneSynth;
        break;
      case 'mono':
        this.synth = Tone.MonoSynth;
        break;
      default:
        this.synth = Tone.MonoSynth;
        break;
    }

    // Create a polysynth
    this.polySynth = new Tone.PolySynth(6, this.synth).toMaster();
  },
  methods: {
    dataChanged(v, input) {
      input = input.toLowerCase();
      if (this.isValidInput(input)) this.polySynth[input].value = v;
    },
    isValidInput(input) {
      const validProperties = ['volume', 'detune'];
      return validProperties.find(prop => prop === input);
    },
  },
};
