# trivia-game

I used this assignment as motivation to finally get Clojurescript set up, or at least enough of it to do the assignment, and to start learning that language. The resulting game is not by any means pretty, because as usual I left the styling until the end and then ran out of time. But it works perfectly.

The project file structure is generated by Leiningen, a popular Clojure build tool, and most of it is superfluous. The logic is all in `src/trivia_game/core.cljs`. This is compiled into `resources/public/cljs/out/trivia_game/core.js`, but that file is not readable. The HTML skeleton is `resources/public/index.html`, and styling is `resources/public/style.css`.

I again used a primitive imitation of the React/Redux architecture, with a single store that holds an immutable game state, modified only by actions which are combined with the state by reducers, and rendered/reconciled to create the page.

It's unlikely that whoever ends up grading this will know Clojure (sorry!) but you may be able to follow along with the help of [this cheatsheet](https://cljs.info/cheatsheet/), which describes nearly everything I used. The main exception is that I used a library called [hipo](https://github.com/jeluard/hipo), which provides a convenient HTML-equivalent Clojure representation (e.g., `[:div#ident.class1.class2 {:attr val} children ...]` maps to `<div id="ident" class="class1 class2" attr="val"><children ...></div>`) and also can perform reconciliation.

Finally, instead of using the Javascript timer API explicitly, I decided to try out Clojure's famous [core.async](https://github.com/clojure/core.async) library. It only appears once, where I set up a loop to dispatch a `tick` action once per second. The loop runs asynchronously, allowing the rest of the program to execute.