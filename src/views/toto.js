const totoView = `
<div id="toto" style="display:none;>
    <ul>
        <li>yo !</li>
        <li>ya !</li>
    </ul>
</div>
`;
export function applyTotoView() {
  const main = document.querySelector('main');
  main.innerHTML = totoView;
}
