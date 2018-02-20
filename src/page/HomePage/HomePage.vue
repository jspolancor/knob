<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>

    <GlobalController>
      <Number :min="1" :max="300" :step="1" :input="'bpm'"></Number>
    </GlobalController>

    <Synth :type="'am'">
      <Knob :min="-3000" :max="3000" :step="1" :input="'detune'"></Knob>
      <Steps
        :label="'Am base'"
        :steps="32"
        :notes="['C1', 'C2', 'C3']"
        :time="1">
      </Steps>
      <Steps
        :label="'Am fantasy'"
        :steps="8"
        :notes="['C4', 'C5', 'C6']"
        :time="0.1">
      </Steps>
    </Synth>

    <SampleSteps
      :label="'Atmosphere'"
      :steps="48"
      :files="[
      `${$versionRoot}/mp3/idm-kit/K01Atmos-01.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01Atmos-02.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01Atmos-03.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01Atmos-04.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01Atmos-05.mp3`,
      ]"
      :time="10"
    >
    </SampleSteps>

	</div>
</template>
