var stil = require('./lib/stil'),

foregrounds = [
  'black',  'red',   'green',
  'yellow', 'blue',  'magenta',
  'cyan',   'white', 'grey'
],

backgrounds = [
  null,        'onBlack',  'onRed',
  'onGreen',   'onYellow', 'onBlue',
  'onMagenta', 'onCyan',   'onWhite'
],

decorations = [
  'asClear',      'asBold',  'asItalic',
  'asUnderscore', 'asBlink', 'asInverse',
  'asConceal',    'asStrikethrough'
],

i = 0, j = 0, stamp = ' Aa Bb Cc Dd ';

// ============================================================================
// TABLES
// ============================================================================

// backgrounds
process.stdout.write('        ');
for (i = 0; i < backgrounds.length; i++) {
  var rest = stamp.length;
  if (backgrounds[i]) {
    rest -= Math.min(rest, backgrounds[i].length);
    process.stdout.write(backgrounds[i]);
  }
  while (rest--) process.stdout.write(' ');
}
process.stdout.write('\n');
for (i = 0; i < foregrounds.length; i++) {
  process.stdout.write(foregrounds[i] + '\t');
  for (j = 0; j < backgrounds.length; j++) {
    if (backgrounds[j])
      process.stdout.write(stamp[foregrounds[i]][backgrounds[j]]);
    else
      process.stdout.write(stamp[foregrounds[i]]);
  }
  process.stdout.write('\n');
}
process.stdout.write('\n');

// decorations
process.stdout.write('        ');
for (i = 0; i < decorations.length; i++) {
  var rest = stamp.length;
  if (decorations[i]) {
    rest -= Math.min(rest, decorations[i].length);
    process.stdout.write(decorations[i]);
  }
  while (rest--) process.stdout.write(' ');
}
process.stdout.write('\n');
for (i = 0; i < foregrounds.length; i++) {
  process.stdout.write(foregrounds[i] + '\t');
  for (j = 0; j < decorations.length; j++) {
    if (decorations[j])
      process.stdout.write(stamp[foregrounds[i]][decorations[j]]);
    else
      process.stdout.write(stamp[foregrounds[i]]);
  }
  process.stdout.write('\n');
}

// ============================================================================
// COMBOS
// ============================================================================
process.stdout.write('\n');

console.log('ERROR!'.black.onRed);
console.log('WARNING!'.black.onYellow);
console.log('ocean'.cyan.onBlue);
console.log('hell'.magenta.onRed);
console.log('//////'.black.onWhite);
console.log('highfive!'.asBlink + ' _o/ \\o_'.asBold);
