function lettersOnly(textInput) {
  var availableSigns = /[^a-z]/gi;
  textInput.value = textInput.value.replace(availableSigns, '');
};

function damage(spellString) {
  var cost = 0;
  if (!spellString.startsWith('fe') || !spellString.endsWith('ai'))
    document.getElementById('score').innerHTML = cost;
  return cost;

  var spellPower = 0;

  var subSpells = [
    ['dai', 5],
    ['jee', 3],
    ['ain', 3],
    ['je', 2],
    ['ne', 2],
    ['ai', 2],
    ['fe', 1]
  ];

  subSpells.forEach(function(val) {
    var spell = val[0];
    var value = val[1];
    var len = spellString.length;
    spellString = spellString.replace(new RegExp(spell, 'g'), '|');
    var diffLength = len - spellString.length;
    var numberOfSpells = diffLength / (spell.length - 1);
    cost = cost + numberOfSpells * value;
  });
  spellString = spellString.replace(new RegExp('|', 'g'), '');
  cost = cost - spellString.length;
  if (cost <= 0) {
    cost = 0;
  }
  document.getElementById('score').innerHTML = cost;
  return cost;
};



button.addEventListener("click", function(e) {
  e.preventDefault()
  var spellString = document.getElementById('textInput').value;
  damage(spellString);
});
