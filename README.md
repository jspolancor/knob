<p align="center">
    <img src="https://raw.githubusercontent.com/wiki/hjeti/vue-skeleton/asset/image/vue-skeleton.png?v=2" alt="Vue skeleton" />
</p>

Declarative Step sequencer using vue-skeleton + Tone JS + Nexus UI

### components

#### GlobalController

Modifies the global BPM and shows a fancy visualization

```html
<GlobalController/>
```

#### Steps

Synthesis using tone js synthetizers and a step sequencer that triggers the notes

##### props:

1. __label__: Label to show
2. __steps__: Ammount of steps for the step sequencer
3. __notes__: An array of notes in octave scale
4. __synth__: an object with the type of the synth, avaliable types are:

  - synth
  - am
  - duo
  - fm
  - membrane
  - mono

5. __time__: The time a note should play in miliseconds

```html
<Steps
  :label="'Basic synth'"
  :steps="16"
  :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
  :synth="{ type: 'synth' }"
  :time="0.5"
></Steps>
```

#### SampleSteps

Sampler step sequencer

##### props:

1. __label__: Label to show
2. __steps__: Ammount of steps for the step sequencer
3. __files__: An array of soundfiles
4. __time__: The time a note should play in miliseconds

```html
<SampleSteps
  :label="'Sampler'"
  :steps="16"
  :files="[
  `${$versionRoot}/mp3/fx/ss37_Trap_FX_1.mp3`,
  `${$versionRoot}/mp3/fx/ss37_Trap_FX_2.mp3`,
  ]"
  :time="2"
>
</SampleSteps>
```

#### Just put all togueter in a page and enjoy!

```html
<GlobalController/>

<Steps
  :label="'Basic synth'"
  :steps="16"
  :notes="['C1', 'C2', 'C3', 'D0', 'E4']"
  :synth="{ type: 'am' }"
  :time="1"
></Steps>

<SampleSteps
  :label="'Sampler'"
  :steps="16"
  :files="[
  `${$versionRoot}/mp3/fx/ss37_Trap_FX_1.mp3`,
  `${$versionRoot}/mp3/fx/ss37_Trap_FX_2.mp3`,
  ]"
  :time="2"
>
</SampleSteps>
```


