export default function SharePage({ $target, initialState }) {
  const $sharePage = document.createElement('div');
  $sharePage.className = 'sharePage';

  $target.appendChild($sharePage);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    console.log('here', this.state);
    this.render();
  };

  this.render = () => {
    $sharePage.innerHTML = `
      <span>
        ${this.state.nickname}님이 공유한 YouTube 구독 목록입니다.
      </span>
      <div class="userList__contents">
        ${this.state.items
          .map(
            (item) => `
          <div id=${item.channelId} class="userList__item">
            <img class="userList__thumbnail" src="${item.thumbnail}" alt="channel-thumbnail">
            <span class="userList__title">${item.title}</span>
          </div>
        `,
          )
          .join('')}
      </div>
    `;
  };

  $sharePage.addEventListener('click', (e) => {
    if (e.target.className === 'userList__thumbnail') {
      const $item = e.target.closest('div');
      location.href = `https://www.youtube.com/channel/${$item.id}`;
    }
  });
}
