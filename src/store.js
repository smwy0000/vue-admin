import Vue from "vue";
import Vuex from "vuex";
import {Login} from "@/api/login";
import Cookie from "cookie_js";
import { reject, resolve } from "core-js";
import {setToKen,removeToKen,removeUserName,setUserName,getUserName} from "@/utils/app";
// import mutation from "./mutation"

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isCollapse: true//初始化的作用。false表示刚开始，是展开的，true,表示刚开始是关闭的
    },
    getters:{   //computed
        isCollapse:state => state.isCollapse
    },
    mutations:{//必须的 同步 没有回调处理事情
        SET_COLLAPSE(state){
            state.isCollapse = !state.isCollapse;
            //html5的本地存储
            Cookie.set('isCollapse',JSON.stringify(state.isCollapse));
        },
        SET_COLLAPSE(state){
            state.isCollapse = !state.isCollapse;
            //html5的本地存储
            sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse));
        },
        SET_TOKEN(state,value){
            state.to_Ken = value
        },
        SET_USERNAME(state,value){
            state.app = {
                'username' : value
            };
            state.username = value
        }
    },
    actions:{//可以回调处理事情
            //异步，请求接口返回数据后，接着去做别的事
            login({commit},requestData){
                return new Promise((resolve,reject) => {
                    //接口
                    // Login(requestData).then((response) =>{
                    //     commit('SET_TOKEN',null);
                    //     commit('SET_USERNAME',requestData.username);
                    //     setToKen(null);
                    //     setUserName(requestData.username);
                    //     resolve();
                    //     resolve(response)
                    // }).catch(error => {
                    //     reject(error)
                    // })
                    debugger;
                    commit('SET_TOKEN',null);
                    commit('SET_USERNAME',requestData.username);
                    setToKen(null);
                    setUserName(requestData.username);
                    resolve(requestData);
            })
            },
            exit({commit}){
                return new Promise ((resolve,reject) => {
                    removeToKen();
                    removeUserName();
                    commit('SET_TOKEN','');
                    commit('SET_USERNAME','');
                    resolve();
                })
                
        
            }
    }
});