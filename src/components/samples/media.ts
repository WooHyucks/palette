export const photo = (id: string, width = 1200, height?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}${
    height ? `&h=${height}` : ""
  }&q=80`;
