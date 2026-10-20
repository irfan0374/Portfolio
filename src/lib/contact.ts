import { z } from "zod";

// Shared by the form (client) and the API route (server).
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Please enter a valid email").max(200),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(5000),
  // Honeypot: real visitors never fill this hidden field.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
