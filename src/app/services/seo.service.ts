import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
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

    this.setPageJsonLd(config.jsonLd ?? null);
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
