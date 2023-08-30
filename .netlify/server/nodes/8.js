

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/monforte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.1fc8b961.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/index.11ec2f83.js","_app/immutable/chunks/axios.82afda87.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/8.e8c8728d.css"];
export const fonts = [];
