<template>
  <div>

    <template v-if="this.question">

      <h1 v-html="this.question">
      </h1>

      <template v-for="(answer, index) in this.answers" v-bind:key="index">
        <input 
          type="radio" 
          name="options" 
          :value="answer"
          v-model="this.chosen_answer"
          >

        <label v-html="answer"></label><br>
      </template>

      <button @click="this.submitAnswer()" class="send" type="button">Send</button>

    </template>

  </div>
  
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      // chosen_answer: undefined,
      question: undefined,
      // incorrectAnswers: [],
      incorrectAnswers: undefined,
      // correctAnswer: '',
      correctAnswer: undefined,
      // win_count: 0,
      // lose_count: 0,
      // answerSubmitted: false
    }
  },

  computed: {
      answers() {
        var answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
        answers.splice(Math.round(Math.random() * answers.length), 0, this.correctAnswer);
        return answers;
      }
  },

  methods: {
    submitAnswer() {
      if (!this.chosen_answer) {
        alert('Pick one of the options');
      } else {
      //   this.answerSubmitted = true;
        if (this.chosen_answer == this.correctAnswer) {
          alert('You got it right!');
          //     this.win_count++;
        } else {
          alert('You got it wrong!');
      //     this.lose_count++
        }
      }
    }
  },

  created() {
    this.axios
    .get('https://opentdb.com/api.php?amount=1&category=18')
    .then((response) => {
        this.question = response.data.results[0].question,
        this.incorrectAnswers = response.data.results[0].incorrect_answers,
        this.correctAnswer = response.data.results[0].correct_answer
    })
    // this.getNewQuestion();

  }
}

// https://opentdb.com/api.php?amount=1&category=18

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  input[type='radio']{
    margin: 12px 4px;
  }
  
  button.send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color: #1867c0;
    border: 1px solid #1867c0;
    cursor: pointer;
  }

}


</style>
