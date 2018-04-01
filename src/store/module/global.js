
const global = {
    state:{
        asideHide:false,
        asideCollapse:false,
        asideWidth:'220px'
    },
    mutations: {
        setAsideCollapse(state){
            return state.asideCollapse=!state.asideCollapse
        },
        setAsideWidth(state){
           return state.asideWidth=state.asideCollapse?'65px':'220px';
        }
    },
    actions: {
        
    }
}
export default global;