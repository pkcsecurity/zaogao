(ns zaogao.cljs.core
  (:require [reagent.core :as r]
            [zaogao.cljs.controller :as controller]
            [goog.dom :as dom]))

(def app-state (r/atom :survey-intro))

(enable-console-print!)

(defn landing-header []
  [:div.absolute.top-0.left-0.right-0.flex.justify-center.items-center.flex-column.bg-pri.white
   {:style {:height "150px"}}
   [:h1.mb2 "十二"]
   [:h3.caps "Characteristics"]])

(defn landing-hero []
  [:div.absolute.left-0.right-0.flex.justify-center.items-center
   {:style {:top "150px"
            :bottom "150px"}}
   [:div.max-width-1.mx-auto.col-12.p3
     [:h1.sec "How is your church doing?"]]])

(defn landing-button []
  [:div.absolute.left-0.right-0.bottom-0.flex.justify-center.items-center
   {:style {:height "150px"}}
   [:div.bg-pri.m2.px2.py2.rounded
    {:on-click (fn []
                 (reset! app-state :survey-intro))}
    [:h3.white "What are the 12?"]]])

(defn nav []
  [:div.absolute.top-0.left-0.right-0.flex.justify-between.items-center.p2.bg-pri.white
   {:style {:height "75px"}}
   [:h3 [:i.fa.fa-bars]]
   [:h3 "十一"]])

(defn body []
  (case @app-state
    :landing 
    [:div.fixed.top-0.left-0.right-0.bottom-0
     [landing-header]
     [landing-hero]
     [landing-button]]

    :survey-intro
    [:div.fixed.top-0.left-0.right-0.bottom-0
     [nav]]))

(defn -main []
  (r/render-component [body]
                      (dom/getElement "app")))

(-main)
