<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>
    <Knob :min="10" :max="300" :step="1" :input="globalBpm"></Knob>
    <small>{{ globalBpm.value }}</small>
    <Osc :controllers="{
        volumen: 'knob',
        velocity: 'stepper',
        tone: 'knob'
    }">
    </Osc>
	</div>
</template>
