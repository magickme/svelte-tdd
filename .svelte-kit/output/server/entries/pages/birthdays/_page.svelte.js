import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
const Birthday = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { dob } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.dob === void 0 && $$bindings.dob && dob !== void 0)
    $$bindings.dob(dob);
  return `<span style="display: inline-block; width: 100px;"><strong>${escape(name)}</strong></span> <span style="display: inline-block; width: 100px;">${escape(dob)}</span>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-l2gpsr">Birthday list</h1> <ol>${each(data.birthdays, (birthday) => {
    return `<li>${validate_component(Birthday, "Birthday").$$render($$result, Object.assign({}, birthday), {}, {})} </li>`;
  })}</ol>`;
});
export {
  Page as default
};
