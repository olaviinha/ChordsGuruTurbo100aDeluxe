# Chords Guru Turbo 100a Deluxe 

<img width="1099" alt="image" src="https://user-images.githubusercontent.com/50331907/216043200-f4c648d2-492c-4910-bedd-8980a23519b6.png">

Web app for simple visualization, audio previewing and MIDI exportation of textual chord progressions.

Live demo: [https://ki.gy/cv](https://ki.gy/cv)

### Features:
- Visualize textual chords / chord progressions.
- Autocomplete from over 800 chords while typing.
- Full chord inversion cycling (of _any_ chord).
- Export chord progression as a MIDI file (drag-n-drop ready for DAW).
- Click chord visualization to hear audio preview.
- Humanize the audio preview.
- Instrument selection for the audio preview.
- Octave shift for the audio preview.
- Auto-play/loop the entire progression according to BPM and number of repeats per chord.
- Automatically continue where you left off (per device).
- Save and load chord progressions (**NOTE** that sessions are stored in your browser's cookies, so don't expect them to be stored forever).

### Also:
- Add or replace instrument from any URL or directory path (e.g. copy-paste any of the *-mp3 directory URLs from [here](https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy), [here](https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FluidR3_GM) or [here](https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/MusyngKite)) to the instruments list in `cv.js`.

Demo instruments are from [FatBoy](https://web.archive.org/web/20220124174052/https://fatboy.site/) (deprecated) via [midi-js-soundfonts](https://github.com/gleitz/midi-js-soundfonts/)

---

`chords2midi.py` can be used to save the chord progression as a MIDI file. It accepts all Chords Guru Turbo 100a Deluxe options as paremeters. Chords need to be given as comma-separated strings of MIDI notes separated by pipes (`--chords "60,63|74,77,79"`). Live demo uses a web API for chords2midi.py.




