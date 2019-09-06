function getRudeWords(cb) {
  $.ajax({
    url: '/rude-words.txt',
    success: function(result) {
      cb(null, result.split('\n'));
    },
    cb
  });
}

getRudeWords(function(err, words) {
  console.log('??', err, words);
});
