(ns zaogao.cljs.core
  (:require [reagent.core :as r]
            [zaogao.cljs.controller :as controller]
            [goog.dom :as dom]))

(def app-state (r/atom :survey-question))

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
  [:div.flex.justify-between.items-center.p2.bg-pri.white
   {:style {:height "75px"}}
   [:h3 [:i.fa.fa-bars]]
   [:h3 "十二"]
   [:h3 [:i.fa.fa-user-circle]]])

(defn survey-intro-item [i text]
  [:div.col-12.flex.items-center.px2.pt1
   [:div.flex.justify-center.items-center.border-pri.pri.border.circle.border-wide
    {:style {:height "35px"
             :width "35px"}}
    i]
   [:h4.pri.ml2 "Biblical " text]])

(def characteristics
  (take 12
        (cycle ["Worship"
                "Prayer"
                "Fellowship"
                "Giving"
                "Mission"])))

(defn survey-start-button []
  [:div.flex.justify-center.items-center.mt2
   {:on-click #(reset! app-state :survey-question)
    :style {:height "150px"}}
   [:div.bg-pri.m2.p2.rounded
    {:on-click (fn []
                 (reset! app-state :survey-intro))}
    [:h3.white "Start Survey"]]])

(defn survey-intro-body []
  [:div
   [:h4.sec.p2 "The following are 12 Biblical Characteristics we'll be asking about:"]
   (for [[idx c] (map-indexed vector characteristics)]
     ^{:key idx} [survey-intro-item (inc idx) c])
   [survey-start-button]])

(defn slider []
  (let [selected (r/atom nil)]
    (fn []
      [:div.flex.justify-between.items-center.relative
       {:style {:height "100px"}}
       [:div {:style {:height "50px"
                      :width "15px"}}
        [:div.border.border-pri.border-wide.circle.bg-pri
         {:style {:margin-top "10px"
                  :height "30px"
                  :width "30px"}}]
        [:div {:style {:margin-left "11px"}} 1]]
       [:div {:style {:height "50px"
                      :width "15px"}}
        [:div.border.border-pri.border-wide.circle.bg-pri
         {:style {:margin-top "10px"
                  :height "30px"
                  :width "30px"}}]
        [:div {:style {:margin-left "11px"}} 2]]
       [:div {:style {:height "50px"
                      :width "15px"}}
        [:div.border.border-pri.border-wide.circle.bg-pri
         {:style {:margin-top "10px"
                  :height "30px"
                  :width "30px"}}]
        [:div {:style {:margin-left "11px"}} 3]]
       [:div {:style {
                      :height "50px"
                      :width "15px"}}
        [:div.border.border-pri.border-wide.circle.bg-pri
         {:style {:margin-left "-5px"
                  :margin-top "10px"
                  :height "30px"
                  :width "30px"}}]
        [:div {:style {:margin-left "4px"}} 4]]
       [:div.bg-pri.col-12.absolute 
        {:style {:top "50%"
                 :left 0
                 :right 0
                 :margin-top "-2px"
                 :height "4px"}}]])))

(defn survey-question []
  [:div
   [:h1 "Biblical Worship"]
   [:div.p2
   [slider]]
   [:h4 "How would you rate the corporate whorship of your church defined by John 4:24, in “spirit and in truth”"]])

(defn body []
  (case @app-state
    :landing 
    [:div.fixed.top-0.left-0.right-0.bottom-0
     [landing-header]
     [landing-hero]
     [landing-button]]

    :survey-intro
    [:div
     [nav]
     [survey-intro-body]]

    :survey-question
    [:div
     [nav]
     [survey-question]]))

(defn -main []
  (r/render-component [body]
                      (dom/getElement "app")))

(-main)
