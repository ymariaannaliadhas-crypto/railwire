const imageAssets = import.meta.glob<string>("../../assets/rw/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const pdfAssets = import.meta.glob<string>("../../assets/rw/**/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

const imageMap: Record<string, string> = {};
const pdfMap: Record<string, string> = {};

for (const [path, url] of Object.entries(imageAssets)) {
  const key = path
    .replace("../../assets/rw/", "")
    .replace(/\.[^.]+$/, "")
    .replace(/\//g, "_");

  imageMap[key] = url;
}

for (const [path, url] of Object.entries(pdfAssets)) {
  const filename = path.split("/").pop();
  if (!filename) continue;

  pdfMap[filename.toLowerCase()] = url;
}

export const img = (path: string): string => {
  const key = path.replace(/\.[^.]+$/, "").replace(/\//g, "_");
  return imageMap[key] ?? "";
};

export const file = (filename: string): string => {
  return pdfMap[filename.toLowerCase()] ?? "";
};
