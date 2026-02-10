import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
}
