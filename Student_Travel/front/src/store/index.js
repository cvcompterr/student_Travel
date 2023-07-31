import { defineStore } from "pinia"

// 1.定义并导出容易
// 参数1：容器的 ID,必须唯一，将来 Pinia 会把所有的容器挂载到跟容器
export default defineStore("mainStore", {
    /**
     * 类似于组件的 data,用来存储全局状态
     */
    state: () => {
        return {
            proviceMessage: {
                name: "",
                introduce: "",
                fiveNum: 0,
            }
        }
    },

    /**
     * 类似组件的  computed,用来封装计算属性，有缓存功能
     */
    getters: {

    },

    /**
     * 类似组件的 methods,封装业务逻辑，修改 state
     */
    actions: {},
})
