<template>
    <q-layout>
        <div class="flex flex-center full-height">
            <q-card class="login-card">
                <q-card-section>
                    <div class="text-h6 text-center login-title">
                        Registrar na Marvel API
                    </div>
                    <q-form @submit="handleSubmit">
                        <q-input class="q-mb-sm" outlined label="* Nome" />
                        <q-input
                            class="q-mb-sm"
                            outlined
                            v-model="email"
                            label="* E-mail"
                        />
                        <q-input
                            class="q-mb-sm"
                            outlined
                            label="* Confirmar E-mail"
                        />
                        <q-input
                            class="q-mb-sm"
                            outlined
                            v-model="password"
                            type="password"
                            label="* Senha"
                        />
                        <q-input outlined label="* Confirmar Senha" />
                        <p class="q-mt-sm">Campos com * são obrigatórios.</p>
                        <div class="login-button">
                            <q-btn
                                color="negative"
                                label="Voltar"
                                @click="back"
                            />
                            <q-btn
                                color="primary"
                                label="Registrar"
                                type="submit"
                            />
                        </div>
                    </q-form>
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

const back = () => {
    router.visit("/");
};

const handleSubmit = (e) => {
    console.log(e);
    // Implement login logic here
    // Example: send login request to backend using Axios
    console.log("Registrar button clicked");
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
    .login-title {
        margin-bottom: 5px;
    }
    .login-button {
        margin-top: 10px;
        justify-content: end;
        gap: 10px;
        display: flex;
    }
}
</style>
