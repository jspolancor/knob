<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>

    <GlobalController>
      <Number :min="1" :max="300" :step="1" :input="'bpm'" :label="'bpm'"></Number>
      <OscVisualization :input="'context'"></OscVisualization>
    </GlobalController>

    <Synth :type="'am'">
      <Knob :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Knob>
      <Knob :min="-3000" :max="3000" :step="1" :input="'detune'" :label="'Detune'"></Knob>
      <OscVisualization :input="'polySynth'"></OscVisualization>
      <Steps
        :label="'AM synth'"
        :steps="32"
        :notes="['C4', 'E4', 'G4', 'A4']"
        :time="0.5">
      </Steps>
    </Synth>

    <Synth :type="'fm'">
      <Knob :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Knob>
      <Slider :min="-3000" :max="3000" :step="1" :input="'detune'" :label="'Detune'"></Slider>
      <OscVisualization :input="'polySynth'"></OscVisualization>
      <Steps
        :label="'AM synth'"
        :steps="32"
        :notes="['C4', 'E4', 'G4', 'A4']"
        :time="0.5">
      </Steps>
    </Synth>

    <Synth :type="'duo'">
      <Knob :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Knob>
      <Knob :min="-3000" :max="3000" :step="1" :input="'detune'" :label="'Detune'"></Knob>
      <OscVisualization :input="'polySynth'"></OscVisualization>
      <Steps
        :label="'DUO synth'"
        :steps="16"
        :notes="['C4', 'E4', 'G4', 'A4']"
        :time="0.3">
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
      :time="8"
    >
      <Knob :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Knob>
      <OscVisualization :input="'sampler'"></OscVisualization>
    </SampleSteps>

	</div>
</template>
