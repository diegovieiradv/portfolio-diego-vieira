"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { KeyboardEvent } from "react";
import { BadgeCheck, Download, ExternalLink, FileText, X } from "lucide-react";
import type { Certification } from "@/types/certification";
import { getCertificateResource } from "@/lib/certificates";

type CertificateViewerProps = {
  certification: Certification;
  open: boolean;
  onDismiss: () => void;
};

export function CertificateViewer({
  certification,
  open,
  onDismiss,
}: CertificateViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onDismissRef = useRef(onDismiss);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
        closeButtonRef.current?.focus();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onDismissRef.current();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, object, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => element.offsetParent !== null);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (event.shiftKey && (active === first || !dialog.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  };

  const resource = getCertificateResource(certification);
  const titleId = `certificado-titulo-${certification.id}`;
  const descriptionId = `certificado-descricao-${certification.id}`;

  return (
    <dialog
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="m-auto w-[calc(100%-1.5rem)] max-w-3xl rounded-xl border border-border bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/70"
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          dialogRef.current?.close();
        }
      }}
      onKeyDown={handleDialogKeyDown}
    >
      <div className="flex max-h-[85vh] flex-col overflow-hidden">
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div>
            <h2
              id={titleId}
              className="text-lg font-semibold leading-snug text-foreground"
            >
              {certification.title}
            </h2>
            {certification.institution ? (
              <p id={descriptionId} className="mt-0.5 text-sm text-muted">
                {certification.institution}
              </p>
            ) : (
              <p id={descriptionId} className="sr-only">
                Certificado de {certification.title}
              </p>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Fechar visualização do certificado"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {resource?.kind === "image" ? (
            <Image
              src={resource.url}
              alt={`Certificado de ${certification.title}${
                certification.institution
                  ? ` emitido pela instituição ${certification.institution}`
                  : ""
              }`}
              width={1600}
              height={1131}
              sizes="(max-width: 768px) 100vw, 48rem"
              className="mx-auto h-auto max-h-[60vh] w-full rounded-md object-contain"
            />
          ) : null}

          {resource?.kind === "pdf" ? (
            <>
              <iframe
                src={`${resource.url}#toolbar=0`}
                title={`Prévia do certificado ${certification.title}`}
                className="hidden h-[60vh] w-full rounded-md border border-border bg-surface sm:block"
              />
              <div className="flex flex-col items-center gap-3 py-10 text-center sm:hidden">
                <FileText className="h-12 w-12 text-primary" aria-hidden="true" />
                <p className="max-w-xs text-sm text-secondary">
                  A prévia não está disponível neste dispositivo. Use os botões abaixo para
                  abrir ou baixar o certificado.
                </p>
              </div>
            </>
          ) : null}

          {resource?.kind === "external" ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <BadgeCheck className="h-12 w-12 text-primary" aria-hidden="true" />
              <p className="max-w-xs text-sm text-secondary">
                O certificado é verificado externamente pela instituição. Use o botão para
                abrir a credencial original.
              </p>
            </div>
          ) : null}
        </div>

        {resource ? (
          <div className="flex flex-wrap items-center gap-2 border-t border-border px-5 py-4 sm:px-6">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-amber-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:from-primary-dark hover:to-primary"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Abrir em nova aba
            </a>

            {resource.local ? (
              <a
                href={resource.url}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Baixar
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </dialog>
  );
}
