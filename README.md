# Chords Guru Turbo 100a Deluxe 

<img width="1099" alt="image" src="https://user-images.githubusercontent.com/50331907/216043200-f4c648d2-492c-4910-bedd-8980a23519b6.png">

Web app for simple visualization, audio previewing and MIDI exportation of textual chord progressions.

Live demo: [https://ki.gy/cv](https://ki.gy/cv)

### Features:
- Visualize textual chords / chord progressions.
- Autocomplete from over 800 chords while typing.
- Full chord inversion cycling (of _any_ chord).
- Full chord transposition cycling.
- Export chord progression as a MIDI file (drag-n-drop-ready for DAW).
- Click chord visualization to hear audio preview.
- Humanize the audio preview.
- Instrument selection for the audio preview.
- Octave shift for the audio preview.
- Auto-play/loop the entire progression according to BPM and number of repeats per chord.
- Automatically continue where you left off (per device).
- Save and load chord progressions (**NOTE** that sessions are stored in your browser's cookies, so don't expect them to be stored forever).
- Shortcut keys: 
  - <kbd>Space</kbd> - toggle play
  - <kbd>Q</kbd><kbd>W</kbd><kbd>E</kbd><kbd>R</kbd><kbd>T</kbd><kbd>Y</kbd> etc... - play corresponding chord
  - <kbd>.</kbd> - reveal chords2midi command for whatever is on the screen. Not needed in online demo, where we have an [Export MIDI file] button.

### Also:
- Add or replace instrument from any URL or directory path (e.g. copy-paste any of the *-mp3 directory URLs from [here](https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FatBoy), [here](https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FluidR3_GM) or [here](https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/MusyngKite)) to the instruments list in `cv.js`.

Demo instruments are from [FatBoy](https://web.archive.org/web/20220124174052/https://fatboy.site/) (deprecated) via [midi-js-soundfonts](https://github.com/gleitz/midi-js-soundfonts/)

---

`chords2midi.py` is a bonus utility that can be used to save a chord progression from the web app as MIDI file. It accepts all Chords Guru Turbo 100a Deluxe options as paremeters. Press <kbd>.</kbd> in the web app to reveal full command to save your current work as midi. The [online demo](https://ki.gy/cv) uses a web API for chords2midi.py, so you can directly use the web app's own [Export MIDI file] button instead of using this utility.




