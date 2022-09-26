import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { type UserModule } from '~/types'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)

  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient) {
    pinia.use(createPersistedState())
    pinia.state.value = (initialState.pinia) || {}
  }
  else { initialState.pinia = pinia.state.value }
}
