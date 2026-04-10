"use client";

import { useState, useCallback } from "react";

interface ShareButtonProps {
  typeCode: string;
  typeName: string;
  matchPercent: number;
  quiz: "brainrot" | "classic";
}

export default function ShareButton({
  typeCode,
  typeName,
  matchPercent,
  quiz,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = `https://sbtibrainrot.com/types/${quiz}/${typeCode.toLowerCase()}`;
  const shareText = `I got ${typeName} (${typeCode}) — ${matchPercent}% match! Take the SBTI Brainrot Test`;

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareText, url: shareUrl });
        return;
      } catch {
        // User cancelled or share failed — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available — select-and-copy fallback
      const el = document.createElement("textarea");
      el.value = `${shareText}\n${shareUrl}`;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [shareText, shareUrl]);

  return (
    <button className="btn-share" onClick={handleShare}>
      {copied ? "✓ Copied!" : "📤 Share Result"}
    </button>
  );
}
