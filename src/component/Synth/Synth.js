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
        this.synth = new Tone.Synth({
          oscillator: {
            type: 'square',
          },
          envelope: {
            attack: 0.01,
            decay: 0.2,
            sustain: 0.2,
            release: 0.2,
          },
        }).toMaster();
        break;
      case 'am':
        this.synth = new Tone.AMSynth().toMaster();
        break;
      case 'duo':
        this.synth = new Tone.DuoSynth().toMaster();
        break;
      case 'fm':
        this.synth = new Tone.FMSynth().toMaster();
        break;
      case 'membrane':
        this.synth = new Tone.MembraneSynth().toMaster();
        break;
      case 'mono':
        this.synth = new Tone.MonoSynth().toMaster();
        break;
      default:
        this.synth = new Tone.MonoSynth().toMaster();
        break;
    }

    // Create a polysynth
    this.polySynth = new Tone.PolySynth(6, this.Synth).toMaster();
  },
  methods: {
    dataChanged(v, input) {
      input = input.toLowerCase();
      if (this.isValidInput(input)) {
        const globalProp = ['detune'].find(inp => inp === input);
        if (globalProp) {
          this.polySynth[input].value = v;
        } else {
          // Modify poly
          this.polySynth.set({
            envelope: {
              [input]: v,
            },
          });
        }
      }
    },
    isValidInput(input) {
      const validProperties = ['attack', 'decay', 'sustain', 'release', 'detune'];
      return validProperties.find(prop => prop === input);
    },
  },
};
