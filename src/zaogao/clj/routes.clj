(ns zaogao.clj.routes
  (:require [ring.middleware.content-type :as ct]
            [compojure.core :as r]
            [compojure.route :as route]
            [zaogao.clj.index :as index]
            [hiccup.core :as html]
            [clj-http.client :as client]
            [cognitect.transit :as edn]
            [ring.middleware.format :as fmt]))

(defn chinese? []
  (= "Chinese" (System/getenv "DAOMEI_LANG")))

(defn index-response-fn [_]
  {:status 200 
   :headers {"Content-Type" "text/html"}
   :body (index/index (chinese?))})

(defn chinese-fn [_]
  {:status 200
   :body {:language (System/getenv "DAOMEI_LANG")
          :theme (System/getenv "DAOMEI_THEME")}})

(defn point-fn [{p :params}]
  (client/post "http://127.0.0.1:8000/point"
               {:form-params p
                :content-type :transit+json
                :transit-opts {:encode {:handlers {}}
                               :decode {:handlers {}}}})
  {:status 200})

(r/defroutes routes
  (r/GET "/" [] index-response-fn)
  (r/GET "/chinese" [] chinese-fn)
  (r/POST "/point" [] point-fn)
  (route/resources "/")
  (route/not-found nil))

(def app
  (-> routes
      (fmt/wrap-restful-format :formats [:transit-json])
      (ct/wrap-content-type)))
