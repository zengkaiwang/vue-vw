import Vue from 'vue'
import Router from 'vue-router'
import Answer from '@/components/pages/answer'
import Result from '@/components/pages/result'
import DoExercise from '@/components/pages/doExercise'
import Test from '@/components/pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/test'
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
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
