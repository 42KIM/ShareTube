export default function AuthPage({ $target }) {
  const $authPage = document.createElement('div');
  $authPage.className = 'authPage';

  $target.appendChild($authPage);

  this.render = () => {
    $authPage.innerHTML = `
      <button class="authPage__signInButton" type="button">
        <img src='https://user-images.githubusercontent.com/75300807/134757459-d6d0be61-fca1-4694-bbfd-eae1ad396e2e.png'>
      </button>
    `;
  };

  $authPage.addEventListener('click', (e) => {
    const $button = e.target.closest('button');

    if ($button) {
      location.href =
        'https://accounts.google.com/o/oauth2/auth?client_id=728301967201-lktppiaq5m7bhf1005hl085mget3dgam.apps.googleusercontent.com&redirect_uri=http://localhost:5000/callback&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube&response_type=token';
    }
  });
}
