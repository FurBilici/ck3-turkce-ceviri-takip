import { readFile } from "node:fs/promises";
import path from "node:path";
import type { PublicStatus } from "./types";

export async function getStatus(): Promise<PublicStatus> {
  const filePath = path.join(process.cwd(), "public", "data", "status.json");
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as PublicStatus;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("tr-TR").format(value);
}

export function formatDate(value: string): string {
  if (!value) {
    return "Henüz yok";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export const statusLabels = {
  completed: "Tamamlandı",
  translating: "Çevriliyor",
  needs_review: "Kontrol gerekiyor",
  planned: "Planlandı",
} as const;
