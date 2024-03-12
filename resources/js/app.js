import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/pt-BR";
import quasarIconSet from "quasar/icon-set/svg-fontawesome-v6";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// Import Quasar css
import "quasar/src/css/index.sass";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Quasar, {
                plugins: {},
                lang: quasarLang,
                iconSet: quasarIconSet,
            })
            .mount(el);
    },
});
