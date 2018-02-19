import Tone from 'tone';
import Nexus from 'nexusui';
import VueTypes from 'vue-types';
import Knob from '../Knob';

export default {
  name: 'Steps',
  data() {
    return {
      id: null,
      sequencer: null, // UI
      looper: null, // Tone
      stepHeight: 25,
      panVol: {}, // Panning + Volume object
    };
  },
  props: {
    label: VueTypes.string.isRequired, // Label to show
    steps: VueTypes.integer.isRequired, // number of steps
    synth: VueTypes.shape({
      type: VueTypes.oneOf(['synth', 'am', 'duo', 'fm', 'membrane', 'mono']),
    }),
    notes: VueTypes.arrayOf(String), // array of notes  in string notation
    files: VueTypes.arrayOf(String), // Array of file routes
    time: VueTypes.number.isRequired,
  },
  components: {
    Knob
  },
  mounted() {
    // Create the steps UI
    const stepperWidth = window.innerWidth - 40;
    this.id = `steps-${this._uid}`;
    this.$nextTick(() => {
      this.sequencer = new Nexus.Sequencer(`#${this.id}`, {
        size: [stepperWidth, this.stepHeight * this.notes.length],
        mode: 'toggle',
        rows: this.notes.length || this.files.length,
        columns: this.steps,
      });

      const synth = this.createSynth(this.synth.type);
      this.panVol = new Tone.PanVol();
      synth.chain(this.panVol, Tone.Master);
      // Create a looper for each component, every component is connected to the main bpm
      const stepsArr = Array.from(this.sequencer.matrix.ui.interactionTarget.children);
      this.looper = new Tone.Sequence(
        (time, index) => {
          // Loop trough the steps and turn them on or off depending on the current looper note 
          stepsArr.forEach((step, i) => {
            step.style.borderBottom = 'none';
            if((this.steps - i + index) % this.steps === 0){
              step.style.borderBottom = 'solid black 1px';
            }
          });
          for (let i = 0; i < this.sequencer.matrix.pattern.length; i += 1) {
            if (this.sequencer.matrix.pattern[i][index]) {
                // this.sampler.triggerAttackRelease(this.notes[i]);
                synth.triggerAttackRelease(this.notes[i], this.time);
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
        default:
          break;
      }
      return synth;
    },
  },
};
