// Utility to resolve asset paths for GitHub Pages subpath deployment (/portfolio/)
export function getAssetPath(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/portfolio/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  let cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (cleanPath.startsWith('public/')) {
    cleanPath = cleanPath.slice(7);
  }
  return `${cleanBase}${cleanPath}`;
}
