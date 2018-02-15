import Osc from '../../component/Osc';
import Knob from '../../component/Knob';

export default {
  name: 'HomePage',
  components: {
    Knob,
    Osc,
  },
  data() {
    return {
      output: null,
    };
  },
};
