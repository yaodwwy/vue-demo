import Router from 'vue-router'
import Film from "@/views/Film";
import Cinema from "@/views/Cinema";
import Center from "@/views/Center";


export default new Router({
    routes: [
        {
            path: '/film',
            component: Film,

        },
        {
            path: '/cinema',
            component: Cinema
        },
        {
            path: '/center',
            component: Center
        }
    ]
})