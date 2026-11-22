/** Escape HTML, then turn [[placeholder]] into a visible marker. */
export function tbc(text: string): string {
  const esc = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return esc.replace(
    /\[\[(.+?)\]\]/g,
    '<span class="tbc" title="Placeholder: to confirm">$1</span>',
  );
}

/** Strip placeholder brackets for metadata (titles, descriptions). */
export function plain(text: string): string {
  return text.replace(/\[\[(.+?)\]\]/g, '$1');
}

export const isTbc = (text: string) => /\[\[.+?\]\]/.test(text);

/**
 * Prototype mode shows review aids (prototype bar, placeholder marks, photo
 * slots, mock pages). Live builds hide anything still marked [[to confirm]].
 * Set PUBLIC_PROTOTYPE=true to build the review prototype.
 */
export const PROTO = import.meta.env.PUBLIC_PROTOTYPE === 'true';

/** True if this text can be shown: always in prototype, only when confirmed live. */
export const live = (text: string) => PROTO || !isTbc(text);
