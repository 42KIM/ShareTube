export const DATA = {
  USERINFO: 'userinfo',
  SUBSCRIPTIONS: 'subscriptions',
  SHARED: 'shared',
};

export const trim = (fetchedData, dataName) => {
  if (dataName === 'userinfo') {
    return {
      id: fetchedData.id,
      thumbnail: fetchedData.picture,
      nickname: fetchedData.name,
    };
  }

  if (dataName === 'subscriptions') {
    return {
      totalResults: fetchedData.pageInfo.totalResults,
      items: fetchedData.items,
      nextPageToken: fetchedData.nextPageToken,
    };
  }

  if (dataName === 'shared') {
    return {
      userId: fetchedData.user,
      items: fetchedData.channels,
    };
  }
};

export const format = (user, nickname, selectedItems) => {
  return {
    user,
    nickname,
    channels: selectedItems,
  };
};
