export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /\/$/,
  "",
);

export function withBasePath(path: string): string {
  if (!path.startsWith("/") || !BASE_PATH) return path;
  return `${BASE_PATH}${path}`;
}

/** Normalize pathname for route checks (basePath + trailing slash on GitHub Pages). */
export function normalizeRoutePath(pathname: string): string {
  let path = pathname || "/";
  if (BASE_PATH && path.startsWith(`${BASE_PATH}/`)) {
    path = path.slice(BASE_PATH.length);
  } else if (BASE_PATH && path === BASE_PATH) {
    path = "/";
  }
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path || "/";
}

export function isMenuRoute(pathname: string): boolean {
  return normalizeRoutePath(pathname) === "/menu";
}
