/*
https://twinery.org/cookbook/
https://dan-q.github.io/twee2/documentation.html
*/

window.setup = window.setup = {};

setup.roll1d6 = () => _.random(1, 6);

setup.roll2d6 = () => _.random(1, 6) + _.random(1, 6);

setup.prepare = (s) => {
  if (s.prepared) {
    return;
  }

  s.prepared = true;

  s.inventory = [];
  s.defeated = [];

  s.skill = setup.roll1d6() + 6;
  s.stamina = setup.roll2d6() + 12;
  s.luck = setup.roll1d6() + 6;

  s.skillMax = s.skill;
  s.staminaMax = s.stamina;
  s.luckMax = s.luck;

  $(document.createElement('div')).attr('id', 'sidebar').insertBefore('#passage');

  function afterShowPassage() {
    $('#sidebar').html(window.story.render('Header'));
  }

  $(window).on('showpassage:after', afterShowPassage);
  afterShowPassage();
  setup.updateStats = afterShowPassage;
};

setup.testSkill = (s) => {
  const v = setup.roll1d6() + setup.roll1d6();
  return v <= s.skill;
};

setup.testLuck = (s) => {
  const v = setup.roll1d6();
  return v <= s.luck;
};

setup.take = (s, item) => {
  s.inventory.push(item);
  setup.updateStats();
};

setup.has = (s, item) => {
  return s.inventory.indexOf(item) !== -1;
};

setup.drop = (s, item) => {
  s.inventory = s.inventory.filter((it) => it !== item);
  setup.updateStats();
};

setup.defeated = (s, enemyName, i = 0) => {
  const enemy = s.defeated[s.defeated.length - 1 - i];
  return enemy === enemyName;
}

setup.now = () => {
  const st = window.story;
  return st.passages[ st.history[st.history.length -1] ].name;
}

setup.refresh = () => {
  window.story.show( setup.now() );
}

setup.fight = (s, enemies) => {
  function round() {
    const enemyAttackStrength = setup.roll2d6() + enemy.skill;
    const ourAttackStrength = setup.roll2d6() + s.skill;
    const attacks = 'enemy:' + enemyAttackStrength + ', we:' + ourAttackStrength;
    if (ourAttackStrength > enemyAttackStrength) {
      console.log(`  ${attacks} -> you wounded the enemy`);
      enemy.stamina -= 2;
    }
    else if (enemyAttackStrength > ourAttackStrength) {
      console.log(`  ${attacks} -> the enemy wounded you`);
      s.stamina -= 2;
    }
    else {
      console.log(`  ${attacks} -> draw`);
    }
    setup.updateStats();
    if (s.stamina <= 0) {
      window.alert('game over');
      throw 'you died';
    }

    if (enemy.stamina > 0) {
      round();
    } else {
      console.log(enemy.name + ' died')
      s.defeated.push(enemy.name);
    }
  }

  let enemy;
  while (enemy = enemies.shift()) {
    console.log('fighting ' + enemy.name);
    round();
  }
};
