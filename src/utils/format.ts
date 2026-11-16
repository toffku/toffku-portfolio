const escapeHtml = (text: string): string =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Turns **double-asterisk** spans in data strings into emphasised HTML,
 * so key metrics stand out when a reader skims. Input is escaped first.
 */
export function emphasise(text: string): string {
  return escapeHtml(text).replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-semibold text-gray-100">$1</strong>',
  );
}
