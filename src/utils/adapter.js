
const search_to_artists = {
  avatarUrl: (artist) => artist['img1v1Url'] + '?param=50y50',
  name:      (artist) => artist['name'],
  alias:     (artist) => artist['alias'],
};


const search_to_album = {
  cover:    (album) =>  album['picUrl'] + '?param=50y50',
  name :    (album) =>  album['name'],
  artist:   (album) =>  {
    return  {
      name: album['artist']['name'],
      id:   album['artist']['id'],
      alia: album['artist']['alias']
    }
  },
}

const search_to_video = {
  coverUrl: (video) => video['coverUrl'] + '?param=200y110',
  title:    (video) => video['title'],
  author:   (video) => {
    return {
      name: video['creator'][0]['userName'],
      id  : video['creator'][0]['userId']
    }
  },
  duration: (video) => video['durationms'],
  id:       (video) => video['vid'],
  play:     (video) => video['playTime']
}

const search_to_users = {
  avatarUrl: (user) => user['avatarUrl'] + '?param=50y50',
  uid:       (user) => user['userId'],
  name:      (user) => user['nickname'],
  synopsis:  (user) => user['signature']
}

const search_to_playlists = {
  cover: (songs) =>  songs['coverImgUrl'] + '?param=50y50',
  name:  (songs) =>  songs['name'],
  total: (songs) =>  songs['trackCount'],
  id:    (songs) =>  songs['id'],
  creator:(songs)=>  {
    return {
      name: songs['creator']['nickname'],
      id:  songs['creator']['userId']
    }
  }
}


const search_to_songs = {
    index     :  (song) => song['__index'],
    name      :  (song) => song['name'],
    artists   :  (song) => song['artists'].map((value) => {
      return {
        name: value['name'],
        id: value['id'],
        alia: value['alias']
      }
    }),
    album_name:  (song) => song['album']['name'],
    duration  :  (song) => song['duration']
};


const songs_list_to_songs = {
    index:      (song) => song['__index'],
    name:       (song) => song['name'],
    artists:    (song) => song['ar'].map((value) => {
      return {
        name: value['name'],
        id: value['id'],
        alia: value['alias']
      }
    }),
    album_name: (song) => song['al']['name'],
    duration:   (song) => song['dt']
}

export default {
  search_to_artists,
  search_to_songs,
  songs_list_to_songs,
  search_to_album,
  search_to_playlists,
  search_to_users,
  search_to_video
}
