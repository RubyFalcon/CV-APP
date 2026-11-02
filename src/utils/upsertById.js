export function upsertById(list, entry) {
  const index = list.findIndex(item => item.id === entry.id);
  if (index !== -1) {
    // Update existing entry
    return [
      ...list.slice(0, index),
      entry,
      ...list.slice(index + 1)
    ];
  } else {
    // Add new entry
    return [...list, entry];
  }
}