// TODO: Update this to adhere to Clean Code principles
// https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#function-arguments-2-or-fewer-ideally

export default function Input(id, placeholder, addlClasses = "") {
  return `
    <input id="${id}" class="input ${addlClasses}" type="text" placeholder="${placeholder}" />
  `;
}
