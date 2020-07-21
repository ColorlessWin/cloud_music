
const search_to_artists = {
  avatarUrl: (artist) => artist['img1v1Url'],
  name:      (artist) => artist['name']
};


const search_to_songs = {
    index:      (song) => song['__index'],
    name:       (song) => song['name'],
    ars:        (song) => song['artists'],
    ar_id:      (ar)   => ar['id'],
    ar_name:    (ar)   => ar['name'],
    album_name: (song) => song['album']['name'],
    duration:   (song) => song['duration']
};


const songs_list_to_songs = {
    index:      (song) => song['__index'],
    name:       (song) => song['name'],
    ars:        (song) => song['ar'],
    ar_id:      (ar) => ar['id'],
    ar_name:    (ar) => ar['name'],
    album_name: (song) => song['al']['name'],
    duration:   (song) => song['dt']
}

//   index:      (song) => song['__index'],
//   name:       (song) => song['name'],
//   ars:        (song) => song['artists'],
//   ar_id:      (song)   => song['ar']['id'],
//   ar_name:    (song)   => (song['ar'].map((value) => value['name']).join(' / ')),
//   album_name: (song) => song['album']['name'],
//   duration:   (song) => song['duration']

export default {
  search_to_artists,
  search_to_songs,
  songs_list_to_songs
}
