const YOUTUBE_API_END_POINT = 'https://www.googleapis.com';
const SHARETUBE_API_END_POINT = 'http://localhost:1337';

export const API = {
  USERINFO: '/oauth2/v1/userinfo',
  SUBSCRIPTIONS:
    '/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=50',
};

export const checkUserdata = async (url, options = {}) => {
  try {
    const res = await fetch(`${SHARETUBE_API_END_POINT}${url}`, {
      ...options,
    });

    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    alert(e.message);
  }
};

export const fetchSubscriptions = async (url, accessToken, options = {}) => {
  try {
    const res = await fetch(`${YOUTUBE_API_END_POINT}${url}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // 'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    alert(e.message);
  }
};

export const fetchShared = async (url = '', options = {}) => {
  try {
    const res = await fetch(`${SHARETUBE_API_END_POINT}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    alert(e.message);
  }
};
