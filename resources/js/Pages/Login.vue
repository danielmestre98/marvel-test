<template>
    <q-layout view="hHh lpR lFf">
        <div class="flex flex-center full-height">
            <q-card class="login-card">
                <q-card-section>
                    <div class="text-h6 text-center login-title q-mb-sm">
                        Login Marvel API
                    </div>
                    <q-input filled v-model="email" label="Email" />
                    <q-input
                        filled
                        v-model="password"
                        type="password"
                        label="Password"
                    />
                    <div class="login-button q-mt-sm">
                        <q-btn
                            color="accent"
                            label="Registrar"
                            @click="login"
                        />
                        <q-btn color="primary" label="Login" @click="login" />
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </q-layout>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { ref } from "vue";

const email = ref("");
const password = ref("");
// const router = useRouter();

const login = () => {
    router.visit("register");
    // Implement login logic here
    // Example: send login request to backend using Axios
    console.log("Login button clicked");
};
</script>

<style scoped lang="scss">
.full-height {
    height: 100vh !important;
    background-color: $secondary;
}
.login-card {
    max-width: 400px;
    width: 100%;
    .login-button {
        justify-content: end;
        gap: 10px;
        display: flex;
    }
}
</style>
