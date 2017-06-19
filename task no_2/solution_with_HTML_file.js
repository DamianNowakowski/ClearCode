function lettersOnly(textInput) {
  var availableSigns = /[^a-z]/gi;
  textInput.value = textInput.value.replace(availableSigns, '');
};

function damage(spellString) {
  var cost = 0;
  var start = spellString.search('fe');
  var last = spellString.lastIndexOf('ai');

  if (start < 0 || last < 0 || spellString.indexOf('fe', start + 1) > 0)
    return 0

  spellString = spellString.substring(start, last + 2);
  var table = new Array(spellString.length).fill(0);
  table[1] = 1;
  var subSpells = [
    ['dai', 5],
    ['jee', 3],
    ['ain', 3],
    ['je', 2],
    ['ne', 2],
    ['ai', 2]
  ];

  for (var i = 2; i < spellString.length; i++) {
    subSpells.forEach(function(val) {
      var spell = val[0];
      var value = val[1];
      var subSpellEnd = i + 1;
      var subSpellStart = subSpellEnd - spell.length;
      var maybeSpell = spellString.substring(subSpellStart, subSpellEnd);
      if (maybeSpell === spell) {
        var cost = table[i - spell.length] + value;
        table[i] = Math.max(table[i], cost);
      }
    });
    if (table[i] == 0) {
      table[i] = table[i - 1] - 1;
    }
  }
  if (table[table.length - 1] < 0) {
    return 0;
  } else {
    return table[table.length - 1];
  }

};

var button = document.querySelector('.button');
button.addEventListener("click", function(e) {
  e.preventDefault()
  var spellString = document.querySelector('.textInput').value;
  document.querySelector('.score').innerHTML = damage(spellString);
});
/*
function test() {
  if (damage('dskokokoai') == 0) {
    console.log('OK_1');
  } else {
    console.log('fail 1');
  };
  if (damage('feeai') == 2) {
    console.log('OK_2');
  } else {
    console.log('fail 2');
  };
  if (damage('feaineain') == 7) {
    console.log('OK_3');
  } else {
    console.log('fail 3');
  };
  if (damage('jee') == 0) {
    console.log('OK_4');
  } else {
    console.log('fail 4');
  };
  if (damage('fefefefefeaiaiaiaiai') == 0) {
    console.log('OK_5');
  } else {
    console.log('fail 5');
  };
  if (damage('fdafafeajain') == 1) {
    console.log('OK_6');
  } else {
    console.log('fail 6');
  };
  if (damage('fexxxxxxxxxxai') == 0) {
    console.log('OK_7');
  } else {
    console.log('fail 7');
  };

}
*/
