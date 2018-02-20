<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>

    <GlobalController/>

    <SampleSteps
      :label="'Atmosphere'"
      :steps="16"
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

    <SampleSteps
      :label="'Drums'"
      :steps="16"
      :files="[
      `${$versionRoot}/mp3/idm-kit/K01DHit-01.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-02.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-03.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-04.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-05.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-06.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-07.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-08.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-09.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-10.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-11.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01DHit-12.mp3`,
      ]"
      :time="1"
    >
    </SampleSteps>

    <SampleSteps
      :label="'Bells'"
      :steps="32"
      :files="[
      `${$versionRoot}/mp3/idm-kit/K01Wibiano160G-01.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01Wibiano160G-02.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01Wibiano160G-03.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01Wibiano160G-04.mp3`,
      `${$versionRoot}/mp3/idm-kit/K01Wibiano160G-05.mp3`,
      ]"
      :time="4"
    >
    </SampleSteps>

    <Steps
        :label="'Membrane'"
        :steps="16"
        :synth="{ type: 'membrane' }"
        :notes="['C1', 'C2', 'C3']"
        :time="1">
    </Steps>

    <Steps
        :label="'Membrane'"
        :steps="32"
        :synth="{ type: 'am' }"
        :notes="['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7']"
        :time="1">
    </Steps>

	</div>
</template>
