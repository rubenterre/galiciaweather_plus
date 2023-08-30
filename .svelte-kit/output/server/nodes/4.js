

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/configuracion/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.e3fdb03f.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/index.11ec2f83.js"];
export const stylesheets = ["_app/immutable/assets/4.c93f0777.css"];
export const fonts = [];
