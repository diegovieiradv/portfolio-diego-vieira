"use client";

import { useState } from "react";
import Image from "next/image";
import type { KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryProps = {
  images: string[];
  captions?: string[];
  projectName: string;
};

export function ProjectGallery({ images, captions, projectName }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);

  if (images.length <= 1) {
    return null;
  }

  const total = images.length;
  const currentImage = images[index] ?? images[0] ?? "";
  const currentCaption =
    captions?.[index] ?? `Captura de tela ${index + 1} do projeto ${projectName}`;
  const currentAlt = `Captura de tela ${index + 1} do projeto ${projectName}`;

  const goToPrevious = () => setIndex((currentIndex) => (currentIndex - 1 + total) % total);
  const goToNext = () => setIndex((currentIndex) => (currentIndex + 1) % total);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      goToPrevious();
      return;
    }

    if (event.key === "ArrowRight") {
      goToNext();
    }
  };

  return (
    <section
      aria-label={`Galeria do projeto ${projectName}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <p aria-live="polite" className="sr-only">
        Imagem {index + 1} de {total} — {currentCaption}
      </p>

      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <Image
          src={currentImage}
          alt={currentAlt}
          width={1363}
          height={647}
          sizes="(max-width: 1024px) 100vw, 1152px"
          loading={index === 0 ? "eager" : "lazy"}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Imagem anterior"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-secondary transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center justify-center gap-1">
          {images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => setIndex(imageIndex)}
              aria-label={
                captions?.[imageIndex]
                  ? `Ir para imagem ${imageIndex + 1}: ${captions[imageIndex]}`
                  : `Ir para imagem ${imageIndex + 1}`
              }
              aria-current={imageIndex === index ? "true" : undefined}
              className="inline-flex h-6 w-6 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={
                  imageIndex === index
                    ? "h-2.5 w-2.5 rounded-full bg-primary"
                    : "h-2.5 w-2.5 rounded-full bg-border"
                }
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Próxima imagem"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-secondary transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <p
        aria-hidden="true"
        className="mt-3 text-center font-mono text-xs uppercase tracking-widest text-primary"
      >
        Imagem {index + 1} de {total}
      </p>

      <p className="mt-3 text-center text-sm text-secondary">{currentCaption}</p>
    </section>
  );
}
