// Copies a built site and rewrites root-relative links to relative ones,
// so the prototype can be browsed from any sub-path or file host.
import { cpSync, readdirSync, readFileSync, writeFileSync, statSync, rmSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';

const [src = 'dist', out = 'dist-preview'] = process.argv.slice(2);
rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));

for (const file of walk(out)) {
  if (!/\.(html|css)$/.test(file)) continue;
  const fromDir = dirname(relative(out, file)).split('\\').join('/');
  const rel = (target) => {
    let [path, hash = ''] = target.split('#');
    if (path.endsWith('/')) path += 'index.html';
    let r = posix.relative(fromDir === '.' ? '' : fromDir, path.replace(/^\//, '')) || 'index.html';
    return r + (hash ? '#' + hash : '');
  };
  let s = readFileSync(file, 'utf8');
  s = s.replace(/(href|src)="(\/(?!\/)[^"]*)"/g, (_, a, t) => `${a}="${rel(t)}"`);
  s = s.replace(/url\((\/(?!\/)[^)]+)\)/g, (_, t) => `url(${rel(t)})`);
  writeFileSync(file, s);
}
console.log('Wrote', out);
