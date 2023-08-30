

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/santiago/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.715b2112.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/index.11ec2f83.js","_app/immutable/chunks/axios.82afda87.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/12.e6a25a73.css"];
export const fonts = [];
