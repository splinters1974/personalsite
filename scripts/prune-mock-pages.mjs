// Live builds must not ship the prototype's mock admin, access, CV and
// review pages. They are replaced by server-protected routes in Phase 4.
import { rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const out = process.argv[2] || 'dist';
for (const dir of ['admin', 'access', 'private', 'review']) {
  const p = join(out, dir);
  if (existsSync(p)) { rmSync(p, { recursive: true, force: true }); console.log('Removed mock pages:', p); }
}
