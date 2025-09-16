# Projet 14 - HRnet

![HRnet](https://user.oc-static.com/upload/2024/02/21/17085055322514_Capture%20d%E2%80%99e%CC%81cran%202024-02-21%20a%CC%80%2009.52.02.png)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

Quatorzième projet de la formation OpenClassrooms : Développeur d'applications Javascript/React. <br /> <br />
Objectifs :
- Analyser la performance d'une application web
- Déployer une application front-end
- Refondre une application pour réduire la dette technique
- Mettre en place son environnement Front-End
- Produire de la documentation technique pour une application

## Contexte
HRnet est une vieille plateforme web interne à la société Wealth Health. <br />
Les plugins embarqués sont en jQuerry. <br />
Afin de moderniser cette plateforme, l'objectif est de la convertir en application web React,
et d'y convertir les plugins en composants. <br/> 
Les perfomances doivent également être supérieures pour maintenir une expérience utilisateur optimale.

## Installation

Les librairies intégrées au projet sont : <br />
\- SASS <br />
\- Typescript <br />
\- Eslint <br />
\- React-Router <br />
\- Modal Custom <br />
\- Calendar Custom <br />
\- Dropdown Custom <br />
\- Table Custom <br />
<br />

Pour récupérer le projet, clonez directement ce repository puis faites un ``` npm install ```. <br />
Enfin, lancez la commande ```npm run dev:server```.

P.I : Le projet tourne sur node 18.18.0.

## Modal Custom
<a href="https://github.com/ThomasBfrd/Modal_Component" target="_blank" alt="Repo Modal Custom">Lien du repository</a>

Composant générique qui permet l'affichage d'un modal, qu'elle soit en succès, validation ou en erreur.
L'UI change selon le type définit en entrée, deux boutons sont disponibles : 
un bouton de fermeture pour annuler l'action et/ou un bouton de validation.

Le composant prend en entrée un type, un titre, un texte en body, un texte pour le bouton (le cancel est optionnel et disponible uniquement pour le type submit),
deux méthodes callback permettant d'appeler une action (cancel et OK).

Exemple d'utilisation :
``` javascript
<Modal 
    type="submit" 
    title="Warning" 
    body="Are you sure you want to create this employee?"
    okButton="Yes" 
    cancelButton="No" 
    onOk={handleSubmit(submitData)}
    onCancel={() => setConfirmModal(false)}
/>
```

## Calendar Custom
<a href="https://github.com/ThomasBfrd/Calendar_Component" target="_blank" alt="Repo Calendar Custom">Lien du repository</a>

Composant qui permet l'affichage d'un calendrier.
Ce calendrier retourne en callback la date sélectionnée.
L'utilisateur dispose d'un dropdown pour sélectionner le mois et l'année.

Le composant est modifiable par son apparence (couleurs).

Exemple d'utilisation :
``` javascript
<Calendar
    backgroundColor="#ffffff"
    primaryColor="#ef8354"
    secondaryColor="#2d3142"
    tertiaryColor="#ffffff"
    activeColor="#ef8354"
    textPrimaryColor="#ffffff"
    textSecondaryColor="#2d3142"
    hoverColor="#bfc0c0"
    onDateChange={onBirthDateDateChange}
    onCancelCalendar={() => setDateOfBirthOpened(false)}
/>
```

## Dropdown Custom
<a href="https://github.com/ThomasBfrd/Dropdown_Component" target="_blank" alt="Repo Dropdown Custom">Lien du repository</a>

Composant qui permet l'affichage d'un dropdown.
Ce dropdown prend un type ```string | number | boolean | Date``` pour les options. 
L'option sélectionnée est renvoyée en callback et reste en higlight comme référence.

Le composant est modifiable par son apparence (width/height et padding) et couleurs.

Exemple d'utilisation :
``` javascript
<Dropdown
    width={180}
    paddingY={5}
    paddingX={5}
    placeholder="Select a state"
    options={countries}
    onDropdownItemSelected={onStateSelected}
    primaryColor="#fff"
    secondaryColor="#000"
    backgroundPrimaryColor="#000"
    backgroundSecondaryColor="#fff"
    itemHoverColor="#000"
    hoverColor="#fff"
/>
```

## Table Custom
<a href="https://github.com/ThomasBfrd/Table_Component" target="_blank" alt="Repo Table Custom">Lien du repository</a>

Composant générique qui permet l'affichage d'un tableau.
Ce tableau prend en paramètre un type générique pour la data transmise, et un objet contenant des strings (title/label et propertyName).
Le tableau dispose d'une pagination avec laquelle l'utilisateur peut sélectionner le nombre d'éléments par page.
Chaque header dispose d'un tri générique (type string, date ou number) permettant le tri de toutes les data du tableau.
Chaque ligne peut être highlight au hover de la souris.

Le composant est modifiable par son apparence (couleurs).

Exemple d'utilisation :
``` javascript
<Table 
   data={employeesData.employees.data}
   headers={employeesData.employees.headers}
   backgroundHeaderFooterColor="#000"
   backgroundBodyTable="#ffffff"
   activeColor="#000"
   textPrimaryColor="#ffffff"
   textSecondaryColor="#2d3142"
   hoverColor="#EAEFEF"
/>
```

## Demo

![HRnet_Dashboard](https://i.postimg.cc/MHC5YDQW/dashboard.png)
![HRnet_Dashboard](https://i.postimg.cc/rw8nZfHm/form.png)
