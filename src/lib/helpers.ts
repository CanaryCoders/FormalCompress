import imageCompression from "browser-image-compression";
const defaultOptions = {
  maxSizeMB: 1,
};
export function compressFile(imageFile: File, options = defaultOptions) {
  return imageCompression(imageFile, options);
}

export function download(file: any) {
  const url = window.URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "");
  link.click();
  window.URL.revokeObjectURL(url);
}
