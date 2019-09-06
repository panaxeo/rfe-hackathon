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

async function textContainsBadWord(text) {
  let words = await getRudeWordsSet();
  for (let word of text.split(/\s/)) {
    if (words.has(word)) {
      return true;
    }
  }
  return false;
}

async function submitReply(text) {
  let hasBadWord = await textContainsBadWord(text);
  console.log('has bad word', hasBadWord);
  if (hasBadWord) {
    responsiveVoice.speak('You were a rude rude boy!');
  }
}
