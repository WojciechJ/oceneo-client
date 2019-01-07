## Oceneo - aplikacja umożliwiająca przeglądanie i dodawanie opinii o produktach.

Projekt zaliczeniowy z przedmiotu Technologie Aplikacji Serwerowych.

Projekt powinien:
1. Realizować jeden z tematów przedstawionych poniżej.
2. Posiadać webową oraz mobilną warstwę interfejsu użytkownika.
3. Posiadać warstwę biznesową.
4. Posiadać warstwę dostępu do bazy danych.
5. Wykorzystywać do komunikacji pomiędzy warstwami interfejsy zdalne, czyli w szczególności:
- Warstwy webowa i mobilna powinny odwoływać się do warstwy biznesowej za pośrednictwem
technologii zdalnego wywoływania procedur lub wzorca architektury REST.
- Warstwa dostępu do bazy danych powinna odwoływać się do systemu baz danych niezależnego
od warstwy webowej i biznesowej (tj. nie korzystamy z baz „osadzonych”).

### Terminy prezentacji
- 26.11 Mateusz Skrok
- 10.12 Jagodziński Wojciech
- 17.12 Marcin Mirecki
- 28.01.2019 Prezentacja zespołowa

### Uruchomienie aplikacji
Polecenie
```
npm start
```
w katalogu oceneo-client uruchamia tryb development na localhost:3001.
```
npm install
```
### Uruchomienie na wydziale (w przypadku błędu z wersjami webpack'a)

Open cmd on the node-modules folder outside of your project folder

Uninstall webpack and webpack-dev-server:
```
npm uninstall webpack
npm uninstall webpack-dev-server
```
Delete the node-modules folder and the package-lock.json file from your project's folder.

Open the node-modules again
```
npm install webpack@4.19.1
npm install webpack-dev-server@3.1.9
```
Use this command on your project folder
```
npm install
```
Zmienić w package.json 'set PORT' na: (u mnie musi być 'set PORT # &&' bo inaczej nie działa)
```
PORT=3001 react-scripts start
```
W przeglądarce:
```
http://localhost:3001/home
```

### Przydatne strony
- https://alligator.io/react/axios-react/
- https://magic.reactjs.net/htmltojsx.htm
- https://daveceddia.com/watch-out-for-undefined-state/
- https://scotch.io/tutorials/build-a-react-app-with-user-authentication#toc-index-page
- https://goshakkk.name/array-form-inputs/
- https://serverless-stack.com/chapters/create-a-login-page.html

Nasze api
```
http://oceneo-api.herokuapp.com/api/products.json
http://oceneo-api.herokuapp.com/api/products/<id>/rates.json
```
Przykladowe api
```
https://jsonplaceholder.typicode.com/users
```

### Etapy
##### Strony
- [x] index
- [x] logowanie
- [x] rejestracja
- [x] przywrócenie hasła
- [x] dodanie produktu
- [x] dodanie opini
- [x] profil użytkownika
- [ ] edycja produktu

##### Do reacta
- [x] router-sciezki
- [x] strona startowa
- [ ] dodanie użytkownika
- [ ] dodanie produktu
- [ ] pobranie z bazy danych do edycji produktu
- [ ] usunięcie produktu
- [x] dodanie opinii
- [ ] usunięcie opinii
- [ ] wyszukanie frazy i zwrócenie wyniku
- [ ] sprawdzenie czy użytkownik jest zalogowany
- [ ] sprawdzenie typu użytkownika i dodanie/usunięcie funkcji
- [ ] wylogowanie użytkownika

### Punktacja

|Pkt|Funkcjonalność indywidualna|
|---|--------------|
| 7 | Poprawność implementacji/integracji wybranej technologii w projekcie |
| 3 | Prezentacja (slajdy max. 10 minut) |

|Pkt|Funkcjonalność zespołowa|
|---|--------------|
| 7 | Zgodność ze specyfikacją zadania |
| 3 | Bezawaryjne działanie |

|Ocena|Pkt|
|-----|---|
|bdb | 18-20|
|db+| 17-18 |
|db | 14-17 |
|dst+| 13-14 |
|dst | 10-13 |
|ndst| 0-10 |
