"use client";

import { useEffect } from "react";

export default function TurnierProWidget() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://turnier-pro.de/widget.js"]');
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = "https://turnier-pro.de/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      className="turnierpro"
      data-turnier="t8479rriyx"
      data-ansicht="komplett"
      data-design="dunkel"
      data-farbe="#C4973A"
    />
  );
}
