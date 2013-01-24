/*!
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <Carl Calderon> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.
 * ----------------------------------------------------------------------------
 */

module.exports = (function () {

  var key = null,

  decoration = {
    'clear'         : '0',
    'bold'          : '1',
    'italic'        : '3',
    'underscore'    : '4',
    'blink'         : '5',
    'inverse'       : '7',
    'conceal'       : '8',
    'strikethrough' : '9'
  },
  foreground = {
    'black'   : '30',
    'red'     : '31',
    'green'   : '32',
    'yellow'  : '33',
    'blue'    : '34',
    'magenta' : '35',
    'cyan'    : '36',
    'white'   : '37',
    'grey'    : '90'
  },
  background = {
    'black'   : '40',
    'red'     : '41',
    'green'   : '42',
    'yellow'  : '43',
    'blue'    : '44',
    'magenta' : '45',
    'cyan'    : '46',
    'white'   : '47'
  };

  for (key in foreground) {
    String.prototype.__defineGetter__(key, (function (input) {
      return function () {
        this._fgcolor = input;
        return style(this, input, this._bgcolor || null, this._decor || null);
      };
    }(key)));
  }

  for (key in background) {
    String.prototype.__defineGetter__('on' + firstUp(key), (function (input) {
      return function () {
        this._bgcolor  = input;
        return style(this, this._fgcolor || null, input, this._decor || null);
      };
    }(key)));
  }

  for (key in decoration) {
    String.prototype.__defineGetter__('as' + firstUp(key), (function (input) {
      return function () {
        this._decor = input;
        return style(this, this._fgcolor || null, this._bgcolor  || null, input);
      };
    }(key)));
  }

  function firstUp(input) {
    return input.substr(0, 1).toUpperCase() + input.substr(1);
  }

  function style(input, color, bg, style) {

    var result = '', combo  = [];

    if (!!bg) result += '\033[' + background[bg] + 'm';
    if (!!style) combo.push(decoration[style]);
    if (!!color) combo.push(foreground[color]);

    if (combo.length) result += '\033[' + combo.join(';') + 'm';

    return result + input + '\033[' + decoration.clear + 'm';

  }

  return {
    style: style
  }

}());