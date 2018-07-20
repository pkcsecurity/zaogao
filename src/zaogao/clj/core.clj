(ns zaogao.clj.core
  (:gen-class)
  (:require [cheshire.core :as json]
            [immutant.web :as server]
            [zaogao.clj.routes :as r]))

(defn -main [& args]
  (let [host "0.0.0.0"
        port (or (System/getenv "PORT") "8080")]
    (if (= "production" (System/getenv "RING_ENV"))
      (server/run r/app :host host :port port)
      (server/run-dmc r/app :host host :port port))))
