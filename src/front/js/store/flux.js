import { Home } from "../pages/home";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: {},
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

			Home: async (email, password, name, lastname, age) => {
				console.log(email,password, name, lastname,age);
				
				try{
					// fetching data from the backend
					const response = await fetch(process.env.BACKEND_URL + "api/signup", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
					body: JSON.stringify({
						email:email,
						password:password,
						name:name,
						lastname:lastname,
						age:age
					})
				})

				if (!response.ok){
					throw new Error("Failed to home");
				}
					const data = await response.json()

                
				console.log("User:", data);
				

					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},


			login: async (email, password) => {
				console.log(email,password);
				
				try{
					// fetching data from the backend
					const response = await fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
					body: JSON.stringify({
						email:email,
						password:password
					})
				})

				if (!response.ok){
					throw new Error("Failed to login");
				}
					const data = await response.json()

                localStorage.setItem("accessToken", data.access_token)

				console.log("User:", data);
				

					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			protectedRoute: async () => {
				let myToken= localStorage.getItem("accessToken")
		
				try{
					// fetching data from the backend
					const response = await fetch(process.env.BACKEND_URL + "api/perfil", {
						method: "GET",
						headers: {
							"Authorization": `Bearer ${myToken}`
						}	
				})

				if (response.ok){
					const data = await response.json()
					console.log(data);
					setStore({user:data})
					return data

				}
					
					// don't forget to return something, that is how the async resolves
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			logout:()=> {
				localStorage.removeItem("accessToken")
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
