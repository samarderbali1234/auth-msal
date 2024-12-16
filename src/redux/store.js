import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import {thunk} from 'redux-thunk'; // Import redux-thunk
import rootReducer from './reducers'; 

// Configuration pour redux-persist
const persistConfig = {
  key: 'root',
  storage, 
};

// Création du reducer persistant
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuration du store avec redux-thunk
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk) // Ajout de thunk comme middleware
);

// Configuration de redux-persist pour persister les données
const persistor = persistStore(store);

export { store, persistor };
