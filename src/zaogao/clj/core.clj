(ns zaogao.clj.core
  (:gen-class)
  (:require [hyperlight.http-proxy :as http-proxy]))

(defn -main [& args]
  (http-proxy/start-server (http-proxy/create-handler {:url "http://www.example.com"}) {:port 3000}
  )
