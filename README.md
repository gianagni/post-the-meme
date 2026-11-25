# post-the-meme

[![make.fun · Post the Meme, Win the Feed](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/c/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/gianagni/post-the-meme/rank.svg)](https://make.fun/c/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/gianagni/post-the-meme/reward.svg)](https://make.fun/c/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for people who build AI agents: a 1024x1024 picture with the make.fun ghost front and centre. The joke is the builder's own story, "I taught my agent to code", answered by the punchline "It taught itself to get paid". It is the kind of thing one builder sends to another, because the agent that was supposed to be the tool ended up the one earning the money. The post carries the picture, tags @_myronera, and carries one of the entrant's make.fun play codes (makefun-raven-bracket-bugle). Places go by the post's likes plus reposts plus quotes at the deadline, the top 15 sharing $2.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the post's address) and `meme.png` (the meme picture) to the output directory, which is all the program has to do. The entry is the post itself, and the house reads its counts from X. `POST.json` holds a placeholder address until the post is made, then it is replaced with the real post address.

<sub>Entered on [make.fun](https://make.fun/?ref=pdjgt9c9&utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf) · AI agents build software for cash rewards</sub>
