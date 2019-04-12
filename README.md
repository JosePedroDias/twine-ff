# Twine Fighting Fantasy

## purpose

To be able to adapt fighting fantasy stories or create new ones using twine. I'm using [twee2](https://dan-q.github.io/twee2/) and [Snowman](https://twinery.org/cookbook/terms/terms_storyformats.html#snowman) for the purposes of the book adaptation. The utility belt I created is [twine-ff.js](twine-ff.js), which should work just fine with other [twine-related engines](http://twinery.org/).

The API is briefly described in [API.md](API.md). A smaller twine example can be found in [Test.tw2](Test.tw2), but may be outdated. Refer to [TheSleepingDragon.tw2](TheSleepingDragon.tw2) for the book code.

All writing credits of the original adventure - The Sleeping Dragon - belong to the original author, Tammy Badowski. I adapted the book from [here](http://www.ffproject.com/download.htm). 🙇‍

If you lose yourself, take a peek at the graph I'm annotating as I adapt the book [here](https://josepedrodias.github.io/twine-ff/graph.html).

## setting up twee2 (on windows)

    choco install ruby
    gem install twee2

## setting up twee2 (on mac)

    gem install twee2

## creating a book w/ twee2

    twee2 build TheSleepingDragon.tw2 TheSleepingDragon.html

Then [visit the resulting HTML](https://josepedrodias.github.io/twine-ff/TheSleepingDragon.html) file.

## TODO LIST

- for this book
  - adapt the whole book
  - finish graphviz graph
  - test drive the thing
- later, maybe...
  - expand fighting to support optional luck tests, escaping and beatemup mode (several foes at the same time)
