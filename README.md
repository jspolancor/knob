
![All toguether](https://firebasestorage.googleapis.com/v0/b/steps-f1be4.appspot.com/o/toguether.PNG?alt=media&token=856fea6f-05e3-4ba4-a93e-b7ff69c47e9e)

# What is this?

A declarative step sequencer built with the vue-skeleton + Tone JS + Nexus UI

The goal is to mix a bunch of vue components in a page and declaratively compose sequencers linked to each other.

[Try it!](https://steps-f1be4.firebaseapp.com)

```html
<synthetizer>
  <volume></volume>
  <frequency></frequency>
  <steps></steps>
<synthetizer>
```

There are three types of components:

1. Source components: The sound instances
2. Data manipulation: Controllers to change the source components data (sound)
2. Fancy visuals: Fancy visualization for the source components

# Source components

## GlobalController

Creates and controls the global Tone js instance

Data:

  - bpm: Global bpm

```html
  <GlobalController>
  </GlobalController>
```

## Synth

Tone js Polyphonic Synthetizer

Props:

  - type: Synth type, one of: synth, am, duo, fm, membrane, mono

Data:

  - polySynth: PolySynth instance

```html
  <Synth :type="'am'">
  </Synth>
```

## SampleSteps

A step sequencer to play audio samples

![Steps](https://firebasestorage.googleapis.com/v0/b/steps-f1be4.appspot.com/o/steps.PNG?alt=media&token=9dce7122-6215-4450-99fe-d962d542d85e)

Props:

- label: Label to show
- steps: Ammount of steps for the sequencer
- files: An array of file routes
- time: The duration the sample should play in seconds

```html
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
  </SampleSteps>
```

# Data manipulation

Components that change the source components data

## Knob

A dial control

![knob](https://firebasestorage.googleapis.com/v0/b/steps-f1be4.appspot.com/o/knob.PNG?alt=media&token=7a7bd385-2aa2-4e72-b3cc-7deb742c7fc8)

Props:

  - min: Minimum value
  - max: Maximun value
  - step: The increment or decrement of the control
  - input: Property to change in the parent element
  - label: Label to show

```html
<Knob :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Knob>
```

## Slider

Horizontal slider

![slider](https://firebasestorage.googleapis.com/v0/b/steps-f1be4.appspot.com/o/slider.PNG?alt=media&token=a90ae19c-7e1c-42f4-870f-5096397a5df7)

Props:

  - min: Minimum value
  - max: Maximun value
  - step: The increment or decrement of the control
  - input: Property to change in the parent element
  - label: Label to show

```html
<Slider :min="-10" :max="6" :step="1" :input="'volume'" :label="'Volume'"></Slider>
```

## Number

Draggable number interface

![Number](https://firebasestorage.googleapis.com/v0/b/steps-f1be4.appspot.com/o/number.PNG?alt=media&token=19d9cbf2-1272-4a7f-b40a-18bff3696139)

Props:

  - min: Minimum value
  - max: Maximun value
  - step: The increment or decrement of the control
  - input: Property to change in the parent element
  - label: Label to show

```html
<Number :min="1" :max="300" :step="1" :input="'bpm'" :label="'bpm'"></Number>
```

## Steps

Step sequencer

![Steps](https://firebasestorage.googleapis.com/v0/b/steps-f1be4.appspot.com/o/steps.PNG?alt=media&token=9dce7122-6215-4450-99fe-d962d542d85e)

Props:

- label: Label to show
- steps: Ammount of steps for the sequencer
- notes: An array of notes in octave notation
- time: Duration of the notes in seconds

```html
  <Steps
    :label="'AM synth'"
    :steps="32"
    :notes="['E3', 'G3', 'A3', 'B4', 'D4', 'E4', 'G4', 'A4']"
    :time="0.5">
  </Steps>
```

# Fancy visuals 💃

Sound visualization

## OscVisualization

Fancy oscilloscope visualization

![Osc](https://firebasestorage.googleapis.com/v0/b/steps-f1be4.appspot.com/o/osc.PNG?alt=media&token=0d911ac2-7044-4bbe-9623-58ad9eadedf3)

Props:

  - input: The parent's sound context to connect to the visualization

```html
<OscVisualization :input="'polySynth'"></OscVisualization>
```

# How to use it ??

You always have to create a new tone instance, for that purpose you can use the GlobalController component

```html
  <GlobalController>
  </GlobalController>
```

the user should be able to modify the global bpm, so you can add a data manipulation component inside the GlobalController. The global controller have the bpm property in the data(), you can use it as an input for a data manipulation component

```html
  <GlobalController>
    <Number :min="1" :max="300" :step="1" :input="'bpm'" :label="'bpm'"></Number>
    <!--Knob :min="1" :max="300" :step="1" :input="'bpm'" :label="'bpm'"></Knob>
    <Slider :min="1" :max="300" :step="1" :input="'bpm'" :label="'bpm'"></Slider-->
  </GlobalController>
```

You can also add some fancy visuals inside the GlobalController, the visuals input should be a Tone context, so you can use the global context that's exposed in the GlobalController data()

```html
  <GlobalController>
    <Number :min="1" :max="300" :step="1" :input="'bpm'" :label="'bpm'"></Number>
    <!--Knob :min="1" :max="300" :step="1" :input="'bpm'" :label="'bpm'"></Knob>
    <Slider :min="1" :max="300" :step="1" :input="'bpm'" :label="'bpm'"></Slider-->
    <OscVisualization :input="'context'"></OscVisualization>
  </GlobalController>
```

Now, lets make some sounds. First let's add a Synth component

```html
    <Synth :type="'am'">
    </Synth>
```

Inside the synth component you can manipulate some of the synth properties depending on the synth type, for example in an AM synth you can change the detune value

```html
  <Synth :type="'am'">
    <Knob :min="-3000" :max="3000" :step="1" :input="'detune'" :label="'Detune'"></Knob>
  </Synth>
```

This is a step sequencer, so you need some steps to make sound

```html
  <Synth :type="'am'">
    <Knob :min="-3000" :max="3000" :step="1" :input="'detune'" :label="'Detune'"></Knob>
    <Steps
        :label="'AM synth'"
        :steps="32"
        :notes="['E3', 'G3', 'A3', 'B4', 'D4', 'E4', 'G4', 'A4']"
        :time="0.5">
      </Steps>
  </Synth>
```

Now you can tap on the steps and make some preety sounds 🎶

Add a bunch of step sequencers to a page and have fun!! check out the HomePage of this project.







