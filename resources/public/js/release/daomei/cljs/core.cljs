(ns daomei.cljs.core
  (:require [reagent.core :as r]
            [daomei.cljs.controller :as controller]
            [goog.dom :as dom]))

(enable-console-print!)

(defn body []
  [:div.fixed.top-0.left-0.right-0.bottom-0
   [:p "React is running."]])

(defn -main []
  (r/render-component [body]
                      (dom/getElement "app")))

(-main)
