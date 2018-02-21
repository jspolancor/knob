<style src="./SampleSteps.scss" module lang="scss"></style>
<script src="./SampleSteps.js"></script>

<template>
  <div :class="$style.component">
    <div :class="{ [$style.controllers] : hasSlot }">
      <slot/>
    </div>
    <div :class="$style.steps">
      <small>{{ label }}</small>
      <div  :id="id"></div>
    </div>
  </div>
</template>
