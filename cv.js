
// Defaults
let humanization = 60;  // Each note starts to play within this many milliseconds
let bpm = 120;          // Default BPM
let loop_bar = 1;       // Default count how many times each chord plays/repeats when Play active
let default_octave = 3; // Default octave

// Instrument paths (Any URL or directory paths that contain C3.mp3, Db3.mp3, etc.)
let instruments = [
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/acoustic_grand_piano-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/accordion-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/lead_6_voice-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/pad_1_new_age-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/pad_4_choir-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/synth_strings_2-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/violin-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/banjo-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/choir_aahs-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/cello-mp3',
  'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/church_organ-mp3',
];

// White keys (midi note, octave, txt note, actual note)
const nw = [
  [60, 3, "c", "C"],
  [62, 3, "d", "D"],
  [64, 3, "e", "E"],
  [65, 3, "f", "F"],
  [67, 3, "g", "G"],
  [69, 3, "a", "A"],
  [71, 3, "b", "B"],
  [72, 4, "c", "C"],
  [74, 4, "d", "D"],
  [76, 4, "e", "E"],
  [77, 4, "f", "F"],
  [79, 4, "g", "G"],
  [81, 4, "a", "A"],
  [83, 4, "b", "B"],
  [84, 5, "c", "C"],
  [86, 5, "d", "D"],
  [88, 5, "e", "E"],
  [89, 5, "f", "F"],
  [91, 5, "g", "G"],
  [93, 5, "a", "A"],
  [95, 5, "b", "B"],
  [96, 6, "c", "C"],
];

// Black keys (midi note, octave, txt note, actual note)
const nb = [
  [61, 3, "db", "C#/Db"],
  [63, 3, "eb", "D#/Eb"],
  [66, 3, "gb", "F#/Gb"],
  [68, 3, "ab", "G#/Ab"],
  [70, 3, "bb", "A#/Bb"],
  [73, 4, "db", "C#/Db"],
  [75, 4, "eb", "D#/Eb"],
  [78, 4, "gb", "F#/Gb"],
  [80, 4, "ab", "G#/Ab"],
  [82, 4, "bb", "A#/Bb"],
  [85, 5, "db", "C#/Db"],
  [87, 5, "eb", "D#/Eb"],
  [90, 5, "gb", "F#/Gb"],
  [92, 5, "ab", "G#/Ab"],
  [94, 5, "bb", "A#/Bb"],
];

// Chord suffixes (name, lowest key, all keys, is major)
const chords = [
    ["major", 0, [0, 4, 7],true],
    ["m", 1, [0, 3, 7],false],
    ["dim", 2, [0, 3, 6],true],
    ["dim7", 3, [0, 3, 6, 9],true],
    ["sus2", 4, [0, 2, 7],true],
    ["sus4", 5, [0, 5, 7],true],
    ["7sus4", 6, [0, 5, 7, 10],true],
    ["aug", 7, [0, 4, 8],true],
    ["aug7", 8, [0, 4, 8, 10],true],
    ["aug9", 9, [0, 4, 8, 10, 14],true],
    ["5", 10, [0, 7],true],
    ["6", 11, [0, 4, 7, 9],true],
    ["7", 12, [0, 4, 7, 10],true],
    ["9", 13, [0, 4, 7, 10, 14],true],
    ["11", 14, [0, 4, 7, 10, 14, 17],true],
    ["13", 15, [0, 4, 7, 10, 14, 17, 21],true],
    ["69", 16, [0, 4, 7, 9, 14],true],
    ["6add9", 16, [0, 4, 7, 9, 14],true], //mask for 69
    ["7b5", 17, [0, 4, 6, 10],true],
    ["9b5", 18, [0, 4, 6, 10, 14],true],
    ["7b9", 19, [0, 4, 7, 10, 13],true],
    ["7sharp9", 20, [0, 4, 7, 10, 15],true],
    ["7b5b9", 21, [0, 4, 6, 10, 13],true],
    ["7sharp5b9", 22, [0, 4, 8, 10, 13],true],
    ["7b5sharp9", 23, [0, 4, 6, 10, 15],true],
    ["7sharp5sharp9", 24, [0, 4, 8, 10, 15],true],
    ["9sharp11", 25, [0, 4, 7, 10, 14, 18],true],
    ["maj7", 26, [0, 4, 7, 11],true],
    ["maj9", 27, [0, 4, 7, 11, 14],true],
    ["maj11", 28, [0, 4, 7, 11, 14, 17],true],
    ["maj13", 29, [0, 4, 7, 11, 14, 21],true],
    ["maj7b5", 30, [0, 4, 6, 11],true],
    ["maj7sharp5", 31, [0, 4, 8, 11],true],
    ["m6", 32, [0, 3, 7, 9],false],
    ["m69", 33, [0, 3, 7, 9, 14],false],
    ["m7", 34, [0, 3, 7, 10],false],
    ["m7b5", 35, [0, 3, 6, 10],false],
    ["m9", 36, [0, 3, 7, 10, 14],false],
    ["m11", 37, [0, 3, 7, 10, 14, 17],false],
    ["mmaj7", 38, [0, 3, 7, 11],false],
    ["mmaj7b5", 39, [0, 3, 6, 11],false],
    ["mmaj9", 40, [0, 3, 7, 11, 14],false],
    ["mmaj11", 41, [0, 3, 7, 11, 14, 17],false],
    ["add9", 42, [0, 4, 7, 14],true],
    ["madd9", 43, [0, 3, 7, 14],false],
    ["13sus4", 44, [0, 5, 7, 10, 14, 17],false]
];

// Notes
const notes_list = ['C','D','E','F','G','A','B','C#','D#','E#','F#','G#','A#','Db','Eb','Gb','Ab','Bb'];

let playing = false;
let zoom = 1;
let octave_shift = 0;
let input_chords, player, delayed_chord_change_actions;
let delayers = [];
let audiofiles = [];
let as = [];

// Get raw data from some known URLs
// I haven't even tested these laoh
instruments.forEach((inst, i) => {
  if(inst.indexOf('github.com') > -1){
    instruments[i] = inst.replace('github.com', 'raw.githubusercontent.com').replace('tree/', '');
  }
  if(inst.indexOf('dropbox.com') > -1){
    instruments[i] = inst.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('dl=0', 'raw=1').replace('dl=1', 'raw=1');
  }
});

// Clear warning messages (about missing mp3 files)
function clear_fails() {
  $('.warn').remove();
}

// Display warning message (about missing mp3 files)
function fail(el, msg) {
  if(!$(el).find('.warn').length){
    $(el).append(`<div class="warn"></div>`);
  }
  $(el).find('.warn').append(`<div>${msg}</div>`);
}

// Cycle values of a button
function cycle_values(el, int=false){
  let val = $(el).find('.value').html();
  let vals = $(el).data('values').split(',');
  let total = vals.length;
  let r = vals[0];
  vals.forEach((test, i) => {
    if(val == test && i < total-1) r = vals[i+1];
  });
  $(el).find('.value').html(r);
  return int ? parseInt(r) : r;
}

// Bind clicks
function bind_clicks() {

  let css_fadeout = null;
  let css_reset = null;
  as = new Array();

  // Click keyboard
  $('.kb').each(function(i){

    as[i] = new Array();
    let play_notes = $(this).data('audio').split(' ');
    let oct_shift = parseInt($(this).data('octave-shift'));

    // Apply global octave shift
    if(oct_shift != 0){
      play_notes.forEach((pn, i) => {
        let oct = parseInt(pn[pn.length-1]);
        play_notes[i] = pn.replace(oct, oct+oct_shift);
      });
    }

    // Inversion cycle buttons
    $(this).find('button').unbind().click(function(){
      let parent = $(this).parent().parent();
      cycle_inversion(parent, parent.data('midi').split(' '), $(this).hasClass('down') ? 'down' : 'up');
    });

    // Click keyboard
    $(this).find('.clickable').unbind().click(function(){
      // Humanize?
      let humanize = $('#humanize').is(':checked');

      // Clear warnings
      clear_fails();

      // CSS
      if(css_fadeout) clearTimeout(css_fadeout);
      if(css_reset) clearTimeout(css_reset);
      $(this).parent().removeClass('playing fadeout');
      $(this).parent().addClass('playing');
      css_fadeout = setTimeout(() => {
        $(this).parent().addClass('fadeout');
      }, 100);
      css_reset = setTimeout(() => {
        $(this).parent().removeClass('playing fadeout');
      }, 3000);

      // Stop previous plays
      $('audio').each(function(){
        $(this)[0].pause();
        $(this)[0].currentTime = 0;
      });

      // Play audio
      delayers[delayers.length+1] = setTimeout(() => {
        play_notes.forEach((note, i) => {
          let a = 'audio#sound-'+note;
          if($(a).length){
            $(a).addClass('playing');
            if(humanize && i > 0){
              delayers[delayers.length+1] = setTimeout(() => {
                $(a)[0].currentTime = 0;
                $(a)[0].volume = 1;
                $(a)[0].play();
              }, Math.floor(Math.random() * humanization));
            } else {
              $(a)[0].currentTime = 0;
              $(a)[0].volume = 1;
              $(a)[0].play();
            }
          } else {
            fail($(this), '! Audio missing for '+note);
          }
        });
      }, 2);

      });
  });

  // Click Play button
  $('#play').unbind().click(function(){
    if($(this).is(':checked')){
      loop_chords();
      playing = true;
    } else {
      if(player) clearInterval(player);
      playing = false;
    }
  });

  // Click a checkbox, blur after click to enable Play spacebar
  $('input[type="checkbox"]').click(function(){
    $(this).blur();
  });

  // Click BPM
  $('#bpm').unbind().click(function(){
    if(player) clearInterval(player);
    bpm = cycle_values('#bpm');
    Cookies.set('bpm', bpm);
    if(playing) loop_chords();
    $(this).blur();
  });

  // Click Bars per Chord
  $('#bpc').unbind().click(function(){
    if(player) clearInterval(player);
    loop_bar = cycle_values('#bpc');
    Cookies.set('bpc', loop_bar);
    if(playing) loop_chords();
    $(this).blur();
  });

  // Click octave
  $('#octave').unbind().click(function(){
    change_octave(cycle_values('#octave'));
    $(this).blur();
    bind_clicks();
  });

}

// Change octave
function change_octave(oct){
  $('.kb').each(function(){
    $(this).data('octave-shift', oct);
  });
  Cookies.set('octave_shift', oct);
}

// Play function
function loop_chords(){

  // Stop all that is playing
  $('.kb').removeClass('playing');
  if(player) clearInterval(player);
  delayers.forEach((delayer) => {
    clearTimeout(delayer);
    clearInterval(delayer);
  });

  let beats = 4; // Beats per bar
  let last_bar = $('.kb').length;
  len = 60/bpm*beats*1000;
  let i = 0;

  // Programmatically click elements
  $('.kb').eq(i).find('.clickable').click();
  if(loop_bar > 1){
    loop_counter = 1;
    for(ii=1;ii<loop_bar;ii++){
      delayers[delayers.length+1] = setTimeout(() => {
        $('.kb').eq(i).find('.clickable').click();
        loop_counter++;
        if(loop_counter==loop_bar) i++;
      }, len*ii);
    }
  } else {
    i++;
  }

  // Repeat same clicks on interval
  player = setInterval(() => {
    if(i==last_bar) i = 0;
    $('.kb').eq(i).find('.clickable').click();
    if(loop_bar > 1){
      loop_counter = 1;
      for(ii=1;ii<loop_bar;ii++){
        delayers[delayers.length+1] = setTimeout(() => {
          $('.kb').eq(i).find('.clickable').click();
          loop_counter++;
          if(loop_counter==loop_bar) i++;
        }, len*ii);
      }
    } else {
      i++;
    }
  }, len*loop_bar);

}

// Generate list of all chords (currently not used anywhere)
function generate_chord_list(html=false) {
  let chord_list = []
  chords.forEach((c) => {
    nw.forEach((n) => { chord_list.push(n[3]+c[0]); });
    nb.forEach((n) => { chord_list.push(n[3]+c[0]); });
  });
  if(html===false){
    return chord_list;
  } else {
    let html = `<select class="chord_list">`;
    html += `<option>Add new</option>`;
    chord_list.forEach((c) => { html += `<option value="${c}">${c}</option>`; });
    html += `</select>`;
    return html;
  }
}

// Load instrument from select menu
function load_instrument(instrument) {
  let octaves = [1, 2, 3, 4, 5, 6, 7]; // Octaves to load
  $('audio').remove();
  notes_list.forEach((note) => { 
    if(note.indexOf('#') == -1) {
      octaves.forEach((oct) => {
        $('body').prepend(`<audio id="sound-${note}${oct}" src="${instrument}/${note}${oct}.mp3" preload="auto">`);
      });
    } 
  });
}

// Midi note (int) to regular note ("C4")
function midi_to_note(midi_note) {
  let notes = nw.concat(nb);
  matches = notes.filter(note => midi_note==note[0])[0];
  [_, oct, __, note_d] = matches;
  note_d = note_d.indexOf('/') > -1 ? note_d.split('/')[1] : note_d;
  return note_d+oct;

}

// Regular note ("C4") to midi note (int)
function note_to_midi(note) {
  let found_midi = null;
  nw.forEach((n) => {
    [midi, oct, _, note_d] = n;
    if(note_d+oct==note) found_midi = midi;
  });
  nb.forEach((n) => { 
    [midi, oct, _, note_d] = n;
    [n1, n2] = note_d.split('/');
    if(n1+oct==note || n2+oct==note) found_midi = midi;
  });
  return found_midi;
}

// Update keys of an existing keyboard
function update_keys(el, notes) {
  el.find('.key').removeClass('down');

  // Highlight pressed note
  notes.forEach((note, i) => {
    el.find(`.key[data-midi="${note}"]`).addClass('down');
  });

  // Update which audio files this keyboard plays
  new_audio = [];
  notes.forEach(n => new_audio.push(midi_to_note(n)));

  // Store those to keyboard data attributes
  el.data('midi', notes.join(' '));
  el.data('audio', new_audio.join(' '));
}

// Cycle chord inversion up or down
function cycle_inversion(el, notes, direction='down') {

  // Limit inversion to lowest and highest visible midi note
  let [min, max] = [60, 96];

  // If chord extends 1 octave, inverse 2 octaves
  let lowest_chord_note = Math.min(...notes);
  let highest_chord_note = Math.max(...notes);
  let change_scale = highest_chord_note - lowest_chord_note > 12 ? 24 : 12;

  // Inversion direction
  let inversion = parseInt(el.find('.tools').data('inversion')) + (direction=='down' ? -1 : 1);

  // Do it
  notes.forEach((note, i) => { notes[i] = parseInt(note); });
  let change = direction=='down' ? highest_chord_note : lowest_chord_note;
  notes.forEach((note, i) => {
    if(note == change){
      notes[i] = note + (direction=='down' ? -change_scale : change_scale);
    }
  });
  if(Math.min(...notes) < min || Math.max(...notes) > max) return;

  el.find('.tools').data('inversion', inversion);

  // Button styles
  el.find('.tools, .tools button').removeClass('active');
  if(inversion > 0){
    el.find('.tools, .up').addClass('active');
  } else if (inversion < 0){
    el.find('.tools, .down').addClass('active');
  }

  update_keys(el, notes);
  bind_clicks();
}

// Fix CSS styling, notably keyboard sizes when DOM or window changes
function fix_style(current_zoom) {

  let cols = 2;                           // Default cols
  if($(window).width() < 768) cols = 1;   // Mobile cols
  if($(window).width() > 1400) cols = 3;  // Large screen cols

  let w = $('body').width();
  let margin = 20;
  let col = w/cols - margin;
  let kb_w = $('.kb').width();
  let zoom = col/kb_w;

  if(zoom != current_zoom){  
    $('.kb').css('zoom', zoom);
  }

  $('.kb').css('margin', '');
  $(`.kb:nth-child(${cols}n)`).css('margin-right', 0);

  return zoom;
}

$(document).ready(function(){

  // Check cookies for previous session
  let pre_humanize = Cookies.get('humanize')
  let pre_input = Cookies.get('last_input');
  let pre_bpm = Cookies.get('bpm');
  let pre_bpc = Cookies.get('bpc');
  let pre_instrument = Cookies.get('instrument');
  let pre_octave_shift = Cookies.get('octave_shift');

  // Create white keys and audiofile filenaming scheme
  nw.forEach((k, i) => {
    [midi, oct, note, note_d] = k;
    $(`.tpl .clickable`).append(`<div class="white key" data-note="${note_d}${oct}" data-midi="${midi}"></div>`);
    // audiofiles.push(note_d+oct);
  });

  // Create black keys and audiofile filenaming scheme
  nb.forEach((k) => {
    [midi, oct, note, note_d] = k;
    [note1, note2] = note_d.split('/');
    let parent = midi-1;
    $('.tpl').find(`.key[data-midi="${parent}"]`).append(`<div class="black key" data-note="${note2}${oct}" data-midi="${midi}" id="k${midi}"></div>`);
    // audiofiles.push(note2+oct);
  });

  $('.tpl .tools').append('<button class="down"><i class="fas fa-arrow-down"></i></button><button class="up"><i class="fas fa-arrow-up"></i></button>');

  // Create instrument menu
  instruments.forEach((instrument) => {
    let path = instrument.split('/');
    let name = path[path.length-1].replace('-mp3', '').replaceAll('_', ' ');
    $('select#instrument').append(`<option value="${instrument}">${name}</option>`);
  });

  // Create a keyboard template
  const tpl = $('.tpl').clone().html();

  // Bind spacebar as play/stop toggle
  $(document).keyup(function(e){
    if(!$('#chords:focus').length && e.code == 'Space'){
      $('#play').click();
    }
  });

  // Change input field
  let input_chords = [];
  $('#chords').keyup(function(){

    // Get octave shift
    octave_shift = parseInt($('#octave').find('.value').text());

    // Trim input field
    $(this).val($('#chords').val().replace('  ', ' '));

    // Stop things that should not be happening rn
    if(player) clearInterval(player);
    if(delayed_chord_change_actions) clearInterval(delayed_chord_change_actions);

    // Split input to chords
    let input = $(this).val().replaceAll('  ', ' ');

    // Set to cookie
    Cookies.set('last_input', input);

    // Process input
    input_chords = input.split(' ');
    $('.kb').addClass('obsolete');
    $('.hr').remove();
    input_chords.forEach((input_chord, i) => {

      let kb_id = `row${i}`;

      // Remove hötö
      input_chord = input_chord.replace('-', '').replace(',', '').replace('(', '').replace(')', '');

      // TODO:
      // Turn --- into separator
      
      // Skip already if it's just drivelpoop
      if(input_chord=='' || (input_chord.length == 1 && !/^[a-zA-Z]+$/.test(input_chord))) return;

      // Determine whether root note is 1 or 2 chars
      let test = input_chord[1] == '#' || input_chord[1] == 'b' ? input_chord[0]+input_chord[1] : input_chord[0] ;
      let start_midi = $(`[data-note="${test+default_octave}"]`).data('midi') || $(`[data-note2="${test+default_octave}"]`).data('midi');

      // Skip already if not included in notes list
      if(!notes_list.includes(test)) return;

      // Default chord to major
      if(input_chord.length == 1 || (input_chord.length == 2 && (input_chord[1] == '#' || input_chord[1] == 'b'))) input_chord = input_chord+'major';

      // Draw keyboard and fetch notes for each chord that exists in user input
      let notes = [];
      chords.forEach((list_chord) => {
        [name, index, intervals, is_major] = list_chord;
        let full_chord = input_chord.replaceAll('#', 'sharp').replaceAll('/', '');
        if(test+name == full_chord){
          $(`.${kb_id}`).removeClass('obsolete');
          intervals.forEach((interval) => {
            notes.push(start_midi+interval);
          });
          // Update keyboard if it exists and chord changed
          if($(`.${kb_id}`).length){
            let kb_chord = $(`.${kb_id}`).data('chord');
            if(kb_chord != full_chord) {
              update_keys($(`.${kb_id}`), notes);
              $(`.${kb_id}`).data('chord', full_chord);
            }
          } else {
            $('.kbs').append(`<div class="kb ${kb_id}" data-chord="${full_chord}" data-octave-shift="${octave_shift}" style="zoom:${zoom};">${tpl}</div>`);
            $(`.${kb_id}`).data('chord', full_chord);
            update_keys($(`.${kb_id}`), notes);
          }
        }

      });

      // Remove obsolete keyboards
      $('.obsolete').remove();

    });

    // Fix layout
    zoom = fix_style(zoom);

    // Bind keyboard click and possibly resume play
    delayed_chord_change_actions = setTimeout(() => {
      bind_clicks();
      if(playing) loop_chords();
    }, 500);

  });

  $('select#instrument').change(function(){
    load_instrument($(this).val());
    $(this).blur();
  });

  // Preload instrument
  load_instrument(pre_instrument ? pre_instrument : instruments[0]);

  // Store & restore sessions using cookies
  $('select#instrument').change(function(){
    Cookies.set('instrument', $(this).val());
  });
  $('#humanize').change(function(){
    Cookies.set('humanize', $('#humanize').is(':checked'));
  });
  if(pre_humanize == 'true') $('#humanize').prop('checked', true);
  if(pre_input) $('#chords').val(pre_input).trigger('keyup');
  if(pre_bpm) {
    bpm = pre_bpm;
    $('#bpm').find('.value').html(pre_bpm);
  }
  if(pre_bpc) {
    loop_bar = pre_bpc;
    $('#bpc').find('.value').html(loop_bar);
  }
  if(pre_instrument) {
    $('#instrument').val(pre_instrument);
  }
  if(pre_octave_shift) {
    octave_shift = parseInt(pre_octave_shift);
    $('#octave').find('.value').html(octave_shift);
    change_octave(octave_shift);
  }

  // Bind keyboard click and possibly resume play
  delayed_chord_change_actions = setTimeout(() => {
    bind_clicks();
    zoom = fix_style(zoom);
    $('#chords').trigger('keyup');
  }, 500);

});

// Resize window
let resize_delayer = null;
$(window).resize(function(){
  $('.kb').addClass('resizing');
  if(resize_delayer) clearTimeout(resize_delayer);
  resize_delayer = setTimeout(() => {
    zoom = fix_style(zoom);
    $('.kb').removeClass('resizing');
  }, 500);
});
