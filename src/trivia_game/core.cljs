(ns trivia-game.core
  (:require [hipo.core :as hipo]
            [cljs.core.match :refer-macros [match]]
            [cljs.core.async :as a]))

(declare render dispatch container tick next-state)
(enable-console-print!)


;; Create and append the game container

(def container (hipo/create [:div.game]))
(.appendChild js/document.body container)


;; General game data

(def trivia-puzzles
  [{:question "What was the first full length CGI movie?"
    :answers ["A Bug's Life" "Monsters Inc." "Toy Story" "The Lion King"]
    :correct "Toy Story"}
   {:question "Which of these is NOT a name of one of the Spice Girls?"
    :answers ["Sporty Spice" "Scary Spice" "Fred Spice" "Posh Spice"]
    :correct "Fred Spice"}
   {:question "Which NBA team won the most titles in the 90s?"
    :answers ["New York Knicks" "Portland Trailblazers" "Los Angeles Lakers" "Chicago Bulls"]
    :correct "Chicago Bulls"}
   {:question "Which group released the hit song, \"Smells Like Teen Spirit\"?"
    :answers ["Nirvana" "Backstreet Boys" "The Offspring" "No Doubt"]
    :correct "Nirvana"}
   {:question "Which popular Disney movie featured the song, \"Circle of Life\"?"
    :answers ["Aladdin" "Hercules" "Mulan" "The Lion King"]
    :correct "The Lion King"}
   {:question "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\""
    :answers ["Dice" "Mirror" "Fresh" "Cab"]
    :correct "Fresh"}
   {:question "What was Doug's best friend's name"
    :answers ["Skeeter" "Mark" "Zach" "Cody"]
    :correct "Skeeter"}
   {:question "What was the name of the principal at Bayside High in Saved By the Bell?"
    :answers ["Mr. Zhou" "Mr. Driggers" "Mr. Belding" "Mr. Page"]
    :correct "Mr. Belding"}])

(def time-to-answer 30)
(def time-to-view-result 4)

;; Dispatch a :tick action once per second

(a/go-loop []
  (a/<! (a/timeout 1000))
  (dispatch tick)
  (recur))

(prn "here")

;; States

(def waiting-state {:phase :wait-for-start})

(def initial-state
  {:phase :show-question
   :time time-to-answer
   :puzzle-id 0
   :total-correct 0
   :total-incorrect 0
   :total-unanswered 0})


;; The store holds a game state value. Dispatching an action updates it and re-renders.

(def store (atom waiting-state))

(defn dispatch [action]
  (swap! store #(next-state action %))
  (hipo/reconciliate! container (render @store)))


;; Actions

(def tick {:type :tick})

(def start {:type :start})

(defn response [ans]
  {:type :response :val ans})


;; Simple state transitions

(defn decrement-time [state]
  (update-in state [:time] dec))

(defn show-question-timed-out [state]
  (-> state
      (assoc :phase :show-answer)
      (assoc :time time-to-view-result)
      (dissoc :last-response)
      (update-in [:total-unanswered] inc)))

(defn game-over [state]
  (-> state
      (assoc :phase :over)
      (dissoc :time :puzzle-id)))

(defn show-next-question [state]
  (-> state
      (assoc :phase :show-question)
      (assoc :time time-to-answer)
      (update-in [:puzzle-id] inc)))

(defn show-answer-timed-out [state]
  (let [id (:puzzle-id state)
        max-puzzle-id (dec (count trivia-puzzles))
        out-of-puzzles? (= id max-puzzle-id)]
    (if out-of-puzzles?
      (game-over state)
      (show-next-question state))))


;; State reducers

(defn next-state:tick [_ state]
  (cond
    (not (:time state)) state
    (> (:time state) 1) (decrement-time state)
    :else (match [(:phase state)]
            [:show-question] (show-question-timed-out state)
            [:show-answer] (show-answer-timed-out state)
            :else state)))

(defn next-state:response [action state]
  (let [response (:val action)
        puzzle (nth trivia-puzzles (:puzzle-id state))
        correct? (= response (:correct puzzle))
        total-to-inc (if correct? :total-correct :total-incorrect)]
    (-> state
        (assoc :phase :show-answer)
        (assoc :time time-to-view-result)
        (assoc :last-response response)
        (update-in [total-to-inc] inc))))

(defn next-state [action state]
  (let [type->reducer {:tick next-state:tick
                       :response next-state:response
                       :start #(-> initial-state)}
        reducer (type->reducer (:type action) #(-> state))]
    (reducer action state)))


;; Renderers

(defn render:show-question [state]
  (let [{:keys [question answers]} (get trivia-puzzles (:puzzle-id state))
        rendered-answers (for [ans answers]
                           [:li.answer.btn {:on-click #(dispatch (response ans))} ans])]
    [:div.main
     question
     [:ul.answers rendered-answers]
     [:div.time (str "Time remaining: " (:time state))]]))

(defn render:show-answer [state]
  (let [{:keys [puzzle-id last-response]} state
        {:keys [answers correct]} (get trivia-puzzles puzzle-id)]
    (cond
      (not last-response) [:div.main
                           [:div.result "Out of Time!"]
                           [:div.last-correct (str "The Correct Answer was: " correct)]]
      (= correct last-response) [:div.result "Correct!"]
      :else [:div.main
             [:div.result "Nope!"]
             [:div.correct (str "The Correct Answer was: " correct)]])))

(defn render:over [state]
  (let [{:keys [total-correct total-incorrect total-unanswered]} state]
    [:div.main
     "All done, heres how you did!"
     [:div.correct (str "Correct Answers: " total-correct)]
     [:div.incorrect (str "Incorrect Answers: " total-incorrect)]
     [:div.unanswered (str "Unanswered: " total-unanswered)]
     [:div.start.btn {:on-click #(dispatch start)} "Start Over?"]]))

(defn render [state]
  [:div.game
   [:div.heading "Totally Trivial Trivia!"]
   (match [(:phase state)]
     [:wait-for-start] [:div.start.btn {:on-click #(dispatch start)} "Start"]
     [:show-question] (render:show-question state)
     [:show-answer] (render:show-answer state)
     [:over] (render:over state))])