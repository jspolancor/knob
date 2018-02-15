<style src="./Osc.scss" module lang="scss"></style>
<script src="./Osc.js"></script>

<template>
  <div>
    <Knob :min="0" :max="500" :step="1" :input="frequencyOut"></Knob>
    <Knob :min="-40" :max="100" :step="1" :input="volumeOut"></Knob>
  </div>
</template>
