import {TableProps} from "@thomasbfrd/table";
import {Person} from "../interfaces/person.interface.ts";

export const EMPLOYEES_LIST: TableProps<Person> =
    {
        data: [
            {
                firstName: "Marie",
                lastName: "Dubois",
                startDate: new Date("2023-06-15"),
                department: 'sales',
                dateOfBirth: new Date("1990-03-22"),
                street: "12 Rue de Rivoli",
                city: "Paris",
                state: "Île-de-France",
                zip: "75001"
            },
            {
                firstName: "Pierre",
                lastName: "Lefèvre",
                startDate: new Date("2022-09-01"),
                department: "sales",
                dateOfBirth: new Date("1985-11-10"),
                street: "45 Avenue de la Liberté",
                city: "Marseille",
                state: "Provence-Alpes-Côte d'Azur",
                zip: "13001"
            },
            {
                firstName: "Sophie",
                lastName: "Martin",
                startDate: new Date("2024-01-20"),
                department: "marketing",
                dateOfBirth: new Date("1995-07-14"),
                street: "78 Rue Victor Hugo",
                city: "Bordeaux",
                state: "Nouvelle-Aquitaine",
                zip: "33000"
            },
            {
                firstName: "Jean",
                lastName: "Bernard",
                startDate: new Date("2021-03-12"),
                department: "humanResources",
                dateOfBirth: new Date("1978-12-05"),
                street: "22 Boulevard de la République",
                city: "Lille",
                state: "Hauts-de-France",
                zip: "59000"
            },
            {
                firstName: "Claire",
                lastName: "Moreau",
                startDate: new Date("2023-11-30"),
                department: "sales",
                dateOfBirth: new Date("1992-04-18"),
                street: "15 Quai des Chartrons",
                city: "Nantes",
                state: "Pays de la Loire",
                zip: "44000"
            },
            {
                firstName: "Lucas",
                lastName: "Girard",
                startDate: new Date("2022-07-08"),
                department: "humanResources",
                dateOfBirth: new Date("1988-09-27"),
                street: "33 Rue de la Part-Dieu",
                city: "Lyon",
                state: "Auvergne-Rhône-Alpes",
                zip: "69003"
            },
            {
                firstName: "Émilie",
                lastName: "Roux",
                startDate: new Date("2024-02-14"),
                department: "engineering",
                dateOfBirth: new Date("1993-01-30"),
                street: "9 Place du Capitole",
                city: "Toulouse",
                state: "Occitanie",
                zip: "31000"
            },
            {
                firstName: "Thomas",
                lastName: "Lemoine",
                startDate: new Date("2021-10-25"),
                department: "sales",
                dateOfBirth: new Date("1983-06-12"),
                street: "27 Promenade des Anglais",
                city: "Nice",
                state: "Provence-Alpes-Côte d'Azur",
                zip: "06000"
            },
            {
                firstName: "Camille",
                lastName: "Petit",
                startDate: new Date("2023-04-03"),
                department: "marketing",
                dateOfBirth: new Date("1997-08-19"),
                street: "14 Rue Saint-Michel",
                city: "Rennes",
                state: "Bretagne",
                zip: "35000"
            },
            {
                firstName: "Antoine",
                lastName: "Faure",
                startDate: new Date("2022-12-10"),
                department: "engineering",
                dateOfBirth: new Date("1980-02-25"),
                street: "5 Quai des Bateliers",
                city: "Strasbourg",
                state: "Grand Est",
                zip: "67000"
            },
            {
                firstName: "Julie",
                lastName: "Garnier",
                startDate: new Date("2023-08-22"),
                department: "engineering",
                dateOfBirth: new Date("1991-05-08"),
                street: "19 Rue de la Comédie",
                city: "Montpellier",
                state: "Occitanie",
                zip: "34000"
            },
            {
                firstName: "Nicolas",
                lastName: "Benoit",
                startDate: new Date("2021-05-17"),
                department: "sales",
                dateOfBirth: new Date("1986-10-03"),
                street: "36 Rue Jeanne d'Arc",
                city: "Rouen",
                state: "Normandie",
                zip: "76000"
            },
            {
                firstName: "Laura",
                lastName: "Colin",
                startDate: new Date("2024-03-05"),
                department: "humanResources",
                dateOfBirth: new Date("1994-12-20"),
                street: "8 Rue de Brest",
                city: "Quimper",
                state: "Bretagne",
                zip: "29000"
            },
            {
                firstName: "Mathieu",
                lastName: "Perrin",
                startDate: new Date("2022-02-28"),
                department: "marketing",
                dateOfBirth: new Date("1989-03-15"),
                street: "42 Avenue Alsace-Lorraine",
                city: "Grenoble",
                state: "Auvergne-Rhône-Alpes",
                zip: "38000"
            },
            {
                firstName: "Chloé",
                lastName: "Dufour",
                startDate: new Date("2023-10-12"),
                department: "humanResources",
                dateOfBirth: new Date("1996-06-28"),
                street: "17 Rue du Maréchal Leclerc",
                city: "La Roche-sur-Yon",
                state: "Pays de la Loire",
                zip: "85000"
            },
            {
                firstName: "Adrien",
                lastName: "Chevalier",
                startDate: new Date("2022-05-10"),
                department: "engineering",
                dateOfBirth: new Date("1987-09-03"),
                street: "25 Avenue de Versailles",
                city: "Versailles",
                state: "Île-de-France",
                zip: "78000"
            },
            {
                firstName: "Léa",
                lastName: "engineering",
                startDate: new Date("2023-02-18"),
                department: "marketing",
                dateOfBirth: new Date("1994-11-25"),
                street: "10 Rue de la République",
                city: "Toulon",
                state: "Provence-Alpes-Côte d'Azur",
                zip: "83000"
            },
            {
                firstName: "Guillaume",
                lastName: "Vidal",
                startDate: new Date("2021-08-07"),
                department: "sales",
                dateOfBirth: new Date("1982-04-12"),
                street: "3 Quai de Rohan",
                city: "Vannes",
                state: "Bretagne",
                zip: "56000"
            },
            {
                firstName: "Manon",
                lastName: "Lambert",
                startDate: new Date("2024-01-05"),
                department: "sales",
                dateOfBirth: new Date("1996-07-19"),
                street: "18 Rue de Boigne",
                city: "Chambéry",
                state: "Auvergne-Rhône-Alpes",
                zip: "73000"
            },
            {
                firstName: "Hugo",
                lastName: "Barbier",
                startDate: new Date("2022-11-22"),
                department: "sales",
                dateOfBirth: new Date("1990-02-14"),
                street: "7 Boulevard de France",
                city: "Évry-Courcouronnes",
                state: "Île-de-France",
                zip: "91000"
            },
            {
                firstName: "Amélie",
                lastName: "Gauthier",
                startDate: new Date("2023-07-30"),
                department: "sales",
                dateOfBirth: new Date("1989-12-08"),
                street: "14 Rue du Palais",
                city: "Narbonne",
                state: "Occitanie",
                zip: "11100"
            },
            {
                firstName: "Benoît",
                lastName: "Caron",
                startDate: new Date("2021-12-15"),
                department: "engineering",
                dateOfBirth: new Date("1984-06-27"),
                street: "29 Avenue Foch",
                city: "Metz",
                state: "Grand Est",
                zip: "57000"
            },
            {
                firstName: "Sarah",
                lastName: "Rey",
                startDate: new Date("2023-09-12"),
                department: "humanResources",
                dateOfBirth: new Date("1993-03-30"),
                street: "6 Rue Saint-Nicolas",
                city: "La Rochelle",
                state: "Nouvelle-Aquitaine",
                zip: "17000"
            },
            {
                firstName: "Vincent",
                lastName: "Muller",
                startDate: new Date("2022-03-25"),
                department: "marketing",
                dateOfBirth: new Date("1981-10-17"),
                street: "11 Rue des Marchands",
                city: "Colmar",
                state: "Grand Est",
                zip: "68000"
            },
            {
                firstName: "Emma",
                lastName: "Lacroix",
                startDate: new Date("2024-04-02"),
                department: "humanResources",
                dateOfBirth: new Date("1997-05-22"),
                street: "20 Rue Écuyère",
                city: "Caen",
                state: "Normandie",
                zip: "14000"
            },
            {
                firstName: "Florian",
                lastName: "Brunet",
                startDate: new Date("2021-06-20"),
                department: "engineering",
                dateOfBirth: new Date("1986-08-09"),
                street: "34 Cours Jean Jaurès",
                city: "Avignon",
                state: "Provence-Alpes-Côte d'Azur",
                zip: "84000"
            },
            {
                firstName: "Inès",
                lastName: "Meunier",
                startDate: new Date("2023-03-08"),
                department: "marketing",
                dateOfBirth: new Date("1995-01-15"),
                street: "9 Rue des Cordeliers",
                city: "Saint-Brieuc",
                state: "Bretagne",
                zip: "22000"
            },
            {
                firstName: "Romain",
                lastName: "Jacquet",
                startDate: new Date("2022-10-03"),
                department: "marketing",
                dateOfBirth: new Date("1988-04-05"),
                street: "16 Boulevard Foch",
                city: "Angers",
                state: "Pays de la Loire",
                zip: "49000"
            },
            {
                firstName: "Pauline",
                lastName: "Bailly",
                startDate: new Date("2023-12-28"),
                department: "humanResources",
                dateOfBirth: new Date("1992-09-13"),
                street: "5 Avenue Édouard VII",
                city: "Biarritz",
                state: "Nouvelle-Aquitaine",
                zip: "64200"
            },
            {
                firstName: "Maxime",
                lastName: "Guérin",
                startDate: new Date("2021-09-19"),
                department: "engineering",
                dateOfBirth: new Date("1983-11-28"),
                street: "22 Boulevard Marre Desmarais",
                city: "Valence",
                state: "Auvergne-Rhône-Alpes",
                zip: "26000"
            },
            {
                firstName: "Élodie",
                lastName: "Marchand",
                startDate: new Date("2023-04-10"),
                department: "sales",
                dateOfBirth: new Date("1991-06-15"),
                street: "8 Rue des Lilas",
                city: "Dijon",
                state: "Bourgogne-Franche-Comté",
                zip: "21000"
            },
            {
                firstName: "Sébastien",
                lastName: "Durand",
                startDate: new Date("2022-08-25"),
                department: "humanResources",
                dateOfBirth: new Date("1985-02-20"),
                street: "15 Avenue Jean Médecin",
                city: "Nice",
                state: "Provence-Alpes-Côte d'Azur",
                zip: "06000"
            },
            {
                firstName: "Aurélie",
                lastName: "Simon",
                startDate: new Date("2024-01-12"),
                department: "marketing",
                dateOfBirth: new Date("1993-10-08"),
                street: "4 Place de l’Hôtel de Ville",
                city: "Reims",
                state: "Grand Est",
                zip: "51100"
            },
            {
                firstName: "Jérôme",
                lastName: "Lévy",
                startDate: new Date("2021-11-03"),
                department: "sales",
                dateOfBirth: new Date("1980-07-22"),
                street: "12 Rue de la Paix",
                city: "Le Havre",
                state: "Normandie",
                zip: "76600"
            },
            {
                firstName: "Océane",
                lastName: "Boyer",
                startDate: new Date("2023-09-15"),
                department: "humanResources",
                dateOfBirth: new Date("1995-03-17"),
                street: "19 Boulevard Carnot",
                city: "Limoges",
                state: "Nouvelle-Aquitaine",
                zip: "87000"
            },
            {
                firstName: "Damien",
                lastName: "Renaud",
                startDate: new Date("2022-06-30"),
                department: "marketing",
                dateOfBirth: new Date("1988-12-12"),
                street: "7 Rue du Général Leclerc",
                city: "Clermont-Ferrand",
                state: "Auvergne-Rhône-Alpes",
                zip: "63000"
            },
            {
                firstName: "Valentine",
                lastName: "Dupont",
                startDate: new Date("2023-12-05"),
                department: "sales",
                dateOfBirth: new Date("1992-05-29"),
                street: "23 Quai de la Fosse",
                city: "Nantes",
                state: "Pays de la Loire",
                zip: "44000"
            }
        ],
        headers: [
            {
                title: "First Name",
                propertyName: "firstName"
            },
            {
                title: "Last Name",
                propertyName: "lastName"
            },
            {
                title: "Start Date",
                propertyName: "startDate"
            },
            {
                title: "Department",
                propertyName: "department"
            },
            {
                title: "Date of Birth",
                propertyName: "dateOfBirth"
            },
            {
                title: "Street",
                propertyName: "street"
            },
            {
                title: "City",
                propertyName: "city"
            },
            {
                title: "State",
                propertyName: "state"
            },
            {
                title: "Zip Code",
                propertyName: "zip"
            },



        ]
    };
