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
      synthOutput: {}, // Synth object
    };
  },
  props: {
    label: VueTypes.string.isRequired, // Label to show
    steps: VueTypes.integer.isRequired, // number of steps
    notes: VueTypes.arrayOf(String).isRequired, // array of notes  in string notation
    time: VueTypes.number.isRequired,
  },
  components: {
    Knob,
  },
  mounted() {
    // Create the steps UI
    const stepperWidth = window.innerWidth - 40;
    this.id = `steps-${this._uid}`;
    this.$nextTick(() => {
      this.sequencer = new Nexus.Sequencer(`#${this.id}`, {
        size: [stepperWidth, this.stepHeight * this.notes.length],
        mode: 'toggle',
        rows: this.notes.length,
        columns: this.steps,
      });
      // Create a looper for each component, every component is connected to the main bpm
      const stepsArr = Array.from(this.sequencer.matrix.ui.interactionTarget.children);
      this.looper = new Tone.Sequence(
        (time, index) => {
          // Loop trough the steps and turn them on or off depending on the current looper note
          stepsArr.forEach((step, i) => {
            step.style.borderBottom = 'none';
            if ((this.steps - i + index) % this.steps === 0) {
              step.style.borderBottom = 'solid black 1px';
            }
          });
          for (let i = 0; i < this.sequencer.matrix.pattern.length; i += 1) {
            if (this.sequencer.matrix.pattern[i][index]) {
              // this.sampler.triggerAttackRelease(this.notes[i]);
              // this.synthOutput.triggerAttackRelease(this.notes[i], this.time);
              this.$parent.synth.triggerAttackRelease(this.notes[i], this.time);
            }
          }
        },
        Array.from(new Array(this.steps), (val, index) => index),
        '16n',
      );

      this.looper.start();
    });
  },
  methods: {},
};
