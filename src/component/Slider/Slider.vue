<style src="./Slider.scss" module lang="scss"></style>
<script src="./Slider.js"></script>

<template>
  <div :class="$style.component">
    <div class='slider' :id="id"></div>
    <small>{{ label }}</small>
  </div>
</template>
