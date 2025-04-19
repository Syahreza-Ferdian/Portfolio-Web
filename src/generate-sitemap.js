import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
// import { url } from "inspector";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sitemapPath = resolve(__dirname, "../public/sitemap.xml");

const sitemap = new SitemapStream({ hostname: "https://syahreza.site" });

sitemap.write({ url: "/", changefreq: "monthly", priority: 1.0 });

sitemap.end();

streamToPromise(sitemap).then((data) => {
    const stream = createWriteStream(sitemapPath);
    stream.write(data.toString());
    stream.end();
});
