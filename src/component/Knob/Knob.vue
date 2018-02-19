<style src="./Knob.scss" module lang="scss"></style>
<script src="./Knob.js"></script>

<template>
  <div :class="$style.component">
    <div class='knob' :id="id"></div>
    <small>{{ label }}</small>
  </div>
</template>
