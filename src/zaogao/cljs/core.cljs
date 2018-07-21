(ns zaogao.cljs.core
  (:require [reagent.core :as r]
            [zaogao.cljs.controller :as controller]
            [zaogao.cljs.radar :as radar]
            [goog.dom :as dom]))

(def app-state (r/atom :landing))

(enable-console-print!)

(defn landing-header []
  [:div.flex.justify-center.items-center.flex-column.bg-pri.white
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

(defn menu [menu-atom]
  [:div.fixed.top-0.left-0.bottom-0.right-0.z4.p2.white
   {:style {:background-color "rgba(0,0,0,0.95)"}}
   [:h3.white {:on-click #(reset! menu-atom false)}
    [:i.fa.fa-times]]
   [:div.my3
    [:h2 
     {:on-click #(reset! app-state :characteristics)}
     "12 Characteristics"]
    [:h2 
     {:on-click (constantly nil)}
     "Resources"]
    [:h2 
     {:on-click #(reset! app-state :survey-intro)}
     "Survey" ]
    [:h2 
     {:on-click #(reset! app-state :profile)}
     [:i.mr2.fa.fa-cog] "Admin"]]])

(defn nav []
  (let [menu? (r/atom false)]
    (fn []
      [:div
       (when @menu?
         [menu menu?])
       [:div.flex.justify-between.items-center.p2.bg-pri.white
        {:style {:height "75px"}}
        [:h3 
         {:on-click #(reset! menu? true)}
         [:i.fa.fa-bars]]
        [:h3 "十二"]
        [:h3 
         {:on-click #(reset! app-state :profile)}
         [:i.fa.fa-user-circle]]]])))

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

(defn survey-results []
  [:div.m2
   [:h3.sec.p3 "Here's a snapshot of your church health!"]
   [radar/radar [(radar/random-radar-item 0)]]
   [:div.max-width-1.p2.flex.justify-center.items-center.flex-column
    [:div.center.mt2
     [:h5 "Share your results?"]]
    [:div.flex.justify-center.items-center
     [:div.p2
      [:h4.sec [:i.fa.fa-twitter]]]
     [:div.p2
      [:h4.sec [:i.fa.fa-facebook]]]
     [:div.p2
      [:h4.sec [:i.fa.fa-weixin]]]]]

   [:div.mt3.px2
    [:h4.pri "Your church is doing well in these 3 areas of church health"]
    [:div.p2
     [:h5 "1. Biblical Worship"]
     [:h5 "2. Biblical Fellowship"]
     [:h5 "3. Biblical Ordinances"]]]

   [:div.mt3.px2
    [:h4.pri "Your church is doing well in these 3 areas of church health"]
    [:div.p2
     [:h5 "1. Biblical Discipline"]
     [:h5 "2. Biblical Mission"]
     [:h5 "3. Biblical Discipleship"]]]

   [:div.mt3.px2
    [:h4.sec "Create a profile to get a customized training plan 
             to help your church become more healthy in these areas."]]
   [:div.max-width-1.mx-auto.col-12.bg-sec.rounded.white.center.py2.mt3
    {:on-click #(reset! app-state :create-account)
     :style {:width "250px"}}
    [:h4 "Create Profile"]]])


(defn slider []
  (let [selected (r/atom nil)]
    (fn []
      [:div.flex.justify-between.items-center.relative
       {:style {:height "100px"}}
       [:div {:on-click #(reset! selected 1)
              :style {:height "50px"
                      :width "15px"}}
        [:div.border.border-pri.border-wide.circle
         {:class (if (= @selected 1) "bg-sec" "bg-white")
          :style {:margin-top "10px"
                  :height "30px"
                  :width "30px"}}]
        [:div {:style {:margin-left "11px"}} 1]]
       [:div {:on-click #(reset! selected 2)
              :style {:height "50px"
                      :width "15px"}}
        [:div.border.border-pri.border-wide.circle
         {:class (if (= @selected 2) "bg-sec" "bg-white")
          :style {:margin-top "10px"
                  :height "30px"
                  :width "30px"}}]
        [:div {:style {:margin-left "11px"}} 2]]
       [:div {:on-click #(reset! selected 3)
              :style {:height "50px"
                      :width "15px"}}
        [:div.border.border-pri.border-wide.circle
         {:class (if (= @selected 3) "bg-sec" "bg-white")
          :style {:margin-top "10px"
                  :height "30px"
                  :width "30px"}}]
        [:div {:style {:margin-left "11px"}} 3]]
       [:div {:on-click #(reset! selected 4)
              :style {
                      :height "50px"
                      :width "15px"}}
        [:div.border.border-pri.border-wide.circle
         {:class (if (= @selected 4) "bg-sec" "bg-white")
          :style {:margin-left "-5px"
                  :margin-top "10px"
                  :height "30px"
                  :width "30px"}}]
        [:div {:style {:margin-left "4px"}} 4]]
       [:div.bg-pri.col-12.absolute 
        {:style {:top "50%"
                 :left 0
                 :right 0
                 :margin-top "-2px"
                 :height "4px"
                 :z-index -1}}]])))

(defn complete-button []
  [:div.p2.bg-sec.rounded.white.max-width-1.m2.center
   {:on-click #(reset! app-state :results)}
   [:h4 "Complete Survey"]])

(defn survey-question []
  [:div
   [:div.p2
    [:h1.mb3 "Biblical Worship"]
    [:div.mb3
     [slider]]
    [:h4.mb3 "How would you rate the corporate whorship of your church defined by John 4:24, in “spirit and in truth”"]]
   [:div.pt3.px2
    [:div.mb3
     [slider]]
    [:h4.mb3 "How would you rate the individual worship of the members of your church as defined
             by being a ”living sacrifice” who is no longer conformed to the pattern of this 
             world? (Rom. 12:1-2)"]]
   [:div.center.mt2
    [:h1 [:i.fa.fa-ellipsis-h]]]
   [complete-button]])

(defn create-account []
  [:div.fixed.bottom-0.left-0.right-0.bg-pri.px2.pt3
   {:style {:top "75px"}}
   [:h2.sec "Create Account"]
   [:div.my2
    [:input.col-12.p1 {:placeholder "Name"}]]
   [:div.my2
    [:input.col-12.p1 {:placeholder "Address"}]]
   [:div.my2
    [:input.col-12.p1 {:placeholder "Phone Number"}]]
   [:div.my2
    [:input.col-12.p1 {:placeholder "Position in Church"}]]
   [:h4.sec.center.mt4 "Get your custom plan!"]
   [:div.mt3
    [:div.bg-sec.white.rounded.center.p2
     {:on-click #(reset! app-state :schedule)}
     [:h3 "Create Account"]]]])

(defn schedule []
  (let [selected (r/atom nil)]
    (fn []
      [:div.fixed.bottom-0.left-0.right-0.bg-pri.px2.pt3
       {:style {:top "75px"}}
       [:h2.white "Schedule a time to met with a small group leader"]
       [:p.white.mt2 "Choose one of the following times that works best for you"]
       [:div.clearfix.mt3
        [:div.col-2.col
         {:on-click #(reset! selected :mon)}
         [:h2.white 
          (if (= @selected :mon)
            [:i.fa.fa-circle]
            [:i.fa.fa-circle-o])]]
        [:div.col-10.col.white
         [:h4 "Monday"]
         [:h5 "08:00"]]]
       [:div.clearfix.mt3
        {:on-click #(reset! selected :wed)}
        [:div.col-2.col
         [:h2.white 
          (if (= @selected :wed)
            [:i.fa.fa-circle]
            [:i.fa.fa-circle-o])]]
        [:div.col-10.col.white
         [:h4 "Wednesday"]
         [:h5 "10:00"]]]
       [:div.clearfix.mt3
        {:on-click #(reset! selected :fri)}
        [:div.col-2.col
         [:h2.white 
          (if (= @selected :fri)
            [:i.fa.fa-circle]
            [:i.fa.fa-circle-o])]]
        [:div.col-10.col.white
         [:h4 "Friday"]
         [:h5 "14:00"]]]
       [:div.mt3
        [:div.bg-sec.white.rounded.center.p2
         {:on-click #(reset! app-state :thanks)}
         [:h3 "Schedule Inteview"]]]])))

(defn twelve-chars []
  [:div.p2.flex.justify-around.items-center.flex-wrap
   (for [i (range 0 12)]
     ^{:key i} 
     [:div.bg-pri.white.rounded.flex.justify-center.items-center.flex-column.mb2
      {:on-click #(reset! app-state :characteristic-page)
       :style {:height "150px"
               :width "150px"}}
      [:h1 (nth ["一"
                 "二"
                 "三"
                 "四"
                 "五"
                 "六"
                 "七"
                 "八"
                 "九"
                 "十"
                 "十一"
                 "十二"] i)]])
   [:div.rounded.bg-sec.white.col-12.m1.py1
    {:on-click #(reset! app-state :study-plan)}
    [:h3.center "Small Group Plan"]]])

(defn study-plan []
  [:div.bg-pri.py3.px2
   [:h2.sec "Week 1"]
   [:h3.white.py1 "Biblical Discipleship"]
   [:p.white.my2 "The central command of the Great Commission is to make disciples. A 
                 disciple is more than a person who has mastered a set of information, 
                 or practices a set of spiritual disciplines and shares the gospel. 
                 Discipleship involves the intentional transformation of the heart, 
                 mind, affections, will, relationships, and purpose, without pitting 
                 the importance of one against another. The essential tools for discipleship 
                 are the Word of God, the Spirit of God, and the people of God."]
   [:div.my2
    [:div.clearfix.white.mt4.mb2
     [:div.col-2.col
      [:h1 [:i.fa.fa-circle-o]]]
     [:div.col-10.col
      [:h3 "Watch"]]]
    [:iframe.mx-auto {:width 325
                      :height 215
                      :src "https://www.youtube.com/embed/8lO0KcvWEH8?start=320" 
                      :frameborder "0" 
                      :allow "autoplay; encrypted-media" 
                      :allowfullscreen :allowfullscreen}]
    [:div.clearfix.white.mt4
     [:div.col-2.col
      [:h1 [:i.fa.fa-circle-o]]]
     [:div.col-10.col
      [:h3 "Read"]]]
    [:div.py3.clearfix
     [:div.col.col-2.center 
      [:h3.white [:i.fa.fa-file]]]
     [:div.col.col-10.white
      "THE HEALTHY DISCIPLE: A simple lesson series and diagnostic diagram to help new believers know what it means to become a healthy disciple and how to disciple others to become a disciple"]]
    [:div.py3.clearfix
     [:div.col.col-2.center
      [:h3.white [:i.fa.fa-file]]]
     [:div.col.col-10.white
      "PRACTICAL HERMENEUTICS: This series lines out four key principles of biblical interpretation to help believers know how to read and intepret God’s Word while avoiding some of the most common errors."]]
    [:div.py3.clearfix
     [:div.col.col-2.center
      [:h3.white [:i.fa.fa-file]]]
     [:div.col.col-10.white
      "WHBI Discipleship: A basic theological module for leaders to better understand the biblical basis for discipleship and how to empower believers in your church to go make disciples."]]
    [:div.clearfix.white.mt4
     [:div.col-2.col.center
      [:h1 [:i.fa.fa-circle-o]]]
     [:div.col-10.col
      [:h3 "Discuss"]]]

    [:div.bg-sec.rounded.white.mt4
     [:h4.center.p2
      "Week 2"]]]])

(defn characteristic-page []
  [:div.py3
   [:h1.sec.center "一"]
   [:div.px3
    [:h2.sec.mb3
     "Biblical" [:br] "Evangelism"]
    [:p
     "Evangelism is the proclamation of the gospel in the power of the
     Holy Spirit with the aim of persuading people to repent and believe in Christ."]
    [:div.py3.clearfix
     [:div.col.col-2 
      [:h3.sec [:i.fa.fa-file]]]
     [:div.col.col-10
      "ANDREW PROJECT: Purpose: develop a burden for the lost among ALL believers, develop a dependence upon and a closer walk with the Lord, and develop a skill to both live AND speak the Good News at the Holy Spirit’s leading."]]

    [:div.py3.clearfix
     [:div.col.col-2 
      [:h3.sec [:i.fa.fa-file]]]
     [:div.col.col-10
      "THE BRIDGE: A simple EV presentation that can be sketched out in any situation. This presentation utilizes John 3:16 and lays out a path to explain the gospel in a variety of situations."]]

    [:div.py3.clearfix
     [:div.col.col-2 
      [:h3.sec [:i.fa.fa-video-camera]]]
     [:div.col.col-10
      "CREATION TO CHRIST (C2C): A tool for using a story format to share the gospel. It includes a small group series, video, & outline for better understanding."]]

    [:div.py3.clearfix
     [:div.col.col-2 
      [:h3.sec [:i.fa.fa-file]]]
     [:div.col.col-10
      "WHBI Evangelism and Missions: A basic theological module for leaders in understanding the biblical basis for missions and evangelism."]]
    [:div.mt2.p2.bg-sec.white.rounded.center
     [:h4 "Download All"]]
    [:div.mt3.flex.justify-between.items-center
     [:h1.sec
      [:i.fa.fa-arrow-circle-o-left]]
     [:h1.sec
      [:i.fa.fa-arrow-circle-o-right]]]]])

(defn profile []
  [:div.mt3
   [radar/radar [(radar/random-radar-item 0)]]
   [:div.center.mt3
    [:h1.sec "江泽民"]
    [:h4 "济南，山东"]]])

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
     [survey-question]]

    :results
    [:div
     [nav]
     [survey-results]]

    :create-account
    [:div
     [nav]
     [create-account]]

    :schedule
    [:div
     [nav]
     [schedule]]

    :thanks
    [:div
     [nav]
     [:div.mt4.center
      [:h1.sec.my2 "Thanks!"]
      [:h3.my2 "A small group leader will contact you!"]
      [:h1.pri.my2 [:i.fa.fa-phone]]]]

    :characteristics
    [:div
     [landing-header]
     [twelve-chars]]

    :characteristic-page
    [:div
     [nav]
     [characteristic-page]]

    :study-plan
    [:div
     [nav]
     [study-plan]]

    :profile
    [:div
     [nav]
     [profile]]))


(defn -main []
  (r/render-component [body]
                      (dom/getElement "app")))

(-main)
