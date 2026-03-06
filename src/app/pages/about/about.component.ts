import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'About Us - Ambika Infotech | Our Mission & Values',
      description: 'Learn about Ambika Infotech — our mission, core values, and the expert team behind our IT solutions. Established October 2025, committed to 100% client satisfaction.',
      keywords: 'about Ambika Infotech, IT company India, our mission, our values, expert IT team',
      canonicalUrl: 'https://ambikainfotech.online/about',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ambika Infotech',
        url: 'https://ambikainfotech.online/',
        foundingDate: '2025-10',
        description: 'Professional IT services and solutions provider committed to excellence, reliability, and innovation.',
        sameAs: []
      }
    });
  }

  stats = [
    {
      icon: 'bi bi-calendar-check',
      number: 'Oct 2025',
      label: 'Established'
    },
    // {
    //   icon: 'bi bi-people',
    //   number: '30+',
    //   label: 'Happy Clients'
    // },
    // {
    //   icon: 'bi bi-trophy',
    //   number: '50+',
    //   label: 'Projects Completed'
    // },
    {
      icon: 'bi bi-emoji-smile',
      number: '100%',
      label: 'Client Satisfaction'
    }
  ];

  values = [
    {
      icon: 'bi bi-star',
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive real results.'
    },
    {
      icon: 'bi bi-patch-check',
      title: 'Reliability',
      description: 'You can count on us to deliver on our promises with consistent, dependable service and support.'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Integrity',
      description: 'We operate with honesty and transparency, building trust through ethical business practices.'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Innovation',
      description: 'We stay ahead of technology trends to bring you cutting-edge solutions that give you a competitive edge.'
    },
    {
      icon: 'bi bi-people',
      title: 'Partnership',
      description: 'We view our clients as partners, working collaboratively to achieve shared success and growth.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Growth',
      description: 'We are committed to continuous improvement and helping our clients scale their businesses sustainably.'
    }
  ];
}

