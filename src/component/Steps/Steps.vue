<style src="./Steps.scss" module lang="scss"></style>
<script src="./Steps.js"></script>

<template>
  <div :class="$style.component">
    <small>{{ label }}</small>
    <div  :id="id"></div>
    <div :class="$style.controllers">
      <Knob :min="-60" :max="6" :step="1" :input="synthOutput.volume" :label="'volume'"></Knob>
      <div v-if="synth.type === 'synth'">
        <Knob :min="-1000" :max="1000" :step="1" :input="synthOutput.detune" :label="'Detune'"></Knob>
      </div>
      <div v-else-if="synth.type === 'am'">
        <Knob :min="-1000" :max="1000" :step="1" :input="synthOutput.detune" :label="'Detune'"></Knob>        >
        <Knob :min="0" :max="100" :step="1" :input="synthOutput.harmonicity " :label="'Harmonicity '"></Knob>
      </div>
      <div v-else-if="synth.type === 'duo'">        >
        <Knob :min="0" :max="100" :step="1" :input="synthOutput.harmonicity " :label="'Harmonicity '"></Knob>
        <Knob :min="0" :max="100" :step="1" :input="synthOutput.vibratoAmount " :label="'Vibrato'"></Knob>
        <Knob :min="0" :max="500" :step="1" :input="synthOutput.vibratoAmount " :label="'Vibrato rate'"></Knob>
      </div>
      <div v-else-if="synth.type === 'fm'">
        <Knob :min="-1000" :max="1000" :step="1" :input="synthOutput.detune" :label="'Detune'"></Knob>
        <Knob :min="0" :max="100" :step="1" :input="synthOutput.harmonicity " :label="'Harmonicity'"></Knob>
        <Knob :min="0" :max="100" :step="1" :input="synthOutput.modulationIndex " :label="'Modulation Index'"></Knob>
      </div>
      <div v-else-if="synth.type === 'membrane'"></div>
      <div v-else-if="synth.type === 'mono'">
        <Knob :min="-1000" :max="1000" :step="1" :input="synthOutput.detune" :label="'Detune'"></Knob>
      </div>
    </div>
  </div>
</template>
