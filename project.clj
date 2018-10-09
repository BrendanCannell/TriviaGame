(defproject trivia-game "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [org.clojure/core.match "0.3.0-alpha5"]
                 [org.clojure/core.async "0.4.474"]
                 [hipo "0.5.2"]]
  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.16"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
  :cljsbuild {:builds [{:id "dev"             ; development configuration
                        :source-paths ["src"] ; Paths to monitor for build
                        :figwheel false        ; Enable Figwheel
                        :compiler {:main trivia-game.core     ; your main namespace
                                   :asset-path "cljs/out"                       ; Where load-dependent files will go, mind you this one is relative
                                   :output-to "resources/public/cljs/main.js"   ; Where the main file will be built
                                   :output-dir "resources/public/cljs/out"      ; Directory for temporary files
                                   :source-map-timestamp true}}                  ; Sourcemaps hurray!
                        {:id "dist"
                         :source-paths ["src"]
                         :compiler {:output-to "resources/public/cljs/main.js"
                                    :optimizations :whitespace
                                    :pretty-print true}}
]}
  :figwheel {:css-dirs ["resources/public/css"]}
  :jvm-opts ["-Xmx6g"]) ; Prevents JVM stack overflow