"use client";
import { CldImage } from 'next-cloudinary';
import type { CldImageProps } from 'next-cloudinary';

export default function CloudinaryImage(props: CldImageProps) {
  return <CldImage {...props} />;
}
