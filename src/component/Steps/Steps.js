import Tone from 'tone';
import Nexus from 'nexusui';
import VueTypes from 'vue-types';

export default {
  name: 'Steps',
  data() {
    return {
      id: null,
      sequencer: null,
      looper: null,
    };
  },
  props: {
    label: VueTypes.string.isRequired, // Label to show
    steps: VueTypes.integer.isRequired, // number of steps
    synth: VueTypes.shape({
      type: VueTypes.oneOf(['synth', 'polysynth', 'monosynth', 'noise', 'metal']),
    }),
    notes: VueTypes.arrayOf(String), // array of notes  in string notatios
    files: VueTypes.arrayOf(String), // Array of file routes
    time: VueTypes.number.isRequired, // Time a note should sound
  },
  mounted() {
    // Create the steps UI
    this.id = `steps-${this._uid}`;
    // SetTimeout ?
    this.$nextTick(() => {
      this.sequencer = new Nexus.Sequencer(`#${this.id}`, {
        size: [400, 200],
        mode: 'toggle',
        rows: this.notes.length || this.files.length,
        columns: this.steps,
      });

      const synth = this.createSynth(this.synth.type);

      this.sequencer.on('step', v => {
        v.forEach((on, index) => {
          if (on) synth.triggerAttackRelease(this.notes[index], this.time);
        });
      });

      this.sequencer.start(500);
    });
    console.info(`${this.label} steps with id: ${this.id} instantiated`);
  },
  methods: {
    createSynth(type) {
      let synth;
      switch (type) {
        case 'synth':
          synth = new Tone.Synth({
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
        case 'polysynth':
          synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
          break;
        case 'metal':
          synth = new Tone.MetalSynth().toMaster();
          break;
        default:
          break;
      }
      return synth;
    },
  },
};
