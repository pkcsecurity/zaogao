(ns daomei.cljs.controller
  (:require [cljs-http.client :as http]
            [cljs.core.async :as chan]))

(defn valid-domain? [domain]
  (chan/go
    (.log js/console
          (get-in 
            (chan/<!
              (http/post "/domain/valid"
                         {:transit-params {:domain domain}}))
            [:body :valid?]))))
