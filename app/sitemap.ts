import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tryvoxa.app';

  // Base routes
  const routes = [
    '',
    '/pricing',
    '/changelog',
    '/help',
    '/contact',
    '/privacy',
    '/terms',
    '/security',
    '/feedback',
    '/use-cases',
    '/compare',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Use case routes
  const useCases = [
    '/sales-teams',
    '/product-managers',
    '/engineering-teams',
    '/startups',
    '/students',
  ].map((route) => ({
    url: `${baseUrl}/use-cases${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Comparison routes
  const comparisons = [
    '/tldv-vs-voxa',
    '/scribbl-vs-voxa',
    '/fireflies-vs-voxa',
    '/otter-vs-voxa',
  ].map((route) => ({
    url: `${baseUrl}/compare${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog article routes
  const blogArticles = [
    '/best-free-google-meet-recorder',
    '/record-google-meet-without-workspace',
    '/best-tldv-alternative',
    '/best-scribbl-alternative',
    '/how-to-take-meeting-notes-automatically',
    '/generate-action-items-from-meetings',
    '/meeting-transcript-vs-meeting-notes',
    '/track-attendance-google-meet',
    '/best-meeting-productivity-tools',
    '/how-to-improve-team-meetings',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}/blog${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...useCases, ...comparisons, ...blogArticles];
}

