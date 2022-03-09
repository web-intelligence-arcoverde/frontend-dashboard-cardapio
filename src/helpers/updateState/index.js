export default function updateState(items, state) {
  const index = items.findIndex((item) => item.id === state.id);
  return [...items.slice(0, index), { ...state }, ...items.slice(index + 1)];
}
