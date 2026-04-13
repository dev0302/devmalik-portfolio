import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

export interface SocialLink {
  name: string
  href: string
  icon: IconType
  ariaLabel: string
  className: string
  previewImage?: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'X',
    href: 'https://x.com/devmalik_0302',
    icon: FaXTwitter,
    ariaLabel: 'X / Twitter profile',
    className: 'text-neutral-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 hover:scale-110',
    previewImage: '/assets/images/x.webp'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/dev0302',
    icon: FaGithub,
    ariaLabel: 'GitHub profile',
    className: 'text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-200 hover:scale-110',
    previewImage: '/assets/images/github.webp'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dev-malik-976230311/',
    icon: FaLinkedin,
    ariaLabel: 'LinkedIn profile',
    className: 'text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110',
    previewImage: '/assets/images/linkedin.webp'
  },
  {
    name: 'Email',
    href: 'mailto:devmalik9953@gmail.com',
    icon: FaEnvelope,
    ariaLabel: 'Email me',
    className: 'text-neutral-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 hover:scale-110',
    previewImage: '/assets/images/gmail.png'
  },
]
export const socialLinksHero: SocialLink[] = [
  {
    name: 'X',
    href: 'https://x.com/devmalik_0302',
    icon: FaXTwitter,
    ariaLabel: 'X / Twitter profile',
    className: 'text-neutral-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 hover:scale-110',
    previewImage: '/assets/images/x.webp'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/dev0302',
    icon: FaGithub,
    ariaLabel: 'GitHub profile',
    className: 'text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-200 hover:scale-110',
    previewImage: '/assets/images/github.webp'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dev-malik-976230311/',
    icon: FaLinkedin,
    ariaLabel: 'LinkedIn profile',
    className: 'text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110',
    previewImage: '/assets/images/linkedin.webp'
  },
]
