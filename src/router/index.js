import Vue from 'vue'
import Router from 'vue-router'
import Answer from '@/components/pages/answer'
import Result from '@/components/pages/result'
import DoExercise from '@/components/pages/doExercise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/exercise'
    },
    {
      path: '/answer',
      name: 'answer',
      component: Answer
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/exercise',
      name: 'doExercise',
      component: DoExercise
    }
  ]
})
