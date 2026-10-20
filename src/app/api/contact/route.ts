import { Resend } from "resend";
import { contactSchema } from "@/lib/contact";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const { name, email, message, company } = parsed.data;
  if (company) return Response.json({ ok: true }); // bot filled the honeypot; pretend success

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return Response.json({ error: "Contact form is not configured yet. Please email me directly." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    html: `<p><strong>${escape(name)}</strong> (${escape(email)}) wrote:</p><p style="white-space:pre-wrap">${escape(message)}</p>`,
  });

  if (error) {
    return Response.json({ error: "Could not send right now. Please email me directly." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
