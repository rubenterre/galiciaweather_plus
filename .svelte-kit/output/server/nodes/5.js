

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/coruna/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.85b86915.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/index.11ec2f83.js","_app/immutable/chunks/axios.82afda87.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/5.f66e8e8a.css"];
export const fonts = [];
