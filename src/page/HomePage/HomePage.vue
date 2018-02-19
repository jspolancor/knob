<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>

    <GlobalController/>

    <!--Steps
      :label="'duo synth'"
      :steps="16"
      :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
      :synth="{ type: 'fm' }"
      :time="0.1"
    >
    </Steps-->

    <SampleSteps
      :label="'1 row sample'"
      :steps="16"
      :files="[
      '../../../static/mp3/fx/ss37_Trap_FX_1.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_2.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_3.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_4.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_5.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_6.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_7.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_8.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_9.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_10.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_11.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_12.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_13.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_14.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_15.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_16.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_17.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_18.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_19.mp3',
      '../../../static/mp3/fx/ss37_Trap_FX_20.mp3',
      ]"
      :time="2"
    >
    </SampleSteps>


	</div>
</template>
