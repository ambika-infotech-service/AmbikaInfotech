import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  /** Single schema object or an array of schema objects (combined into @graph) */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** AEO: generates FAQPage schema — answers common questions for AI & voice search */
  faqItems?: FaqItem[];
  /** GEO/AEO: generates BreadcrumbList schema — helps AI understand site hierarchy */
  breadcrumbs?: BreadcrumbItem[];
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  update(config: SeoConfig): void {
    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    const ogImage = config.ogImage ?? '/assets/og-image.jpg';

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: config.canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: ogImage });

    // Twitter
    this.meta.updateTag({ property: 'twitter:title', content: config.title });
    this.meta.updateTag({ property: 'twitter:description', content: config.description });
    this.meta.updateTag({ property: 'twitter:url', content: config.canonicalUrl });
    this.meta.updateTag({ property: 'twitter:image', content: ogImage });

    this.setCanonical(config.canonicalUrl);

    this.setPageJsonLd(this.buildJsonLdGraph(config));
  }

  private buildJsonLdGraph(config: SeoConfig): Record<string, unknown> | null {
    const items: Record<string, unknown>[] = [];

    if (config.jsonLd) {
      if (Array.isArray(config.jsonLd)) {
        items.push(...config.jsonLd);
      } else {
        items.push(config.jsonLd);
      }
    }

    if (config.breadcrumbs?.length) {
      items.push({
        '@type': 'BreadcrumbList',
        itemListElement: config.breadcrumbs.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }

    if (config.faqItems?.length) {
      items.push({
        '@type': 'FAQPage',
        mainEntity: config.faqItems.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    if (items.length === 0) return null;
    if (items.length === 1) return { '@context': 'https://schema.org', ...items[0] };

    return { '@context': 'https://schema.org', '@graph': items };
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setPageJsonLd(data: Record<string, unknown> | null): void {
    const existingScript = this.document.getElementById('page-json-ld');
    if (existingScript) {
      existingScript.remove();
    }
    if (!data) return;

    const script = this.document.createElement('script');
    script.id = 'page-json-ld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
