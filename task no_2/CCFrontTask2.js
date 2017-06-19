exports.damage = function(spellString) {
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
