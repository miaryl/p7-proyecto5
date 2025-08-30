import { api } from "./api";

function uid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `id_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export async function saveReading({ userName, cards }) {
  const payload = {
    id: uid(),
    userName: userName.trim(),
    date: new Date().toISOString(),
    cards,
  };
  const { data: saved } = await api.post("/readings", payload);
  return saved;
}
