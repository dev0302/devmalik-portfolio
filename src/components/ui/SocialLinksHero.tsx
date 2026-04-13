'use client';

import { socialLinksHero } from "@/data/socialLinks";
import { SocialLinkWithPreview } from "./SocialLinkWithPreview";

export default function SocialLinksHero() {
  return (
    <div className="flex gap-8 items-center">
      {socialLinksHero.map((link) => (
        <SocialLinkWithPreview
          key={link.name}
          href={link.href}
          icon={link.icon}
          previewImage={link.previewImage}
          ariaLabel={link.ariaLabel}
          className={link.className}
        />
      ))}
    </div>
  );
}
