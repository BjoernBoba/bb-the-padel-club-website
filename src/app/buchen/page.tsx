import { redirect } from "next/navigation";

// Platzhalter-Seite: weiterleiten zum externen Buchungssystem
// URL ersetzen sobald das Buchungssystem feststeht
export default function BuchenPage() {
  redirect("https://www.playtomic.io");
}
