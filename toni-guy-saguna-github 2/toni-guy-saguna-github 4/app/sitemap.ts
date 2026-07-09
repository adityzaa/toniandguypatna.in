import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://toniandguypatna.in";
  const routes = ["", "/services/haircut", "/services/hair-color", "/services/hair-spa", "/services/keratin", "/services/bridal", "/services/skin", "/services/nails", "/services/makeup", "/privacy-policy"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
