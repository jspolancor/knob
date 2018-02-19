<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>

    <GlobalController/>

    <Steps
      :label="'Basic synth'"
      :steps="16"
      :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
      :synth="{ type: 'synth' }"
      :time="0.5"
    >
    </Steps>

    <Steps
      :label="'AM synth'"
      :steps="24"
      :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
      :synth="{ type: 'am' }"
      :time="0.7"
    >
    </Steps>

    <Steps
      :label="'Duo synth'"
      :steps="8"
      :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
      :synth="{ type: 'duo' }"
      :time="1"
    >
    </Steps>

    <Steps
      :label="'FM synth'"
      :steps="16"
      :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
      :synth="{ type: 'fm' }"
      :time="0.5"
    >
    </Steps>

    <Steps
      :label="'membrane synth good for DRUMS'"
      :steps="16"
      :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
      :synth="{ type: 'membrane' }"
      :time="0.8"
    >
    </Steps>

    <Steps
      :label="'MONO synth'"
      :steps="8"
      :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
      :synth="{ type: 'mono' }"
      :time="0.8"
    >
    </Steps>

    <SampleSteps
      :label="'Sampler'"
      :steps="16"
      :files="[
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_1.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_2.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_3.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_4.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_5.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_6.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_7.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_8.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_9.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_10.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_11.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_12.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_13.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_14.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_15.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_16.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_17.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_18.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_19.mp3`,
      `${$versionRoot}/mp3/fx/ss37_Trap_FX_20.mp3`,
      ]"
      :time="2"
    >
    </SampleSteps>


	</div>
</template>
