# twine-ff API

`prepare(s)` sets up character

`roll1d6()` returns number between 1 and 6
`roll2d6()` returns number between 1 and 12 (2 dice)

`testSkill(s)` tests skill, updates result to context `wasSkilled` and updates passage
`testLuck(s)` tests luck, updates result to context `wasLucky` and updates passage

`take(s, itemName)` takes item if not already carrying it, updates passage and stats
`has(s, itemName)` returns true if item is part of the inventory
`drop(s, itemName)` drops item if carrying it, updates passage and stats
`decrease(s, attrName, n)` decreate numeric context attribute if n is possible. updates passage and stats

`defeated(s, enemyName, lastN=0)` returns true if nth (from end) enemy defeated was named x
`now(s)` returns current passage name
`updateStats(s)` rerenders stats sidebar
`refresh(s)` rerender current passage

`prepareFight(s, enemies, config)` renders context fight if any. `enemies` is an array of `{name, skill, stamina}` foes. `config` defines how fight takes place.
