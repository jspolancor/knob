<style src="./Osc.scss" module lang="scss"></style>
<script src="./Osc.js"></script>

<template slot-scope="oscScope">
  <div @dataChanged="dataChanged">
    <slot/>
  </div>
</template>
