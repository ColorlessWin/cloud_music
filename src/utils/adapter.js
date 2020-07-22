
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
  search_to_album
}
