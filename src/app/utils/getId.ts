export function getId(url: string) {
  const urlUpdated = new URL(url);
  const path = urlUpdated.pathname.split('/');
  const id = path[path.length - 1];

  return id;
}
