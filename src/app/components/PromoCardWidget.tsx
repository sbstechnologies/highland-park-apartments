"use client";
import { useState } from "react";
import { Tag, X, Sparkles, ArrowRight } from "lucide-react";
import { PromoCardWidgetConfig } from "../config/content";
import { siteConfig } from "../config/content";
import Link from "next/link";

export default function PromoCardWidget() {
  const [showPromo, setShowPromo] = useState(true);

  if (!showPromo) return null;

  return (
    <>
      {/* Dynamic Promo Card Container */}
      {/* Kept fixed on the bottom-left corner across all screen sizes with a uniform margin */}
      <div className="animate-promo-card fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[9998] w-[calc(100%-2rem)] max-w-[288px] sm:w-72 overflow-hidden rounded-[18px] bg-[#FDFCF0] font-['Plus_Jakarta_Sans',system-ui,sans-serif] shadow-[0_12px_48px_rgba(6,13,30,0.28),0_2px_8px_rgba(6,13,30,0.18)]">
        {/* Top Accent */}
        <div className="h-[3px] bg-[linear-gradient(90deg,rgb(224,148,40)_0%,rgb(245,185,66)_60%,rgb(224,148,40)_100%)] bg-[length:300px_100%] animate-[shimmer_2.5s_linear_infinite]" />

        {/* Header */}
        <div className="relative flex items-start justify-between gap-2.5 bg-[linear-gradient(135deg,rgb(30,56,114)_0%,rgb(22,43,94)_65%,rgb(15,30,72)_100%)] px-4 pb-3 pt-3.5">
          <div className="flex items-center gap-2.5">
            {/* Promotion Icon */}
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] bg-[linear-gradient(135deg,rgb(224,148,40)_0%,rgb(200,120,24)_100%)]">
              <Tag size={17} className="text-white" />
            </div>

            {/* Header Text */}
            <div>
              <p className="m-0 font-['Plus_Jakarta_Sans'] text-[9px] font-bold uppercase tracking-[0.16em] text-[rgba(224,148,40,0.8)]">
                {PromoCardWidgetConfig.label}
              </p>

              <p className="m-0 mt-[1px] font-['Instrument_Serif',Georgia,serif] text-[17px] leading-[1.15] tracking-[-0.02em] text-[#F5F2ED]">
                {PromoCardWidgetConfig.title}
              </p>
            </div>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={() => setShowPromo(false)}
            aria-label="Dismiss promotion"
            className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg border-0 bg-[rgba(245,242,237,0.1)] p-1.5 transition-colors hover:bg-[rgba(245,242,237,0.18)]"
          >
            <X size={13} className="text-[rgba(245,242,237,0.65)]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2.5 p-4 pb-4 pt-3.5">
          {/* Promotion 1 */}
          <div className="flex items-start gap-2 rounded-[10px] border border-[rgba(224,148,40,0.22)] bg-[rgba(224,148,40,0.08)] px-3 py-2.5">
            <Sparkles size={13} className="mt-[1px] shrink-0 text-[#E09428]" />

            <div>
              <p className="m-0 font-['Plus_Jakarta_Sans'] text-[12px] font-extrabold tracking-[-0.01em] text-[#E09428]">
                {PromoCardWidgetConfig.cards[0].title}
              </p>

              <p className="m-0 mt-[2px] font-['Plus_Jakarta_Sans'] text-[11px] leading-[1.45] text-[#5A6260]">
                {PromoCardWidgetConfig.cards[0].text}{" "}
                <strong className="font-bold text-[#2D3230]">
                  {PromoCardWidgetConfig.cards[0].highlight}
                </strong>
                {PromoCardWidgetConfig.cards[0].suffix}
              </p>
            </div>
          </div>

          {/* Promotion 2 */}
          <div className="flex items-start gap-2 rounded-[10px] border border-[rgba(30,56,114,0.14)] bg-[rgba(30,56,114,0.06)] px-3 py-2.5">
            <Sparkles size={13} className="mt-[1px] shrink-0 text-[#1E3872]" />

            <div>
              <p className="m-0 font-['Plus_Jakarta_Sans'] text-[12px] font-extrabold tracking-[-0.01em] text-[#1E3872]">
                {PromoCardWidgetConfig.cards[1].title}
              </p>

              <p className="m-0 mt-[2px] font-['Plus_Jakarta_Sans'] text-[11px] leading-[1.45] text-[#5A6260]">
                {PromoCardWidgetConfig.cards[1].text}{" "}
                <strong className="font-extrabold text-[#2D3230]">
                  {PromoCardWidgetConfig.cards[1].highlight}
                </strong>
                {PromoCardWidgetConfig.cards[1].suffix}{" "}
                {PromoCardWidgetConfig.cards[1].highlight2 && (
                  <strong className="font-extrabold text-[#1E3872]">
                    {PromoCardWidgetConfig.cards[1].highlight2}
                  </strong>
                )}
                {PromoCardWidgetConfig.cards[1].suffix2}
              </p>
            </div>
          </div>

          {/* Apply CTA */}
          <Link
            href={PromoCardWidgetConfig.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-[7px] rounded-[11px] bg-[#1E3872] py-[11px] text-[13px] font-bold tracking-[0.01em] text-[#F5F2ED] no-underline shadow-[0_4px_18px_rgba(30,56,114,0.38)] transition-all hover:bg-[#162B5E]"
          >
            {PromoCardWidgetConfig.buttonText}
            <ArrowRight size={13} className="text-white" />
          </Link>

          {/* Phone */}
          <p className="m-0 text-center font-['Plus_Jakarta_Sans'] text-[10px] text-[rgba(90,98,96,0.5)]">
            Call us ·{" "}
            <a
              href={siteConfig.tel}
              className="font-semibold text-[#1E3872] no-underline hover:underline"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
