// All brainrot personality type slugs for routing
export function typeSlug(code: string): string {
  return code.toLowerCase();
}

export function typeUrl(version: "brainrot" | "classic", code: string): string {
  return `/types/${version}/${typeSlug(code)}`;
}
