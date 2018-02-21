import Tone from 'tone';
import Nexus from 'nexusui';
import VueTypes from 'vue-types';
import Knob from '../Knob';

export default {
  name: 'SampleSteps',
  data() {
    return {
      id: null,
      sequencer: null, // UI
      looper: null, // Tone
      stepHeight: 25,
      panVol: {}, // Panning + Volume object
      fileNotes: [],
    };
  },
  props: {
    label: VueTypes.string.isRequired, // Label to show
    steps: VueTypes.integer.isRequired, // number of steps
    files: VueTypes.arrayOf(String).isRequired, // Array of file routes
    time: VueTypes.number.isRequired,
  },
  components: {
    Knob,
  },
  created() {
    const loopsObj = {};
    this.files.forEach((file, index) => {
      loopsObj[`D${index}`] = file;
      this.fileNotes.push(`D${index}`);
    });
    this.sampler = new Tone.Sampler(loopsObj).toMaster();
  },
  mounted() {
    // Create the steps UI
    const stepperWidth = window.innerWidth - 60;
    this.id = `steps-${this._uid}`;
    this.$nextTick(() => {
      this.sequencer = new Nexus.Sequencer(`#${this.id}`, {
        size: [stepperWidth, this.stepHeight * this.files.length],
        mode: 'toggle',
        rows: this.files.length,
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
              step.style.borderBottom = 'solid grey 1px';
            }
          });
          for (let i = 0; i < this.sequencer.matrix.pattern.length; i += 1) {
            if (this.sequencer.matrix.pattern[i][index]) {
              this.sampler.triggerAttackRelease(this.fileNotes[i], this.time);
            }
          }
        },
        Array.from(new Array(this.steps), (val, index) => index),
        '16n',
      );

      this.looper.start();
    });
  },
};
