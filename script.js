const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const msgForm = document.getElementById('msgForm');
if (msgForm) {
  msgForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fName').value;
    const email = document.getElementById('fEmail').value;
    const msg = document.getElementById('fMsg').value;
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hkanhiya123@gmail.com?subject=Portfolio%20contact%20from%20${encodeURIComponent(name)}&body=${body}`;
  });
}
