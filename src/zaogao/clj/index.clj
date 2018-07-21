(ns zaogao.clj.index
  (:require [hiccup.core :as html]
            [garden.core :as css]))

(def pri "rgba(113, 244, 149, 1)")
(def sec "rgba(19, 13, 253, 1)")

(def secondary-pri "#FFD339")
(def secondary-sec "#FB7422")

(def core-css
  (css/css 
    {:pretty-print? false}
    [:* {:box-sizing :border-box}]
    [:body {:font-size "16px"
            :line-height 1.5}]
    [:html :body
     {:font-family ["'Roboto'"]
      :color "#222"
      :font-weight 700}]
    [:h1 :h2 :h3 :h4 :h5 :h6
     {:line-height 1.25
      :letter-spacing "0.3px"}]
    [:h1 {:font-size "3.157em"
          :font-weight 700}]
    [:h2 {:font-size "2.369em"
          :font-weight 700}]
    [:h3 {:font-size "1.777em"
          :font-weight 700}]
    [:h4 {:font-size "1.333em"
          :font-weight 700}]
    [:h5 {:font-size "1em"
          :font-weight 700}]
    [:h6 {:font-size "0.75em"
          :font-weight 700}]
    [:.transition {:transition [[:all "0.2s" "ease-in-out"]]}]
    [:.border-wide {:border-width "3px"}]
    [:.border-super-wide {:border-width "5px"}]
    [:.black {:color "#000"}]
    [:.white {:color "#fff"}]
    [:.border-white {:color "#fff"}]
    [:.bg-white {:background-color "#fff"}]))

(def primary-css
  (css/css 
    {:pretty-print? false}
    [:.pri {:color pri}]
    [:.bg-pri {:background-color pri}]
    [:.border-pri {:border-color pri}]
    [:.sec {:color sec}]
    [:.bg-sec {:background-color sec}]
    [:.border-sec {:border-color sec}]))

(def secondary-css
  (css/css 
    {:pretty-print? false}
    [:.pri {:color secondary-pri}]
    [:.bg-pri {:background-color secondary-pri}]
    [:.border-pri {:border-color secondary-pri}]
    [:.sec {:color secondary-sec}]
    [:.bg-sec {:background-color secondary-sec}]
    [:.border-sec {:border-color secondary-sec}]))

(defn style [href]
  [:link 
   {:rel "stylesheet" 
    :href href}])

(defn index [chinese?]
  (html/html {:mode :html}
             [:head
              [:meta {:charset "utf-8"}]
              [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
              [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
              (style "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css")
              (style "https://cdnjs.cloudflare.com/ajax/libs/basscss/8.0.4/css/basscss.min.css")
              (style "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
              (style "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css")
              [:style core-css]
              [:style (if chinese? secondary-css primary-css)]
              [:title (if chinese? "12 Characteristics")]]
             [:body
              [:div#app]
              [:script {:src 
                        (if (= "production" (System/getenv "RING_ENV"))
                          "/js/release/index.js"
                          "/js/development/index.js")}]
              [:script {:async :async
                        :defer :defer
                        :src "https://maps.googleapis.com/maps/api/js?key=AIzaSyCxFYjEyBPCEJt0UzSEjtduMWEZ1cmYikI"}]]))
