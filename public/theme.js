// Applies a saved theme choice before first paint, then wires the toggle
// and the prototype's "hide placeholder marks" switch. No choice saved means
// the page follows the visitor's system setting.
(function () {
  var root = document.documentElement;
  var get = function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } };
  var set = function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} };
  var saved = get('theme');
  if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  if (get('hide-tbc') === '1') root.classList.add('hide-tbc');

  var current = function () {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  var label = function (btn) {
    var next = current() === 'dark' ? 'light' : 'dark';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    btn.setAttribute('data-mode', current());
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      label(btn);
      btn.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        set('theme', next);
        document.querySelectorAll('[data-theme-toggle]').forEach(label);
      });
    });
    document.querySelectorAll('[data-tbc-toggle]').forEach(function (btn) {
      var sync = function () { btn.setAttribute('aria-pressed', root.classList.contains('hide-tbc') ? 'true' : 'false'); };
      sync();
      btn.addEventListener('click', function () {
        root.classList.toggle('hide-tbc');
        set('hide-tbc', root.classList.contains('hide-tbc') ? '1' : '0');
        sync();
      });
    });
  });
})();
