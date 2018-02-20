<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>

    <GlobalController>
      <Number :min="1" :max="300" :step="1" :input="'bpm'"></Number>
      <Number :min="0" :max="6" :step="1" :input="'volume'"></Number>
    </GlobalController>

    <Synth :type="'am'">
      <Slider :min="-3000" :max="3000" :step="1" :input="'detune'" :label="'detune'"></Slider>
      <Steps
        :label="'Am C pentatonic'"
        :steps="16"
        :notes="['C4', 'E4', 'G4', 'A4']"
        :time="1">
      </Steps>
    </Synth>

    <Synth :type="'duo'">
      <Slider :min="-1000" :max="1000" :step="1" :input="'harmonicity'" :label="'harmony'"></Slider>
      <Knob :min="-1000" :max="1000" :step="1" :input="'vibratoAmount'" :label="'vibrato'"></Knob>
      <Steps
        :label="'Duo synth'"
        :steps="32"
        :notes="['C4', 'E4', 'G4', 'A4']"
        :time="0.3">
      </Steps>
    </Synth>

    <!--SampleSteps
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
    </SampleSteps-->

	</div>
</template>
