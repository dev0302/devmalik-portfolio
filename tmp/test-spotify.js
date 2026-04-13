const client_id = '2ac0427d653e48309656757b9440fa45';
const client_secret = '96bdc46304a143f8ae477abb46f90824';
const refresh_token = 'AQBXgbDrlz8dRAqykHAnVhvKNdSINQq3c1Aj2T-PPfN79CY8FCBph3DZnCJn0uCO533OJreEiQyJ9_-ZCQwGmkuxkDG27_3fYL4K5hsk0fNDoT0u6ABO-9XSOUZFDw_u2Lc';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function test() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    }),
  });

  const data = await response.json();
  console.log('Token response:', data);
  
  if (data.access_token) {
      const nowPlaying = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: { Authorization: `Bearer ${data.access_token}` }
      });
      console.log('Now playing status:', nowPlaying.status);
      if (nowPlaying.status === 204) {
          console.log('Nothing currently playing (204)');
      } else if (nowPlaying.status === 200) {
          const song = await nowPlaying.json();
          console.log('Currently playing SONG:', song?.item?.name, 'by', song?.item?.artists?.[0]?.name);
      } else {
          console.log('Error status:', nowPlaying.status, await nowPlaying.text());
      }
  }
}

test();
