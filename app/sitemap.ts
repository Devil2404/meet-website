import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

function getDynamicRoutes(baseUrl: string, folderName: string, priority: number): MetadataRoute.Sitemap {
  const targetDir = path.join(process.cwd(), 'app', folderName);
  let routes: MetadataRoute.Sitemap = [];

  try {
    if (fs.existsSync(targetDir)) {
      // Add the index page for this section (e.g. /blog, /use-cases)
      routes.push({
        url: `${baseUrl}/${folderName}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: priority,
      });

      // Get all subdirectories (e.g. individual blog posts)
      const subDirs = fs.readdirSync(targetDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

      const subRoutes = subDirs.map((slug) => ({
        url: `${baseUrl}/${folderName}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: priority,
      }));

      routes = [...routes, ...subRoutes];
    }
  } catch (e) {
    console.error(`Error reading ${folderName} directory`, e);
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tryvoxa.app';

  // Base routes as requested
  const routes = [
    '',
    '/features',
    '/roadmap',
    '/feedback',
    '/privacy',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamically get articles, use-cases, and comparisons
  const blogRoutes = getDynamicRoutes(baseUrl, 'blog', 0.7);
  const useCaseRoutes = getDynamicRoutes(baseUrl, 'use-cases', 0.8);
  const compareRoutes = getDynamicRoutes(baseUrl, 'compare', 0.8);

  return [...routes, ...blogRoutes, ...useCaseRoutes, ...compareRoutes];
}

