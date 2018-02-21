import Tone from 'tone';
import Nexus from 'nexusui';

export default {
  name: 'GlobalController',
  data() {
    return {
      output: null,
      context: Tone.Master,
    };
  },
  created() {
    Nexus.context = Tone.context;
    Tone.Transport.start();
    Tone.Transport.bpm.value = 1;
  },
  methods: {
    dataChanged(v, input) {
      if (['bpm'].find(prop => prop === input)) Tone.Transport[input].value = v;
    },
  },
};
