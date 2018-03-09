!function (t, o) {
  "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof exports ? exports["ferryboat.js"] = o() : t["ferryboat.js"] = o()
}("undefined" != typeof self ? self : this, function () {
  return function (t) {
    function o(s) {
      if (n[s]) return n[s].exports;
      var e = n[s] = {i: s, l: !1, exports: {}};
      return t[s].call(e.exports, e, e.exports, o), e.l = !0, e.exports
    }

    var n = {};
    return o.m = t, o.c = n, o.d = function (t, n, s) {
      o.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: s})
    }, o.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return o.d(n, "a", n), n
    }, o.o = function (t, o) {
      return Object.prototype.hasOwnProperty.call(t, o)
    }, o.p = "", o(o.s = 0)
  }([function (t, o) {
    function n(t) {
      t = t || {}, this.max = isNaN(t.max) ? 1 : t.max, this.stopOnFail = "boolean" != typeof t.stopOnFail || t.stopOnFail, this.taskList = t.taskList || [], this.onSuccess = t.onSuccess || s, this.onFail = t.onFail || s, this.onComplete = t.onComplete || s, this.stopped = !1, this.pointer = 0, this.doingCount = 0, this.successCount = 0, this.failCount = 0, this.completeCount = 0, this.total = this.taskList.length, this._run()
    }

    var s = function () {
    };
    n.prototype._run = function () {
      for (var t = 0; t < this.max; t++) this._next()
    }, n.prototype._next = function () {
      function t() {
        n.completeCount === n.taskList.length ? o() : n._next()
      }

      function o() {
        n.onComplete({successCount: n.successCount, failCount: n.failCount, total: n.total})
      }

      var n = this;
      if (!(this.doingCount >= this.max || this.pointer >= this.taskList.length || this.stopped)) {
        var s = this.pointer++, e = this.taskList[s];
        this.doingCount++, e.fn().then(function (o) {
          this.doingCount--, this.successCount++, this.completeCount++, this.onSuccess({
            result: o,
            current: this.completeCount,
            total: this.total,
            taskIndex: s
          }), t()
        }.bind(this)).catch(function (n) {
          if (this.doingCount--, this.failCount++, this.completeCount++, this.onFail({
              error: n,
              current: this.completeCount,
              total: this.total,
              taskIndex: s
            }), this.stopOnFail) return o(), void(this.stopped = !0);
          t()
        }.bind(this))
      }
    }, n.prototype.add = function (t) {
      this.total = this.taskList.push(t), this.stopped && (this.stopped = !1), this._next()
    }, t.exports = n
  }])
});
//# sourceMappingURL=ferryboat.js.map