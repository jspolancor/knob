import Tone from 'tone';
import Nexus from 'nexusui';
import VueTypes from 'vue-types';

export default {
  name: 'Steps',
  data() {
    return {
      id: null,
      sequencer: null, // UI
      looper: null, // Tone
      sampler: null, // Files
    };
  },
  props: {
    label: VueTypes.string.isRequired, // Label to show
    steps: VueTypes.integer.isRequired, // number of steps
    synth: VueTypes.shape({
      type: VueTypes.oneOf(['synth', 'am', 'duo', 'fm', 'membrane', 'mono', 'pluck']),
    }),
    notes: VueTypes.arrayOf(String), // array of notes  in string notatios
    files: VueTypes.arrayOf(String), // Array of file routes
    time: VueTypes.number.isRequired, // Time a note should sound
  },
  created() {
    if (this.files) {
      const loopsObj = {};
      this.files.forEach((file, index) => {
        loopsObj[`D${index}`] = file;
      });
      this.sampler = new Tone.Sampler(loopsObj).toMaster();
    }
  },
  mounted() {
    // Create the steps UI
    this.id = `steps-${this._uid}`;
    this.$nextTick(() => {
      this.sequencer = new Nexus.Sequencer(`#${this.id}`, {
        size: [200, 200],
        mode: 'toggle',
        rows: this.notes.length || this.files.length,
        columns: this.steps,
      });

      const synth = this.createSynth(this.synth.type);

      // Create a looper for each component, every component is connected to the main bpm
      this.looper = new Tone.Sequence(
        (time, index) => {
          for (let i = 0; i < this.sequencer.matrix.pattern.length; i += 1) {
            if (this.sequencer.matrix.pattern[i][index]) {
              if (this.files) {
                this.sampler.triggerAttackRelease(this.notes[i]);
              } else {
                synth.triggerAttackRelease(this.notes[i], this.time);
              }
            }
          }
        },
        Array.from(new Array(this.steps), (val, index) => index),
        '16n',
      );

      this.looper.start();
    });
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
        case 'am':
          synth = new Tone.AMSynth().toMaster();
          break;
        case 'duo':
          synth = new Tone.DuoSynth().toMaster();
          break;
        case 'fm':
          synth = new Tone.FMSynth().toMaster();
          break;
        case 'membrane':
          synth = new Tone.MembraneSynth().toMaster();
          break;
        case 'mono':
          synth = new Tone.MonoSynth().toMaster();
          break;
        case 'pluck':
          synth = new Tone.PluckSynth().toMaster();
          break;
        default:
          break;
      }
      return synth;
    },
  },
};
