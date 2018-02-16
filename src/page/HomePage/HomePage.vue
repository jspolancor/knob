<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>
    <Knob :min="10" :max="300" :step="1" :input="globalBpm"></Knob>
    <Steps
      :label="'Second steps - just one note'"
      :steps="4"
      :notes="['C1', 'C2', 'C3']"
      :synth="{ type: 'synth' }"
      :time="0.5"
    >
    </Steps>
    <Steps
      :label="'Second steps - just one note'"
      :steps="8"
      :notes="['C3', 'C4', 'C5']"
      :synth="{ type: 'synth' }"
      :time="0.5"
    >
    </Steps>
    <Steps
      :label="'Second steps - just one note'"
      :steps="8"
      :notes="['D3', 'D4', 'D5']"
      :synth="{ type: 'synth' }"
      :time="2"
    >
    </Steps>
    <!--Osc :controllers="{
        volumen: 'knob',
        velocity: 'stepper',
        tone: 'knob'
    }">
    </Osc-->
    <!--Steps
      :label="'Second steps - just one note'"
      :steps="8"
      :notes="['C1', 'C2', 'C3', 'C4']"
      :synth="{ type: 'synth' }"
      :time="0.5"
    >
    </Steps>
    <Steps
      :label="'Second steps - just one note'"
      :steps="8"
      :notes="['C1', 'C2', 'Bbb', 'C#4']"
      :synth="{ type: 'polysynth' }"
      :time="0.5"
    >
    </Steps>
    <Steps
      :label="'Second steps - just one note'"
      :steps="8"
      :notes="['C1', 'C2', 'C3', 'C4']"
      :synth="{ type: 'synth' }"
      :time="0.5"
    >
    </Steps-->
	</div>
</template>
