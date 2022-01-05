import UserInfo from './UserInfo.js';
import UserList from './UserList.js';

export default function UserPage({
  $target,
  initialState,
  onScrollEnd,
  onClick,
  onSave,
}) {
  const $userPage = document.createElement('div');
  $userPage.className = 'userPage';

  $target.appendChild($userPage);

  this.state = initialState;
  const userInfo = new UserInfo({
    $target: $userPage,
    initialState: {
      thumbnail: this.state.thumbnail,
      nickname: this.state.nickname,
      totalResults: this.state.totalResults,
    },
  });
  const userList = new UserList({
    $target: $userPage,
    initialState: {
      items: this.state.items,
      selectedItems: this.state.selectedItems,
    },
    onScrollEnd,
    onClick,
    onSave,
  });

  this.setState = (nextState) => {
    this.state = nextState;

    userInfo.setState({
      thumbnail: this.state.thumbnail,
      nickname: this.state.nickname,
      totalResults: this.state.totalResults,
    });

    userList.setState({
      items: this.state.items,
      selectedItems: this.state.selectedItems,
    });
  };
}
