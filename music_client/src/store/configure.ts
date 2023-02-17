export default {
    state: {
      token: false, // 用户是否登录
      showAside: false, // 是否显示侧边栏
      searchWord: "", // 搜索关键词
      activeNavName: "首页", // 导航栏名称
    },
    getters: {
      token: (state:any) => state.token,
      activeNavName: (state:any) => state.activeNavName,
      showAside: (state:any) => state.showAside,
      searchWord: (state:any) => state.searchWord,
    },
    mutations: {
      setToken: (state:any, token:any) => {
        state.token = token;
      },
      setActiveNavName: (state:any, activeNavName:any) => {
        state.activeNavName = activeNavName;
      },
      setShowAside: (state:any, showAside:any) => {
        state.showAside = showAside;
      },
      setSearchWord: (state:any, searchWord:any) => {
        state.searchWord = searchWord;
      },
    },
  };
  