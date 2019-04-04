import vue from 'vue';
import loadingComponent from './loading.vue';

const LoadingConstructor = vue.extend(loadingComponent);
let loadingDom;

// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
export function showLoading(text, duration = 2000) {
  // 实例化一个 toast.vue
  loadingDom = new LoadingConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text: text,
        showWrap: true
      }
    }
  })
  // 把 实例化的 toast.vue 添加到 body 里
  document.body.appendChild(loadingDom.$el)
};

export function hideLoading() {
  loadingDom.showWrap = false;
}

// 注册为全局组件的函数
// function registryLoading() {
//   vue.prototype.$showLoading = showLoading;
//   vue.prototype.$hideLoading = hideLoading;
// }

// export default registryLoading
