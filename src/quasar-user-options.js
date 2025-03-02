
import './styles/quasar.sass';
import '@quasar/extras/material-icons/material-icons.css';
import iconSet from "quasar/icon-set/ionicons-v4";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";

import { Notify } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    iconSet,
  },
  plugins: { Notify },
};
