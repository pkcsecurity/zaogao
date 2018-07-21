(defproject zaogao "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "LATEST"]
                 [cheshire "5.8.0"]
                 [org.immutant/web "LATEST"]
                 [ring/ring-core "LATEST"]
                 [ring/ring-devel "LATEST"]
                 [org.clojure/clojurescript "LATEST"]
                 [com.cognitect/transit-clj "0.8.309"]
                 [com.cognitect/transit-cljs "0.8.256"]
                 [garden "LATEST"]
                 [compojure "LATEST"]
                 [hiccup "LATEST"]
                 [reagent "LATEST"]
                 [org.clojure/core.async "0.4.474"]
                 [cljs-http "LATEST"]
                 [ring-middleware-format "0.7.2"]
                 [lein-cljsbuild "LATEST"]
                 [cljsjs/chartjs "LATEST"]]
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
