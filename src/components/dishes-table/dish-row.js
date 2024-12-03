export default function DishRow({
  name,
  status,
  assignedTo,
  estimatedTime,
  temperature,
}) {
  return `
    <tr class="border-b *:p-2">
      <td>${name}</td>
      <td>${status}</td>
      <td>${assignedTo}</td>
      <td>${estimatedTime}</td>
      <td>${temperature}</td>
    </tr>
  `;
}
