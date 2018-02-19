<style src="./Steps.scss" module lang="scss"></style>
<script src="./Steps.js"></script>

<template>
  <div :class="$style.component">
    <small>{{ label }}</small>
    <div  :id="id"></div>
    <div>
      <Knob :min="-60" :max="6" :step="1" :input="panVol.volume"></Knob>
      <Knob :min="-1" :max="1" :step="0.1" :input="panVol.pan"></Knob>
    </div>
  </div>
</template>
