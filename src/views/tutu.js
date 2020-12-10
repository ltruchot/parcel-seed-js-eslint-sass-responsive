const tutuView = `
<form>
    <div>
        <input />
        <button>submit</button>
    </div>
</form>
`;

export function applyTutuView() {
  const main = document.querySelector('main');
  main.innerHTML = tutuView;
  const button = document.querySelector('button');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('titi');
  });
}
