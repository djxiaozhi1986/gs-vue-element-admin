// import { loginByUsername, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import GLOBAL from '@/global'

const user = {
  state: {
    token: getToken(),
    realname: localStorage.getItem("realname"),
    userName: localStorage.getItem("userName"),
    avatar: localStorage.getItem("avatar"),
    title: localStorage.getItem("title"),
    phone: localStorage.getItem("phone"),
    tel: localStorage.getItem("tel"),
    email: localStorage.getItem("email"),
    isSuper: localStorage.getItem("isSuper"),
    deptCode: localStorage.getItem("deptCode"),
    deptName: localStorage.getItem("deptName"),
    flagJob: localStorage.getItem("flagJob"),
    sex: localStorage.getItem("sex"),
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_REALNAME: (state, realname) => {
      state.realname = realname;
      localStorage.setItem("realname",realname);
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
      localStorage.setItem("userName",username);
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
      localStorage.setItem("avatar",avatar);
    },
    SET_TITLE: (state, title) => {
      state.title = title;
      localStorage.setItem("title",title);
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone;
      localStorage.setItem("phone",phone);
    },
    SET_TEL: (state, tel) => {
      state.tel = tel;
      localStorage.setItem("tel",tel);
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
      localStorage.setItem("email",email);
    },
    SET_DEPTCODE: (state, deptCode) => {
      state.deptCode = deptCode;
      localStorage.setItem("deptCode",deptCode);
    },
    SET_DEPTNAME: (state, deptName) => {
      state.deptName = deptName;
      localStorage.setItem("deptName",deptName);
    },
    SET_FLAGJOB: (state, flagJob) => {
      state.flagJob = flagJob;
      localStorage.setItem("flagJob",flagJob);
    },
    SET_ISSUPER: (state, isSuper) => {
      state.isSuper = isSuper;
      localStorage.setItem("isSuper",isSuper);
    },
    SET_SEX:(state, sex) => {
      state.sex = sex;
      localStorage.setItem("sex",sex);
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    }
  },

  actions: {
    SetUserAvatar({commit},avatar){
      commit('SET_AVATAR',avatar);
    },
    // 用户名登录
    // LoginByUsername({ commit }, userInfo) {
    //   const username = userInfo.username.trim()
    //   return new Promise((resolve, reject) => {
    //     loginByUsername(username, userInfo.password).then(response => {
    //       if(response.dec.code == GLOBAL.API_RESULT.SUCCESS){
    //         commit('SET_TOKEN', response.data.token);
    //         // commit('SET_NAME', data.data.user.username)
    //         setToken(response.data.token);
    //       }else{
    //         resolve({code:0,dec:response.dec});
    //       }
    //       resolve({code:1,dec:response.dec});
    //     }).catch((error) => {
    //       reject(error);
    //     })
    //   })
    // },
    // 用户刷新 token 成功，使用新的 token 替换掉本地的token
    // refreshToken({commit}, token) {
    //   commit('SET_TOKEN', token)
    //   setToken(token)
    // },
    // 获取用户信息
    // GetUserInfo({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     getUserInfo().then(response => {
    //       const result = response;
    //       if(result.dec.code == GLOBAL.API_RESULT.SUCCESS){
    //         // if (result.data.roles && result.data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
    //         //   commit('SET_ROLES', result.data.roles)
    //         // } else {
    //         //   reject('该用户未设置权限，暂时无法登录系统')
    //         // }
    //         commit('SET_REALNAME',result.data.realname);
    //         commit('SET_USERNAME',result.data.username);
    //         commit('SET_AVATAR',result.data.avatar);
    //         commit('SET_TITLE',result.data.position);
    //         commit('SET_PHONE',result.data.mobile);
    //         commit('SET_TEL',result.data.tel);
    //         commit('SET_EMAIL',result.data.email);
    //         commit('SET_DEPTCODE',result.data.code);
    //         commit('SET_DEPTNAME',result.data.depName);
    //         commit('SET_FLAGJOB',result.data.flagJob);
    //         commit('SET_ISSUPER',result.data.isAdmin);
    //         commit('SET_SEX',result.data.gender);
    //         resolve(response)
    //       }else{
    //         reject('获取用户信息失败，请重新登录')
    //       }
    //     }).catch(error => {
    //       reject(error.dec.msg+'，请重新登录')
    //     })
    //   })
    // },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    // LogOut({ commit }) {
    //   return new Promise((resolve) => {
    //     commit('SET_TOKEN', '');
    //     commit('SET_REALNAME','');
    //     commit('SET_AVATAR','');
    //     commit('SET_TITLE','');
    //     commit('SET_PHONE','');
    //     commit('SET_TEL','');
    //     commit('SET_EMAIL','');
    //     commit('SET_DEPTCODE','');
    //     commit('SET_DEPTNAME','');
    //     commit('SET_FLAGJOB',1);
    //     commit('SET_ISSUPER',0);
    //     commit('SET_SEX',1);
    //     removeToken();
    //     resolve()
    //   })
    // },

    // 前端 登出
  //   FedLogOut({ commit }) {
  //     return new Promise(resolve => {
  //       commit('SET_TOKEN', '')
  //       removeToken()
  //       resolve()
  //     })
  //   },

  //   // 动态修改权限
  //   ChangeRoles({ commit, dispatch }, role) {
  //     return new Promise(resolve => {
  //       commit('SET_TOKEN', role)
  //       setToken(role)
  //       getUserInfo(role).then(response => {
  //         const data = response.data
  //         commit('SET_ROLES', data.roles)
  //         commit('SET_NAME', data.name)
  //         commit('SET_AVATAR', data.avatar)
  //         commit('SET_INTRODUCTION', data.introduction)
  //         dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
  //         resolve()
  //       })
  //     })
  //   }
  }
}

export default user
