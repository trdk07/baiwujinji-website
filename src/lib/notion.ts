import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const hasNotionKey = !!process.env.NOTION_API_KEY;

const notion = hasNotionKey
  ? new Client({ auth: process.env.NOTION_API_KEY })
  : null;

const n2m = notion ? new NotionToMarkdown({ notionClient: notion }) : null;

// Convert Notion page content to HTML-ready markdown
export async function getPageContent(pageId: string): Promise<string> {
  if (!n2m) {
    console.warn("NOTION_API_KEY not set. Skipping content fetch.");
    return "";
  }
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}

// Get page metadata (title, etc.)
export async function getPageMeta(pageId: string) {
  if (!notion) return { title: "", id: pageId };
  const page = await notion.pages.retrieve({ page_id: pageId }) as any;
  const titleProp = page.properties?.title || page.properties?.Name;
  let title = "";
  if (titleProp?.title?.[0]?.plain_text) {
    title = titleProp.title.map((t: any) => t.plain_text).join("");
  }
  return { title, id: pageId };
}

// Fetch all children pages under a parent page
export async function getChildPages(parentId: string) {
  if (!notion) return [];
  const blocks = await notion.blocks.children.list({ block_id: parentId });
  const childPages = blocks.results
    .filter((b: any) => b.type === "child_page")
    .map((b: any) => ({
      id: b.id,
      title: b.child_page?.title || "",
    }));
  return childPages;
}
