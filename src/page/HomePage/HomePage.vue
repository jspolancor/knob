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
        :notes="['E3', 'G3', 'A3', 'B4', 'D4', 'E4', 'G4', 'A4']"
        :time="0.5">
      </Steps>
    </Synth>

    <Synth :type="'fm'">
      <Knob :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Knob>
      <Slider :min="-3000" :max="3000" :step="1" :input="'detune'" :label="'Detune'"></Slider>
      <OscVisualization :input="'polySynth'"></OscVisualization>
      <Steps
        :label="'FM synth'"
        :steps="32"
        :notes="['D4', 'E4', 'F#4', 'A4', 'B5', 'D5', 'E5', 'F#5']"
        :time="0.5">
      </Steps>
    </Synth>

    <Synth :type="'duo'">
      <Knob :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Knob>
      <OscVisualization :input="'polySynth'"></OscVisualization>
      <Steps
        :label="'DUO synth'"
        :steps="16"
        :notes="['G3', 'A3', 'C4', 'D4', 'E4', 'G4', 'A4', 'C5']"
        :time="0.3">
      </Steps>
    </Synth>

    <Synth :type="'membrane'">
      <Knob :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Knob>
      <OscVisualization :input="'polySynth'"></OscVisualization>
      <Steps
        :label="'Membrane synth'"
        :steps="8"
        :notes="['C4', 'D4', 'F4']"
        :time="0.5">
      </Steps>
    </Synth>

    <Synth :type="'mono'">
      <Slider :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Slider>
      <Slider :min="-3000" :max="3000" :step="1" :input="'detune'" :label="'Detune'"></Slider>
      <OscVisualization :input="'polySynth'"></OscVisualization>
      <Steps
        :label="'Mono synth'"
        :steps="16"
        :notes="['E3', 'F#3', 'G#3', 'B4', 'C#4', 'E4', 'F#4', 'G#4']"
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
      :time="8"
    >
      <Knob :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Knob>
      <OscVisualization :input="'sampler'"></OscVisualization>
    </SampleSteps>

	</div>
</template>
