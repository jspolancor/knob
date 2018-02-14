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
      const angleDeg =
        Math.atan2(currentPoint.y - centerPoint.y, currentPoint.x - centerPoint.x) * 180 / Math.PI;
      // Angle between three points
      const p1 = {
        x: 40,
        y: 40,
      };

      const p2 = {
        x: 40,
        y: 0,
      };

      const p3 = {
        x: e.clientX,
        y: e.clientY,
      };
      console.log(e)

      const p12 = Math.sqrt(Math.pow((p1.x - p2.x),2) + Math.pow((p1.y - p2.y),2));
      const p13 = Math.sqrt(Math.pow((p1.x - p3.x),2) + Math.pow((p1.y - p3.y),2));
      const p23 = Math.sqrt(Math.pow((p2.x - p3.x),2) + Math.pow((p2.y - p3.y),2));

      //angle in radians
      const resultRadian = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13));

      //angle in degrees
      const resultDegree = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13)) * 180 / Math.PI;
      console.log(resultDegree)
      //this.deg = angleDeg;
      this.deg = resultDegree
    },
  },
};
