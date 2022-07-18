import urlJoin from 'url-join';

export function basePath(relativeUrl: string): string {
  const base = import.meta.env.BASE_URL;
  return urlJoin(base, relativeUrl);
}
