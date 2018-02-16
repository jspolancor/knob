<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>
    <Knob :min="10" :max="300" :step="1" :input="globalBpm"></Knob>
    <div v-for="s in ['synth', 'am', 'duo', 'fm', 'membrane']">
      <Steps
      :label="`${s} synth`"
      :steps="4"
      :notes="['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1']"
      :synth="{ type: s }"
      :time="0.5"
    >
    </Steps>
    </div>
	</div>
</template>
