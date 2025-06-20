import "./employee-list.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import { Modal } from "@thomasbfrd/modal";
import "@thomasbfrd/modal/dist/modal.css";
import { Table, TableProps } from "@thomasbfrd/table";
import "@thomasbfrd/table/dist/table.css";
import { Calendar } from "@thomasbfrd/calendar";
import "@thomasbfrd/calendar/dist/calendar.css";
import { Dropdown } from "@thomasbfrd/dropdown";
import "@thomasbfrd/dropdown/dist/dropdown.css";

interface Person {
    firstName: string;
    lastName: string;
    startDate: Date;
    department: DEPARTMENT;
    dateOfBirth: Date;
    street: string;
    city: string;
    state: string;
    zip: string;
}

// interface Song {
//     title: string;
//     artist: string;
//     genre: string;
//     releaseDate: Date;
//     label: string;
//     duration: string;
// }

type DEPARTMENT = 'Sales' | 'Marketing' | 'Engineering' | 'Human Resources';

const options: Array<string> = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

const mockData: TableProps<Person> =
    {
        data: [
            {
                firstName: "Marie",
                lastName: "Dubois",
                startDate: new Date("2023-06-15"),
                department: 'Sales',
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
                department: "Sales",
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
                department: "Marketing",
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
                department: "Human Resources",
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
                department: "Sales",
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
                department: "Human Resources",
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
                department: "Engineering",
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
                department: "Sales",
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
                department: "Marketing",
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
                department: "Engineering",
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
                department: "Engineering",
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
                department: "Sales",
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
                department: "Human Resources",
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
                department: "Marketing",
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
                department: "Human Resources",
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
                department: "Engineering",
                dateOfBirth: new Date("1987-09-03"),
                street: "25 Avenue de Versailles",
                city: "Versailles",
                state: "Île-de-France",
                zip: "78000"
            },
            {
                firstName: "Léa",
                lastName: "Engineering",
                startDate: new Date("2023-02-18"),
                department: "Marketing",
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
                department: "Sales",
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
                department: "Sales",
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
                department: "Sales",
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
                department: "Sales",
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
                department: "Engineering",
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
                department: "Human Resources",
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
                department: "Marketing",
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
                department: "Human Resources",
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
                department: "Engineering",
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
                department: "Marketing",
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
                department: "Marketing",
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
                department: "Human Resources",
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
                department: "Engineering",
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
                department: "Sales",
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
                department: "Human Resources",
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
                department: "Marketing",
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
                department: "Sales",
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
                department: "Human Resources",
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
                department: "Marketing",
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
                department: "Sales",
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

// const mockData2: TableProps<Song> = {
//     data: [
//         {
//             title: "Hold On",
//             artist: "Tisoki",
//             genre: "EDM Trap",
//             releaseDate: new Date("2023-05-12"),
//             label: "Monstercat",
//             duration: "3:45"
//         },
//         {
//             title: "kidsgonemad!",
//             artist: "ISOxo",
//             genre: "EDM Trap",
//             releaseDate: new Date("2023-10-20"),
//             label: "88rising",
//             duration: "3:28"
//         },
//         {
//             title: "Wreck It",
//             artist: "Viperactive",
//             genre: "Bass House",
//             releaseDate: new Date("2024-03-15"),
//             label: "Disciple",
//             duration: "3:12"
//         },
//         {
//             title: "Don’t Look Down",
//             artist: "Knock2",
//             genre: "Bass House",
//             releaseDate: new Date("2023-02-03"),
//             label: "Nightmode",
//             duration: "3:30"
//         },
//         {
//             title: "Angels Landing",
//             artist: "ISOxo & FrostTop",
//             genre: "EDM Trap",
//             releaseDate: new Date("2022-11-04"),
//             label: "Sable Valley",
//             duration: "3:56"
//         },
//         {
//             title: "Sick",
//             artist: "Tisoki & Watgood",
//             genre: "EDM Trap",
//             releaseDate: new Date("2022-07-22"),
//             label: "Dim Mak",
//             duration: "3:18"
//         },
//         {
//             title: "Make It Bang",
//             artist: "Viperactive & Acraze",
//             genre: "Bass House",
//             releaseDate: new Date("2024-06-07"),
//             label: "Create Music Group",
//             duration: "3:40"
//         },
//         {
//             title: "Click",
//             artist: "Jauz",
//             genre: "Bass House",
//             releaseDate: new Date("2023-09-08"),
//             label: "Bite This!",
//             duration: "3:25"
//         },
//         {
//             title: "Nightrealm",
//             artist: "ISOxo",
//             genre: "EDM Trap",
//             releaseDate: new Date("2023-10-20"),
//             label: "88rising",
//             duration: "4:02"
//         },
//         {
//             title: "Freak 2 Freak",
//             artist: "Dion Timmer & Tisoki",
//             genre: "EDM Trap",
//             releaseDate: new Date("2024-01-19"),
//             label: "Excision Music",
//             duration: "3:33"
//         },
//         {
//             title: "Boombox",
//             artist: "RL Grime",
//             genre: "EDM Trap",
//             releaseDate: new Date("2023-11-10"),
//             label: "Sable Valley",
//             duration: "3:50"
//         },
//         {
//             title: "Rumble",
//             artist: "Skrillex & Fred Again..",
//             genre: "Bass House",
//             releaseDate: new Date("2022-08-17"),
//             label: "Atlantic Records",
//             duration: "3:27"
//         },
//         {
//             title: "Lost My Way",
//             artist: "Sickmode",
//             genre: "Bass House",
//             releaseDate: new Date("2024-04-05"),
//             label: "Barong Family",
//             duration: "3:15"
//         },
//         {
//             title: "Psycho Therapy",
//             artist: "Knock2 & Eptic",
//             genre: "EDM Trap",
//             releaseDate: new Date("2023-06-23"),
//             label: "Nightmode",
//             duration: "3:42"
//         },
//         {
//             title: "Freak Out",
//             artist: "Habstrakt",
//             genre: "Bass House",
//             releaseDate: new Date("2024-02-09"),
//             label: "Gud Vibrations",
//             duration: "3:20"
//         },
//         {
//             title: "Eclipse",
//             artist: "Tchami & Godamn",
//             genre: "Bass House",
//             releaseDate: new Date("2023-03-31"),
//             label: "Confession",
//             duration: "3:38"
//         },
//         {
//             title: "Afterparty",
//             artist: "Dion Timmer",
//             genre: "EDM Trap",
//             releaseDate: new Date("2024-07-12"),
//             label: "Monstercat",
//             duration: "3:55"
//         },
//         {
//             title: "Take Control",
//             artist: "Joyryde",
//             genre: "Bass House",
//             releaseDate: new Date("2022-10-14"),
//             label: "Hard Recs",
//             duration: "3:30"
//         },
//         {
//             title: "Redline",
//             artist: "FrostTop",
//             genre: "EDM Trap",
//             releaseDate: new Date("2023-12-01"),
//             label: "Sable Valley",
//             duration: "3:47"
//         },
//         {
//             title: "Baddest",
//             artist: "Vion Konger",
//             genre: "Bass House",
//             releaseDate: new Date("2024-05-17"),
//             label: "Spinnin’ Records",
//             duration: "3:10"
//         },
//         {
//             title: "Overdrive",
//             artist: "Crankdat",
//             genre: "EDM Trap",
//             releaseDate: new Date("2023-09-22"),
//             label: "Monstercat",
//             duration: "3:35"
//         },
//         {
//             title: "Vibe Check",
//             artist: "GRiZ & Wreckno",
//             genre: "EDM Trap",
//             releaseDate: new Date("2024-03-08"),
//             label: "Deadbeats",
//             duration: "3:25"
//         }
//     ],
//     headers: [
//         {
//             title: "Title",
//             propertyName: "title"
//         },
//         {
//             title: "Artist",
//             propertyName: "artist"
//         },
//         {
//             title: "Genre",
//             propertyName: "genre"
//         },
//         {
//             title: "Release Date",
//             propertyName: "releaseDate"
//         },
//         {
//             title: "Label",
//             propertyName: "label"
//         },
//         {
//             title: "Duration",
//             propertyName: "duration"
//         }
//     ]
// };

const EmployeeList = () => {

    const [isModalOpened, setIsModalOpened] = useState(false);

    function onDateChange(date: string) {
        console.log(date)
    }

    function onDropDownItemSelected(item: string | number) {
        console.log(item)
    }

    function handleCloseModal() {
        console.log("ok button clicked");
        setIsModalOpened(false);
    }

    // function handleCancelActionModal() {
    //     console.log("canceling operation");
    //     setIsModalOpened(false);
    // }

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Link to="/">Home</Link>
            <button onClick={() => setIsModalOpened(!isModalOpened)}>Afficher la modal</button>
            {isModalOpened ? (
                <Modal
                    title="Succès"
                    body="Félicitation, votre abonnement a bien été enregistré. Vous pouvez maintenant accéder à votre espace client."
                    type="success"
                    okButton="Fermer"
                    onOk={handleCloseModal}
                />
            ) : null}
            <Dropdown
                options={options}
                  onDropdownItemSelected={onDropDownItemSelected}
                  primaryColor="#e2e8f0"
                  secondaryColor="#0f172a"
                  backgroundPrimaryColor="#1e293b"
                  backgroundSecondaryColor="#334155"
                  itemHoverColor="#10b981"
                  hoverColor="#10b981"
            />
            <label>Select a date</label>
            <Calendar
                backgroundColor="#ffffff"
                primaryColor="#ef8354"
                secondaryColor="#2d3142"
                tertiaryColor="#ffffff"
                activeColor="#ef8354"
                textPrimaryColor="#ffffff"
                textSecondaryColor="#2d3142"
                hoverColor="#bfc0c0"
                onDateChange={onDateChange}
            />
            <Table data={mockData.data} headers={mockData.headers}
                   backgroundHeaderFooterColor="#333446"
                   backgroundBodyTable="#ffffff"
                   activeColor="#333446"
                   textPrimaryColor="#ffffff"
                   textSecondaryColor="#2d3142"
                   hoverColor="#EAEFEF"
            />
            {/*<Table data={mockData2.data} headers={mockData2.headers}*/}
            {/*       backgroundHeaderFooterColor="#333446"*/}
            {/*       backgroundBodyTable="#ffffff"*/}
            {/*       activeColor="#333446"*/}
            {/*       textPrimaryColor="#ffffff"*/}
            {/*       textSecondaryColor="#2d3142"*/}
            {/*       hoverColor="#EAEFEF"*/}
            {/*/>*/}
        </div>
    );
};

export default EmployeeList;