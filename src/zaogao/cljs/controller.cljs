(ns zaogao.cljs.controller
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

(defn chinese? [on-success]
  (chan/go 
    (on-success
      (= "Chinese"
         (get-in (chan/<! (http/get "/chinese"))
                 [:body :language])))))


(defn add-pin [address]
  (let [gc (google.maps.Geocoder.)]
    (.geocode gc
      #js {:address address}
      (fn [obj]
        (when-let [lat-lng (aget obj 0 "geometry" "location")]
          (let [lat (.lat lat-lng)
                lng (.lng lat-lng)]
            (chan/go
              (chan/<!
                (http/post "/point"
                           {:transit-params {:lat lat
                                             :lng lng}})))))))))
