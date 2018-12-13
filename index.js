/**
 * @description Know the difference of memomized and non-memomized call with time log.
 * @author yushghimire
 */

module.exports = Function.prototype.memomize = function () {
  var that = this;

  return function() {
    var args = Array.prototype.slice.call(arguments);

    that.cache = that.cache || {};
    
    return that.cache[args] ? that.cache[args] : (that.cache[args] = args[0]);
  }
}
