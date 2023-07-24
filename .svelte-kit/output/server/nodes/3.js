import * as server from '../entries/pages/birthdays/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/birthdays/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/birthdays/+page.server.js";
export const imports = ["_app/immutable/nodes/3.7bd11d4a.js","_app/immutable/chunks/scheduler.d35e8dc7.js","_app/immutable/chunks/index.e88137da.js"];
export const stylesheets = [];
export const fonts = [];
