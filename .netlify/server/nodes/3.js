

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/buscar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.0e22db3c.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/index.11ec2f83.js"];
export const stylesheets = ["_app/immutable/assets/3.8c2da52b.css"];
export const fonts = [];
