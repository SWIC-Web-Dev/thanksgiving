export default function DishRow({
  name,
  status,
  assignedTo,
  estimatedTime,
  temperature,
}) {
  // Fixed: Object destructuring
  return `
    <tr class="border-b">
      <td class="p-2">${name}</td>
      <td class="p-2">${status}</td>
      <td class="p-2">${assignedTo}</td>
      <td class="p-2">${estimatedTime}</td>
      <td class="p-2">${temperature}</td>
    </tr>
  `;
}
