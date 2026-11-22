/** Escape HTML, then turn [[placeholder]] into a visible marker. */
export function tbc(text: string): string {
  const esc = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return esc.replace(
    /\[\[(.+?)\]\]/g,
    '<mark class="tbc" title="Placeholder: to confirm">$1</mark>',
  );
}

/** Strip placeholder brackets for metadata (titles, descriptions). */
export function plain(text: string): string {
  return text.replace(/\[\[(.+?)\]\]/g, '$1');
}

export const isTbc = (text: string) => /\[\[.+?\]\]/.test(text);
