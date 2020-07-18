import { auth } from '@/plugins/firebase.js';

export const state = () => ({
    users: null,
    error: null
})

export const mutations = {
    setUser(state, payload) {
        state.users = payload
    },
    setError(state, payload) {
        state.error = payload
    }

}

export const actions = {

    initUser({ commit }, users) {
        auth.signInWithEmailAndPassword(users.email, users.pass)
            .then(res => {

                console.log(res)
                const useLogin = {
                    email: res.user.email,
                    uid: res.user.uid
                }
                commit('setUser', useLogin)
                this.$router.push({ path: "/home" })

            }).catch(error => {
                commit('setError', error)
            })

    }
}