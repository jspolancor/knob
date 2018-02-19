<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>
    <Knob :min="10" :max="200" :step="1" :input="globalBpm"></Knob>

    <Steps
      :label="'memb synth'"
      :steps="8"
      :notes="['D0']"
      :synth="{ type: 'membrane' }"
      :time="1"
    >
    </Steps>

    <Steps
      :label="'memb synth'"
      :steps="16"
      :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
      :synth="{ type: 'am' }"
      :time="0.1"
    >
    </Steps>


	</div>
</template>
