import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  private readonly seo = inject(SeoService);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly visibleSections = signal<Set<string>>(new Set(['hero']));

  ngOnInit(): void {
    this.seo.update({
      title: 'Ambika Infotech - Professional IT Services & Solutions',
      description: 'Ambika Infotech provides comprehensive IT solutions including custom software development, web & app development, cloud services, network infrastructure, and 24/7 IT support for businesses.',
      keywords: 'IT services, software development, web development, mobile apps, cloud solutions, IT support, Ambika Infotech',
      canonicalUrl: 'https://ambikainfotech.online/',
      // GEO: multi-schema @graph — WebSite + WebPage with SpeakableSpecification
      jsonLd: [
        {
          '@type': 'WebSite',
          '@id': 'https://ambikainfotech.online/#website',
          name: 'Ambika Infotech',
          url: 'https://ambikainfotech.online/',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://ambikainfotech.online/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'WebPage',
          '@id': 'https://ambikainfotech.online/#webpage',
          url: 'https://ambikainfotech.online/',
          name: 'Ambika Infotech - Professional IT Services & Solutions',
          description:
            'Ambika Infotech provides comprehensive IT solutions including custom software development, web & app development, cloud services, network infrastructure, and 24/7 IT support.',
          inLanguage: 'en',
          isPartOf: { '@id': 'https://ambikainfotech.online/#website' },
          // GEO: tells AI assistants & voice engines which elements carry key answers
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.hero-description', '.section-subtitle'],
          },
          about: {
            '@type': 'Organization',
            name: 'Ambika Infotech',
            url: 'https://ambikainfotech.online/',
          },
        },
      ],
      // AEO: common questions answered for featured snippets, voice & AI overviews
      faqItems: [
        {
          question: 'What services does Ambika Infotech offer?',
          answer:
            'Ambika Infotech offers IT support & maintenance, custom software development, web & mobile development, cloud & hosting solutions, network infrastructure design, and cybersecurity services.',
        },
        {
          question: 'When was Ambika Infotech founded?',
          answer: 'Ambika Infotech was founded in October 2025.',
        },
        {
          question: 'Does Ambika Infotech provide 24/7 IT support?',
          answer:
            'Yes, Ambika Infotech provides 24/7 IT help desk support with both remote and on-site assistance to keep your systems running at all times.',
        },
        {
          question: 'How can I contact Ambika Infotech?',
          answer:
            'You can contact Ambika Infotech by visiting ambikainfotech.online/contact and filling out the online contact form.',
        },
      ],
      breadcrumbs: [{ name: 'Home', url: 'https://ambikainfotech.online/' }],
    });
  }

  services = [
    {
      icon: 'bi bi-headset',
      title: 'IT Support & Maintenance',
      description: '24/7 technical support and proactive maintenance to keep your systems running smoothly and minimize downtime.'
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies to solve your unique business challenges efficiently.'
    },
    {
      icon: 'bi bi-phone',
      title: 'Web & App Development',
      description: 'Responsive websites and mobile applications that deliver exceptional user experiences across all devices.'
    },
    {
      icon: 'bi bi-cloud-arrow-up',
      title: 'Cloud Solutions',
      description: 'Secure cloud migration, infrastructure management, and optimization to scale your business effectively.'
    },
    {
      icon: 'bi bi-diagram-3',
      title: 'Network Infrastructure',
      description: 'Reliable network design, implementation, and management for seamless connectivity and communication.'
    },
    {
      icon: 'bi bi-shield-lock',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data, systems, and business from digital threats.'
    }
  ];

  benefits = [
    {
      icon: 'bi bi-award',
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience'
    },
    {
      icon: 'bi bi-clock-history',
      title: '24/7 Support',
      description: 'Round-the-clock assistance whenever you need us'
    },
    {
      icon: 'bi bi-lightning-charge',
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: 'bi bi-cash-stack',
      title: 'Fair Pricing',
      description: 'Transparent, competitive rates with no hidden costs'
    }
  ];

  technologies = [
    'Angular',
    'React',
    'Node.js',
    'Python',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'MongoDB',
    'PostgreSQL',
    'Linux',
    'Windows Server'
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          const sectionId = entry.target.getAttribute('data-reveal-id');
          if (!sectionId || !entry.isIntersecting) {
            continue;
          }

          this.visibleSections.update(previous => {
            if (previous.has(sectionId)) {
              return previous;
            }

            const next = new Set(previous);
            next.add(sectionId);
            return next;
          });

          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    const targets = this.elementRef.nativeElement.querySelectorAll(
      '[data-reveal-id]'
    ) as NodeListOf<HTMLElement>;
    for (const target of targets) {
      observer.observe(target);
    }

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }

  isVisible(sectionId: string): boolean {
    return this.visibleSections().has(sectionId);
  }
}
