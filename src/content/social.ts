export const social = [
  { url: "https://www.facebook.com/nguyentheduytk/", name: "mail" },
  { url: "https://www.facebook.com/nguyentheduytk/", name: "github" },
  { url: "https://www.facebook.com/nguyentheduytk/", name: "linkedin" },
  { url: "https://www.facebook.com/nguyentheduytk/", name: "x" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
