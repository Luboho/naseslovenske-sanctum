<template>
    <div  class="h-screen bg-gray-200">
        
            <!-- UI Messages -->
            <UIMessages />
            <!-- end of UI Messages -->
            <div class="lg:flex md:inline-block sm:inline-block">
            <!-- Navigation -->
            <MainNav />
            
            


            <!-- Right Section -->
            <!-- Right Top Section -->
            <!-- Right Bottom Section -->
            <div class="flex flex-col flex-1 w-screen h-screen overflow-y-hidden"> 

                <router-view class="p-6 overflow-x-hidden"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import MainNav from './MainNav';
import UIMessages from './UIMessages';
import { mapGetters} from 'vuex';


export default {
    name: "App",

    components: {
        MainNav,
        UIMessages,
    },

    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),
    },

    created() {     // Similar to mounted() property, but created() is executed asap after App is created. So, earlier than mounted() which is executed afer than component is created.
            // window.axios.interceptors.request.use(// Whenever axios make request use api_token from config file.
            //     (config) => {
            //         if (config.method === 'get') { // If GET request append api_token to URL
            //             config.url = config.url + '?api_token=' + this.user.api_token;
            //         } else {
            //             config.data = {     // Set Users' API Token config
            //                 ...config.data, // ...spread Operator to copy what in the config already is and append api_token from data
            //                 api_token: this.user.api_token 
            //             };
            //         }
            //         return config;
            //     }
            // )
    }

}
</script>

<style scoped>

</style>