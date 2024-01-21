// this is where we define mirage stuff https://miragejs.com/quickstarts/react-native/development/
// https://github.com/KaungHtetHein116/Travel-Blog-React-Native/blob/master/mockServer/factories/destination.js
//https://miragejs.com/docs/main-concepts/factories/

import { Model, createServer, Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export const startMirageServer = () => {
	createServer({
		models: {
			destination: Model,
		},
		factories: {
			destination: Factory.extend({
				user() {
					return {
						name: faker.person.fullName(),
						avatar: faker.image.avatar(),
					};
				},
				location: faker.location.streetAddress(),
				temperature: Math.floor(Math.random() * (40 - 30)),
				title: faker.lorem.words(),
				description: faker.lorem.sentence(),
				images: [
					{ source: { uri: faker.image.urlLoremFlickr({ category: 'nature' }), }, },
					{ source: { uri: faker.image.urlLoremFlickr({ category: 'nature' }), }, },
					{ source: { uri: faker.image.urlLoremFlickr({ category: 'nature' }), }, },
					{ source: { uri: faker.image.urlLoremFlickr({ category: 'nature' }), }, },
				],
			}),
		},
        seeds(server){
            server.createList("destination", 5)
        },
		routes() {
			this.post("/login", (schema, request) => {
				const { email, password } = JSON.parse(request.requestBody);

				return {
					api_key: "c0082183-35d6-4d39-ac7b-819c546c3b73",
					secret_key: "ecf3ff4a-78d8-4362-9824-3fd272bb3499",
					email,
                    data: schema.destinations.all()
				};
			});
		},
	});
};
