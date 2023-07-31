import { createRouter, createWebHistory } from "vue-router"
import mainPage from "@/views/mainPage.vue"
import Login from "@/views/login.vue"
import AttractionsCheckin from "@/views/attractionsCheck_in.vue"
import Comment from "@/views/Comment.vue"
import PersonalCenter from "@/views/PersonalCenter.vue"
import Recommended from "@/views/Recommended.vue"
import Search from "@/views/Search.vue"
import traveinformation from "@/views/TravelInformation.vue"
import Clock from "@/views/PersonalPage/Clock.vue"
import Friend from "@/views/PersonalPage/Friend.vue"
import Recommanded from "@/views/PersonalPage/Recommanded.vue"
import Reward from "@/views/PersonalPage/Reward.vue"
import ChangeMessage from "@/views/PersonalPage/ChangeMessage.vue"
import TopReviews from "@/views/CommentsPage/TopReviews.vue"
import GuideRecommended from "@/views/CommentsPage/GuideRecommended.vue"
import MyFriends from "@/views/CommentsPage/MyFriends.vue"
// import ChinaMap from "@/views/Map/china.vue";
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: "/mainpage",
        component: mainPage,
        // children: [
        //     { path: "", redirect: "/mainpage/fimap" },
        //     { path: "/mainpage/fimap", component: ChinaMap },
        //     { path: "/mainpage/fomap", component: ChinaMap }
        // ]
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/personal_center",
        component: PersonalCenter,
        children: [
            {
                path: "/personal_center/reward",
                component: Reward,
            },
            {
                path: "/personal_center/clocked",
                component: Clock
            },
            {
                path: "/personal_center/recommanded",
                component: Recommanded,
            },
            {
                path: "/personal_center/friends",
                component: Friend,
            },
            {
                path: "/personal_center/changeMessage",
                component: ChangeMessage,
            },
        ]
    },
    {
        path: "/comment",
        component: Comment,
        children: [
            {
                path: "/comment/topReviews",
                component: TopReviews
            },
            {
                path: "/comment/guiderecommended",
                component: GuideRecommended
            },
            {
                path: "/comment/myfriends",
                component: MyFriends
            },
        ]
    },
    {
        path: "/attractionsCheck_in",
        component: AttractionsCheckin,
    },
    {
        path: "/traveinformation",
        component: traveinformation,
    },
    {
        path: "/recommended",
        component: Recommended,
    },
    {
        path: "/seacher",
        component: Search,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router