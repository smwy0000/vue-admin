// import cookie from "cookie_js";
import {Login} from "@/api/login";
import {setToKen,removeToKen,removeUserName,setUserName,getUserName} from "@/utils/app";
import { reject, resolve } from "core-js";
const state = {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    to_Ken:'',
    username:getUserName() || ''
}

const getters = {
    isCollapse: state => state.isCollapse,
    username:state => state.username
}

const mutations = {
    SET_COLLAPSE(state){
        state.isCollapse = !state.isCollapse;
        //html5的本地存储
        sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse));
    },
    SET_TOKEN(state,value){
        state.to_Ken = value
    },
    SET_USERNAME(state,value){
        state.username = value
    }
}

const actions = {
    login({commit},requestData){
        debugger;
        return new Promise((resolve,reject) => {
            //接口
            // Login(requestData).then((response) =>{
            //     let data = response.data.data
            //     //普通的
            //     // content.commit('SET_TOKEN',data.toKen);
            //     // content.commit('SET_USERNAME',data.username);
            //     //解构的
            //     commit('SET_TOKEN',data.token);
            //     commit('SET_USERNAME',data.username);
            //     setToKen(data.token);
            //     setUserName(data.username);
            //     resolve(response)
            // }).catch(error => {
            //     reject(error)
            // })
            commit('SET_TOKEN',null);
            commit('SET_USERNAME',requestData.username);
            setToKen(null);
            setUserName(requestData.username);
            resolve();
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

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}

