import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        singer: {},
        mid:{},
        playlist:[],
        playingsongs:{},//点击音乐信息
        playing:false,//播放
        fullScreen:false,//全屏
       
        
        
    },
    mutations: {
        setSinger(state,singer) {
            state.singer = singer
        },
        setMid(state,mid) {
            state.mid = mid
        },
        setPlaying(state,playing){
            state.mid = mid
        },
        setfullScreen(state,fullScreen){
            state.fullScreen = fullScreen
        },
        setPlaylist(state,playlist){
            state.playlist = playlist
        },
         setPlayingsongs(state,playingsongs){
            state.playingsongs = playingsongs
        },
        


    },
    
    getters: {
        getsinger(state) {
            
            return state.singer;
        },
        getmid(state) {
            
            return state.mid;
        },
        getplaying(state) {
            
            return state.playing;
        },
        getfullscreen(state) {
            
            return state.fullScreen;
        },
        getplaylist(state) {
            
            return state.playlist;
        },
        getplayingsongs(state) {
            
            return state.playingsongs;
        },


    }
})
