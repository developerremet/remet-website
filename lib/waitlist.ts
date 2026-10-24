// Waitlist storage: Supabase REST, no SDK. Ported unchanged from the previous site's waitlist.js.
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./supabase-config";

const configured = () =>
  !SUPABASE_URL.includes("YOUR-PROJECT-REF") && !SUPABASE_ANON_KEY.includes("YOUR-ANON");

// Indian mobile numbers: 10 digits starting 6-9. Accepts pasted +91/0 prefixes
// and any spacing, returns E.164 or null.
export function normalisePhone(raw: string): string | null {
  let d = String(raw || "").replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return /^[6-9]\d{9}$/.test(d) ? "+91" + d : null;
}

export type WaitlistResult = { ok: boolean; message: string };

// Never throws; the caller shows `message` verbatim.
export async function joinWaitlist({
  phone,
  consent,
  source,
}: {
  phone: string;
  consent: boolean;
  source?: string;
}): Promise<WaitlistResult> {
  const e164 = normalisePhone(phone);
  if (!e164) return { ok: false, message: "That does not look like an Indian mobile number." };
  if (!consent) return { ok: false, message: "Tick the box so we know we may message you." };

  if (!configured()) {
    console.error("[waitlist] Supabase is not configured: edit lib/supabase-config.ts");
    return { ok: false, message: "The list is not open yet. Try again shortly." };
  }

  try {
    const res = await fetch(SUPABASE_URL + "/rest/v1/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: "Bearer " + SUPABASE_ANON_KEY,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ phone: e164, city: "Indore", consent: true, source: source || "hero" }),
    });

    // 23505 = unique violation. Already on the list is a success, not an error.
    if (res.status === 409) return { ok: true, message: "You are already on the list." };
    if (!res.ok) {
      console.error("[waitlist]", res.status, await res.text());
      return { ok: false, message: "Something went wrong. Try again in a moment." };
    }
    return { ok: true, message: "You are on the list. Munshi has noted it." };
  } catch (err) {
    console.error("[waitlist]", err);
    return { ok: false, message: "No connection. Check your network and try again." };
  }
}
