// TODO: Update this to adhere to Clean Code principles
// https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#function-arguments-2-or-fewer-ideally

export default function Input({ id, placeholder, additionalClasses = "" }) {
  return `
    <input 
      id="${id}" 
      name="${id}"
      class="w-full px-3 py-2 border rounded shadow-sm ${additionalClasses}" 
      type="text" 
      placeholder="${placeholder}"
      required
    />
  `;
}
