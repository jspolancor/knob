export default {
  name: 'Knob',
  props: ['min', 'max'],
  data() {
    return {
      value: 0,
      deg: -180,
    };
  },
  computed: {
    rotation() {
      return this.value;
    },
  },
  methods: {
    setValue(e) {
      const centerPoint = {
        x: e.srcElement.clientWidth / 2,
        y: e.srcElement.clientHeight / 2,
      };
      const currentPoint = {
        x: e.x,
        y: e.y,
      };

      this.deg = this.getAngle(centerPoint, currentPoint);
    },
    getAngle(center, p1) {
      const p0 = {
        x: center.x,
        y: center.y - Math.sqrt(Math.abs(p1.x - center.x) * Math.abs(p1.x - center.x)
              + Math.abs(p1.y - center.y) * Math.abs(p1.y - center.y))
      };
      return (2 * Math.atan2(p1.y - p0.y, p1.x - p0.x)) * 180 / Math.PI;
    },
  },
};
