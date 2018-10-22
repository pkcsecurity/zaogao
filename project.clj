(defproject zaogao "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "LATEST"]
                 [clj-http "LATEST"]
                 [hyperlight "0.3.1"]]
  :min-lein-version "2.7.1"
  :main ^:skip-aot zaogao.clj.core
  :profiles {:uberjar {:main zaogao.clj.core, :aot :all}}
  :plugins [[lein-cljsbuild "LATEST"]]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/zaogao/cljs"]
                :compiler
                {:output-to "resources/public/js/development/index.js"
                 :source-map true
                 :output-dir "resources/public/js/development"
                 :optimizations :none
                 :main zaogao.cljs.core
                 :asset-path "js/development"
                 :infer-externs false
                 :cache-analysis true
                 :pretty-print true}}
               {:id "release"
                :source-paths ["src/zaogao/cljs"]
                :compiler
                {:output-to "resources/public/js/release/index.js"
                 :source-map "resources/public/js/release/index.js.map"
                 :externs ["externs/externs.js"]
                 :main zaogao.cljs.core
                 :output-dir "resources/public/js/release"
                 :optimizations :advanced
                 :pseudo-names false}}]})
