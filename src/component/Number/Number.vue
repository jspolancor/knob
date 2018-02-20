<style src="./Number.scss" module lang="scss"></style>
<script src="./Number.js"></script>

<template>
  <div :class="$style.component">
    <div class='number' :id="id"></div>
    <small>{{ label }}</small>
  </div>
</template>
