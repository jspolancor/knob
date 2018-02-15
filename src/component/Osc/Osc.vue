<style src="./Osc.scss" module lang="scss"></style>
<script src="./Osc.js"></script>

<template>
  <div>
    <Knob :min="1" :max="1199" :step="1" :input="frequencyOut"></Knob>
    <Knob :min="-1200" :max="1200" :step="1" :input="detuneOut"></Knob>
  </div>
</template>
