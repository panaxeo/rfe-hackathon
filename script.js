$(document).ready(function() {
  // responsiveVoice.speak('You were a rude rude boy!');
  $('#play').click(function() {
    console.log('???');
  });

  $('#submit-button').click(function() {
    let text = $('#input').val();
    submitReply(text);
  });
});

function getRudeWordsSet(cb) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/badwords-en.txt',
      success: function(result) {
        let set = new Set();

        for (let s of result.split('\n')) {
          set.add(s);
        }

        resolve(set);
      },
      reject
    });
  });
}

async function checkBadWordExistence(text) {
  let words = await getRudeWordsSet();
  for (let sentence of text.split(/\./)) {
    for (let word of sentence.split(/\s/)) {
      if (words.has(word)) {
        return { word, sentence };
      }
    }
  }
  return null;
}

async function submitReply(text) {
  let existence = await checkBadWordExistence(text);
  if (existence) {
    responsiveVoice.speak('Would you really say? ' + existence.sentence);
  }
}
