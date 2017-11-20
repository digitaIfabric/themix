var TidalAPI = require('tidalapi');
require('dotenv').config()

var api = new TidalAPI({
    username: process.env.TIDAL_USERNAME,
    password: process.env.TIDAL_PASSWORD,
    token: process.env.TIDAL_TOKEN,
    username: 'your-username',
    password: 'your-password',
    token: 'your-token',
    clientVersion: '2.2.1--7',
    quality: 'Standard'
});

api.getStreamURL({id: 78990816}, function(data){
    console.log(data)
})

// api.getStreamURL({id:22560696}, function (data) {
//     var url = quality === 'lossless' ? data.url : 'rtmp://'+data.url;
//     ffmpeg(url).format('wav').pipe(new Speaker(), {end:true}).on('finish', function () {
//         console.log('track finished');
//     });
// });
api.search({type: 'artists', query: 'Big Shaq', limit: 1}, function(data){
  console.log('=================== BIQ SHAQ ====================',data.artists);
})
//
api.search({type: 'albums', query: 'Silent Alarm', limit: 1}, function(data){
  console.log('============ Silent Alarm ============= ',data.albums);
})
//
api.search({type: 'tracks', query: '99 Problems', limit: 1}, function(data){
  console.log(data.tracks);
})
//
// api.search({type: 'tracks,albums,artists', query: 'Man Not Hot', limit: 1}, function(data){
//   console.log('============== TRACK MAN NOT HOT ==============',data.tracks);
//   // console.log('=== Data album ====',data.albums);
//   // console.log('=== Data artists ====',data.artists);
// })
//
// api.getTrackInfo({id: 78990816}, function(data){
//   console.log("===================== TRACK INFO ==================================",data)
// })
//
// api.getStreamURL({id: 58990486}, function(data){
//   console.log('===================== STREAM URL TEST ====================================',data)
// })
//
// api.getStreamURL({id: 64518}, function(data){
//   console.log('===================== STREAM URL TEST 2 ====================================',data)
// })
//
//
api.getVideoStreamURL({id:  81382132}, function(data){
  console.log('=====================VIDEO STREAM=====================================', data)
})
//
// console.log(api.getArtURL('24f52ab0-e7d6-414d-a650-20a4c686aa57', 1280)) //coverid
//
// api.getArtistVideos({id: 64518, limit: 2}, function(data){
//   console.log('==================== ARTIST VIDEOS =======================================',data)
// })
//
// api.genMetaflacTags({id: 22560696, coverPath: './albumart.jpg', songPath: './song.flac'}, function(data){
//   console.log(data)
// })