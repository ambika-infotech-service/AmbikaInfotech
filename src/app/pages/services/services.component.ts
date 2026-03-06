import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Our Services - Ambika Infotech | IT Solutions',
      description: 'Explore our full range of IT services: custom software development, web & mobile development, cloud solutions, cybersecurity, network infrastructure, and 24/7 IT support.',
      keywords: 'IT support, custom software development, web development, mobile app development, cloud solutions, cybersecurity, network infrastructure, Ambika Infotech',
      canonicalUrl: 'https://ambikainfotech.online/services',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'IT Services by Ambika Infotech',
        description: 'Comprehensive IT services for businesses',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'IT Support & Maintenance' },
          { '@type': 'ListItem', position: 2, name: 'Custom Software Development' },
          { '@type': 'ListItem', position: 3, name: 'Web & Mobile Development' },
          { '@type': 'ListItem', position: 4, name: 'Network Infrastructure' },
          { '@type': 'ListItem', position: 5, name: 'Cloud & Hosting Solutions' },
          { '@type': 'ListItem', position: 6, name: 'Cybersecurity Services' }
        ]
      }
    });
  }

  services: Service[] = [
    {
      icon: 'bi bi-headset',
      title: 'IT Support & Maintenance',
      description: 'Keep your business running smoothly with our comprehensive IT support services. We provide round-the-clock monitoring, troubleshooting, and maintenance to prevent downtime and ensure optimal performance.',
      features: [
        '24/7 Help Desk Support',
        'Remote & On-site Assistance',
        'Proactive System Monitoring',
        'Regular Maintenance & Updates',
        'Hardware & Software Troubleshooting',
        'IT Asset Management'
      ]
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Custom Software Development',
      description: 'Transform your business processes with tailor-made software solutions. Our experienced developers create scalable, efficient applications that address your unique challenges and drive productivity.',
      features: [
        'Custom Application Development',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Database Design & Optimization',
        'Quality Assurance & Testing'
      ]
    },
    {
      icon: 'bi bi-phone',
      title: 'Web & Mobile Development',
      description: 'Establish your digital presence with professional websites and mobile apps. We build responsive, user-friendly platforms that engage your audience and deliver exceptional experiences across all devices.',
      features: [
        'Responsive Website Design',
        'E-commerce Solutions',
        'iOS & Android App Development',
        'Progressive Web Apps (PWA)',
        'Content Management Systems',
        'UI/UX Design Services'
      ]
    },
    {
      icon: 'bi bi-diagram-3',
      title: 'Network Infrastructure',
      description: 'Build a reliable, secure network foundation for your business. We design and implement robust network solutions that ensure seamless connectivity, efficient communication, and optimal performance.',
      features: [
        'Network Design & Architecture',
        'Local & Wide Area Networks (LAN/WAN)',
        'Wireless Network Solutions',
        'Network Security Implementation',
        'VPN & Remote Access Setup',
        'Network Monitoring & Management'
      ]
    },
    {
      icon: 'bi bi-cloud-arrow-up',
      title: 'Cloud & Hosting Solutions',
      description: 'Embrace the flexibility and scalability of cloud computing. We help you migrate to the cloud, optimize your infrastructure, and manage your cloud resources efficiently for improved performance and cost savings.',
      features: [
        'Cloud Migration Services',
        'AWS, Azure & Google Cloud',
        'Cloud Infrastructure Setup',
        'Web Hosting Services',
        'Backup & Disaster Recovery',
        'Cloud Cost Optimization'
      ]
    },
    {
      icon: 'bi bi-shield-lock',
      title: 'Cybersecurity Services',
      description: 'Protect your business from digital threats with our comprehensive security solutions. We implement multi-layered defenses to safeguard your data, systems, and reputation from cyberattacks.',
      features: [
        'Security Audits & Assessments',
        'Firewall & Antivirus Solutions',
        'Data Encryption & Protection',
        'Security Awareness Training',
        'Incident Response Planning',
        'Compliance Management (GDPR, HIPAA)'
      ]
    }
  ];

  processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We listen to understand your needs, challenges, and goals'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We design a customized solution tailored to your requirements'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision and expertise'
    },
    {
      number: '04',
      title: 'Support',
      description: 'We provide ongoing support and optimization'
    }
  ];
}
