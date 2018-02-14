<style src="./Knob.scss" module lang="scss"></style>
<script src="./Knob.js"></script>

<template>
  <div
  :class="$style.component"
  @mousemove="setValue($event)"
  :style="{ transform: `rotate(${deg}deg)`}">
  </div>
</template>
