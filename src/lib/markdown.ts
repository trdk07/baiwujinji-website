// Simple markdown to HTML converter for Notion content
// Handles: headings, paragraphs, bold, italic, links, hr, lists

export function markdownToHtml(md: string): string {
  if (!md) return "";
  
  const lines = md.split("\n");
  const html: string[] = [];
  let inList = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Horizontal rule
    if (trimmed === "---" || trimmed === "***") {
      if (inList) { html.push("</ul>"); inList = false; }
      html.push('<hr class="my-10 border-sand/25" />');
      continue;
    }

    // Headings (### before ## before # to avoid false matches)
    if (trimmed.startsWith("### ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      const text = processInline(trimmed.slice(4));
      html.push(`<h3 class="rv text-serif text-lg md:text-xl font-semibold mb-3 mt-10 tracking-wide">${text}</h3>`);
      continue;
    }
    if (trimmed.startsWith("## ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      const text = processInline(trimmed.slice(3));
      html.push(`<h2 class="rv text-serif text-xl md:text-2xl font-semibold mb-4 mt-12 tracking-wide">${text}</h2>`);
      continue;
    }
    if (trimmed.startsWith("# ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      const text = processInline(trimmed.slice(2));
      html.push(`<h1 class="rv text-serif text-2xl md:text-3xl font-semibold mb-5 mt-12 tracking-wide">${text}</h1>`);
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      const text = processInline(trimmed.slice(2));
      html.push(`<blockquote class="rv border-l-3 border-seal/30 bg-bg-card/50 rounded-r-lg pl-5 pr-4 py-3 my-8 text-base md:text-lg text-ink-sub leading-9 italic">${text}</blockquote>`);
      continue;
    }

    // List items
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      if (!inList) { html.push('<ul class="rv space-y-2 my-4 ml-5">'); inList = true; }
      const text = processInline(trimmed.slice(2));
      html.push(`<li class="text-base md:text-lg text-ink-sub leading-9 list-disc">${text}</li>`);
      continue;
    }

    // Close list if we're no longer in one
    if (inList && trimmed === "") {
      html.push("</ul>");
      inList = false;
      continue;
    }

    // Empty line
    if (trimmed === "") continue;

    // Regular paragraph
    if (inList) { html.push("</ul>"); inList = false; }
    const text = processInline(trimmed);
    html.push(`<p class="rv text-base md:text-lg text-ink-sub leading-9 mb-5">${text}</p>`);
  }

  if (inList) html.push("</ul>");
  return html.join("\n");
}

function processInline(text: string): string {
  // Highlight ==text==
  text = text.replace(/==(.+?)==/g, '<mark class="em-sub bg-transparent">$1</mark>');
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="em font-semibold">$1</strong>');
  // Italic
  text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
  // Links
  text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-seal hover:underline">$1</a>');
  return text;
}
