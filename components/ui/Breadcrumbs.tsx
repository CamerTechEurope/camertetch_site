"use client";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface BreadcrumbsProps {
  current: string;
  category?: string;
  categoryHref?: string;
}

export default function Breadcrumbs({ current, category, categoryHref }: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs-bar ct" aria-label="Fil d'Ariane">
      <div className="breadcrumbs-inner">
        <Link href="/" className="breadcrumbs-home" aria-label="Retour à l'accueil">
          <ArrowLeft size={14} />
          <span>Accueil</span>
        </Link>

        <span className="breadcrumbs-sep" aria-hidden="true">
          <ChevronRight size={13} />
        </span>

        {category && categoryHref && (
          <>
            <Link href={categoryHref} className="breadcrumbs-crumb">
              {category}
            </Link>
            <span className="breadcrumbs-sep" aria-hidden="true">
              <ChevronRight size={13} />
            </span>
          </>
        )}

        <span className="breadcrumbs-current" aria-current="page">
          {current}
        </span>
      </div>
    </div>
  );
}
