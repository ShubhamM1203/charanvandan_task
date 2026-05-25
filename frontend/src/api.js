const API_BASE = import.meta.env.VITE_API_URL || "";

export async function fetchInitiatives() {
  const res = await fetch(`${API_BASE}/api/initiatives`);
  if (!res.ok) throw new Error("Failed to load initiatives");
  const data = await res.json();
  return data.initiatives;
}

export async function fetchImpact() {
  const res = await fetch(`${API_BASE}/api/impact`);
  if (!res.ok) throw new Error("Failed to load impact data");
  return res.json();
}

export async function submitContact(form) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail?.[0]?.msg || data.detail || "Submission failed");
  }
  return data;
}
