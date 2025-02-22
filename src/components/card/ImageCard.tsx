import { ReactNode } from "react";
import Image from "next/image";

export type ImageCardProps = {
  src: string;
  styTail?: string;
  alt: string;
  width?: string;
  aspect?: `aspect-[${number}] md:aspect-[${number}] lg:aspect-[${number}]`;
  rounded?: boolean;
};

/**
 * Image Card component for displaying images.
 * @param {ImageCardProps} props
 * @returns {ReactNode} - basically an image but one that can be styled
 */
function ImageCard({
  src,
  alt,
  width,
  aspect,
  styTail,
  rounded,
}: ImageCardProps): ReactNode {
  const className = `relative lg:w-full ${
    aspect || "aspect-[0.968] md:aspect-[1]"
  } overflow-hidden ${rounded && "rounded-lg"} ${width} ${styTail}`;
  return (
    <div className={className}>
      <Image
        className="object-cover object-center"
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={"/blue-background"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default ImageCard;
