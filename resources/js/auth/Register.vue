<template>
     <div class="mx-auto h-full flex justify-center items-center bg-gray-300">
        <div class="w-96 bg-indigo-500 rounded-lg shadow-xl p-8 mt-2">
    
        <div class="justify-center text-indigo-100 w-96">
                
            <div class="flex">
                <div class="w-32 pr-6">
                    <img src="" >
                </div>
                <div class="spacer px-4"></div>
                <div class="w-24">
                    <img src="" >
                </div>
            </div>
            <h1 class="text-sm pt-2 font-bold">Naše slovenské</h1>
            
        </div>

        <h1 class="text-indigo-100 text-2xl pt-6 pb-2">Vítajte</h1>
        <h2 class="text-indigo-100 ">Zaregistrujte sa vue</h2>

        <form @submit.prevent="submit" class="pt-1">

                <div class="relative">
                    <label for="name" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">
                        Meno
                    </label>

                    <div>
                        <input id="name"
                               v-model="form.name" 
                               type="text" 
                               class="pt-8 w-full rounded p-3 bg-blue-800 text-gray-100 outline-none border-none focus:bg-blue-700" 
                               name="name" 
                               value="" 
                               autocomplete="name" autofocus>
                    </div>
                </div>
                
                <div class="relative pt-3">
                    <label for="email" class="absolute uppercase text-blue-500 text-xs font-bold pl-3 pt-2">
                        E-mail
                    </label>

                        <div>
                            <input id="email" 
                               v-model="form.email"
                               type="email" 
                               class="pt-8 w-full rounded p-3 bg-blue-800 text-gray-100 outline-none border-none focus:bg-blue-700"
                               name="email" 
                               value="" 
                               autocomplete="email"
                               placeholder="imejl@email.sk">
                    </div>
                </div>

                <div class="relative pt-3">
                    <label for="password" class="absolute uppercase text-blue-500 text-xs font-bold pl-3 pt-2">
                       Heslo
                    </label>

                    <input id="password" 
                           v-model="form.password"
                           type="password" 
                           class="pt-8 w-full rounded p-3 bg-blue-800 text-gray-100 outline-none border-none focus:bg-blue-700" 
                           name="password" 
                           autocomplete="new-password">
                </div>


                <div class="relative pt-3">    
                    <label for="password-confirm" class="absolute uppercase text-blue-500 text-xs font-bold pl-3 pt-2">
                           Potvrdiť heslo
                    </label>

                        <input id="password-confirm" 
                               v-model="form.password_confirmation"
                               type="password" 
                               class="pt-8 w-full rounded p-3 bg-blue-800 text-gray-100 outline-none border-none focus:bg-blue-700" 
                               name="password_confirmation" 
                               autocomplete="new-password">

                    <div class="pt-8">
                        <button type="submit" class="w-full focus:outline-none hover:shadow-xl focus:bg-indigo-700 bg-gray-400 hover:bg-gray-200 py-2 px-3 uppercase rounded text-indigo-700 focus:text-gray-400 font-bold">
                            Registrovať
                        </button>
                    </div>
                </div>
            
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Register",
    data: () => ({
        form: {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    }),

    methods: {
        ...mapActions({ register: 'auth/register' }),

        async submit () {
            await this.register(this.form)

            this.$router.replace({ name: 'Dashboard' })
        }
    }
}
</script>