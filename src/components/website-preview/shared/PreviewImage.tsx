"use client";

import { useState } from "react";

interface PreviewImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function PreviewImage({ src, alt, className = "" }: PreviewImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`wp-image-fallback ${className}`}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
