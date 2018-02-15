import Tone from 'tone';
import Nexus from 'nexusui';

export default {
  name: 'Stepper',
  props: ['input', 'size'],
  data() {
    return {
      note: 0,
      slider: null,
      notes: Array(this.size).fill(0),
      stepsLoop: null,
    };
  },
  created() {
    this.stepsLoop = new Tone.Sequence(
      (time, note) => {
        this.input.value = note;
        this.note = note;
      },
      this.notes,
      '16n',
    );
    this.stepsLoop.start();
  },
  mounted() {
    this.slider = new Nexus.Multislider('#multi', {
      size: [200, 100],
      numberOfSliders: this.size,
      min: 0,
      max: 1119,
      step: 0,
      values: this.notes,
    });

    this.slider.on('change', v => {
      this.notes[v.index] = v.value;
      this.stepsLoop.at(v.index, v.value);
    });
  },
};
