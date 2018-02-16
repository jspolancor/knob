<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>
    <Knob :min="10" :max="300" :step="1" :input="globalBpm"></Knob>

      <Steps
      :label="'memb synth'"
      :steps="8"
      :notes="['D0']"
      :files="['../../../static/mp3/sense.mp3']"
      :synth="{ type: 'membrane' }"
      :time="2"
    >
    </Steps>

	</div>
</template>
