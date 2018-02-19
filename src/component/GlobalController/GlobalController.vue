<style src="./GlobalController.scss" module lang="scss"></style>
<script src="./GlobalController.js"></script>

<template>
  <div :class="$style.component">
    <Knob :min="10" :max="200" :step="1" :input="globalBpm"></Knob>
    <div :class="$style.osc" id="osc"></div>
  </div>
</template>
