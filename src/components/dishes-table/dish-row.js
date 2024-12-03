import Button from "../button.js";

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
      <td>${Button({ text: "Delete", additionalClasses: "bg-red-500 rounded text-white px-2 py-1" })}</td>
    </tr>
  `;
}
