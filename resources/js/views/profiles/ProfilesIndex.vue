<template>
  <div>
      <div v-if="loading">Loading...</div>
        <div v-else>
            <div v-if="profiles.length === 0">
                <p>Nemáte žiadne príspevky. <router-link to="/profiles/create">Vytvoriť príspevok</router-link></p>
            </div>
      <h1 class="text-blue-500 pb-4 uppercase italic font-bold"> Profily domácich značiek</h1> 

            <div v-for="profile in profiles" :key="profile.data.id" class="p-2">
                <div class="animate sm:flex-col grid md:grid-cols-2 lg:grid-cols-2 shadow-xl bg-indigo-300 px-2 rounded-3xl">
                    <div class="place-self-center p-4">
                            
                        <img :src="'/storage/uploads/' + profile.data.image" class="rounded-full" >
                    </div>
                    <div class="p-4">
                        <p class="sm:text-xl md:text-xl lg:text-2xl font-bold">{{ profile.data.title }}</p>
                        <p class="sm:text-xs md:text-xs lg:text-md">{{ profile.data.description }} 
                            <router-link :to="'/profiles/' + profile.data.profile_id" >
                                <span class="bg-indigo-200 px-2 py-1 rounded-lg font-semibold inline-block"> . . . čítaj viac </span>
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  </div>

</template>

<script>

    export default {
        name: "ProfilesIndex",

        props: [
            'endpoint', 'user'
        ],

        mounted() {
            axios.get('/api/profiles')
                .then(response => {
                    
                    this.profiles = response.data.data;
                    this.loading = false;
                })
                .catch(error => {
                    this.loading = false;

                    alert('Vyskytol sa problém. Obnovte stránku prosím.');
                });
        },

        data: function() {
            return {
                loading: true,
                profiles: null,
            }
        },

    }
</script>

<style>
/* Animations */
.animate {
  animation-name: stretch;
  animation-duration: 1.0s;
  animation-timing-function: ease-out;
}

@keyframes stretch {
  0% {
    transform: scale(.1);
  }
  100% {
    transform: scale(1.0);
  }
}
</style>