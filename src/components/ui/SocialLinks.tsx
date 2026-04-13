'use client';

import { socialLinks } from "@/data/socialLinks";
import { SocialLinkWithPreview } from "./SocialLinkWithPreview";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 items-center">
      {socialLinks.map((link) => (
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