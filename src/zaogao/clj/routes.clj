(ns zaogao.clj.routes
  (:require [ring.middleware.content-type :as ct]
            [compojure.core :as r]
            [compojure.route :as route]
            [zaogao.clj.index :as index]
            [hiccup.core :as html]
            [cognitect.transit :as edn]
            [ring.middleware.format :as fmt]))

(defn index-response-fn [_]
  {:status 200 
   :headers {"Content-Type" "text/html"}
   :body index/index})

(r/defroutes routes
  (r/GET "/" [] index-response-fn)
  (route/resources "/")
  (route/not-found nil))

(def app
  (-> routes
      (fmt/wrap-restful-format :formats [:transit-json])
      (ct/wrap-content-type)))
