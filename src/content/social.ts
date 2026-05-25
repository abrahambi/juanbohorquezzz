export const social = [
  { url: "mailto:juangiraldo777@Gmail.com", name: "mail" },
  { url: "tel:+573173987601", name: "phone" },
  { url: "https://www.linkedin.com/in/juan-david-bohorquez-giraldo-b37b8517b/", name: "linkedin" },
  { url: "https://www.facebook.com/bianalysts", name: "facebook" },
  { url: "https://www.youtube.com/@powerbidesign7011", name: "youtube" },
] as const satisfies { url: string; name: "mail" | "phone" | "linkedin" | "facebook" | "youtube" | "github" | "instagram" | "x" }[];
