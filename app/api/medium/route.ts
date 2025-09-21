// app/api/medium/route.ts
import Parser from "rss-parser";
import { NextResponse } from "next/server";


export async function GET() {
  const parser = new Parser();

  try {
    const feed = await parser.parseURL(
      "https://medium.com/feed/@hsd.ostimtech"
    );

    const articles = feed.items.slice(0, 3).map((item) => ({
      title: item.title || "",
      pubDate: item.pubDate
        ? new Date(item.pubDate).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })
        : "",
      image:
        item.content && item.content.match(/<img[^>]+src\s*=\s*['\"]([^'\"]+)['\"]/)
          ? item.content.match(/<img[^>]+src\s*=\s*['\"]([^'\"]+)['\"]/)
              ?. [1]
          : undefined,
      href: item.link || "#",
    }));

    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Medium verileri alınamadı.",
        error:
          typeof error === "object" && error !== null && "message" in error
            ? (error as any).message
            : String(error),
      },
      { status: 500 }
    );
  }
}
