<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>

    <GlobalController/>

    <Steps
      :label="'duo synth'"
      :steps="16"
      :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
      :synth="{ type: 'fm' }"
      :time="0.1"
    >
    </Steps>

    <!--Steps
      :label="'1 row sample'"
      :steps="16"
      :files="['../../../static/mp3/sense.mp3']"
      :time="0.1"
    >
    </Steps-->


	</div>
</template>
