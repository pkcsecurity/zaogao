(ns zaogao.cljs.radar
  (:require [reagent.core :as r]
            [cljsjs.chartjs]))

(def colors
  [[127,201,127]
   [190,174,212]
   [253,192,134]
   [255,255,153]
   [56,108,176]])

(defn array->bg [[r g b]]
  (str "rgba(" r "," g "," b ",0.95)"))

(defn array->border [[r g b]]
  (str "rgba(" r "," g "," b ",1)"))

(def twelve-labels
  ["敬拜"
   "祷告"
   "奉献"
   "宣教使命"
   "传福音"
   "门徒培训"
   "教导／讲道"
   "领导"
   "督责和管教"
   "团契"
   "会员制"
   "圣礼仪式"])

(defn random-radar-item [i]
  {:borderWidth 1
   :label (str i)
   :radius 0
   :borderColor (array->border (nth colors i))
   :backgroundColor (array->bg (nth colors i))
   :pointStyle "circle"
   :data (repeatedly 12 (fn [] (+ 2 (rand-int 9))))})

(defn random-radar-data []
  (for [i (range 0 5)]
    (random-radar-item i)))

(def radar-options
  (clj->js
    {:responsive true
     :scale {:gridLines {:display true
                         :color "#000"}
             :ticks {:min 0
                     :max 10
                     :stepSize 5}
             :angleLines {:color "#000"}
             :pointLabels {:fontFamily "'Heiti SC'"
                           :fontSize 13
                           :fontColor "#333"}}
     :legend {:display false}}))

(defn radar [data]
  (r/create-class
    {:component-did-mount
     (fn [this]
       (let [ctx (r/dom-node this)]
         (js/Chart. ctx
                    (clj->js
                      {:type "radar"
                       :options radar-options
                       :data {:labels twelve-labels
                              :datasets (clj->js data)}}))))

     :reagent-render
     (fn [data]
       [:canvas])}))
