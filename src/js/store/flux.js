const BASE_URL = 'https://www.swapi.tech/api'; // URL base centralizada

async function obtenerDatos(puntoFinal) {
    try {
        const respuesta = await fetch(`${BASE_URL}/${puntoFinal}`,{ method: "GET", headers: { "Content-Type": "application/json" } });
		console.log(puntoFinal)
        const datos = await respuesta.json();
		

        const detalles = await Promise.all(datos.results.map(async (elemento) => {
			
            const respuestaDetalle = await fetch(elemento.url);
            const datosDetalle = await respuestaDetalle.json();
            return datosDetalle.result;
        }));

        return detalles;
    } catch (error) {
        console.error(`Error al obtener datos de ${puntoFinal}:`, error);
    }
}

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],

			planets: [],

			favorites: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getCharacters: async () => {
                const personajes = await obtenerDatos('people');
                setStore({ characters: personajes });
            },

            getPlanets: async () => {
                const planetas = await obtenerDatos('planets');
                setStore({ planets: planetas });
            },
			
			addFavorite: (item) => {
				console.log(item)

				const store = getStore();
				const searchItem = store.favorites.find( (search) => {
                     return search == item 
				})
				if (!searchItem) 
				setStore({ favorites: [...store.favorites, item] })
			},

			deleteFavorite: (index) => {

				const store = getStore();
				const newFavorites = store.favorites.filter((char) => {
					return char.uid !== index
				})
				setStore({ favorites: newFavorites })
			},


		}

	};
};

export default getState;