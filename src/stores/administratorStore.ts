import {defineStore} from "pinia";
import {ref} from "vue";

const AdministratorStore = defineStore(
	"administratorlogin",
	() => {
        const SessionID = ref("");
		const administrator_loginSession = ref(false);
		const setLogin = (loginNewSession: boolean) => {
			administrator_loginSession.value = loginNewSession;
		};

		return {
			administrator_loginSession,
			setLogin,
            SessionID,
		};
	},
	{
		persist: true,
	}
);
export default AdministratorStore;