const films = [
{
    name: "Harold and Maude",
    released: 1971,
    rating: 7.9,
    imdb: "tt0067185",
    stars: ["Ruth Gordon", "Bud Cort", "Vivian Pickles"],
    director: "Hal Ashby",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTM5Njc1MTY4NV5BMl5BanBnXkFtZTYwMDM5NzM2._V1_QL75_UX406_.jpg",
        "https://variety.com/wp-content/uploads/2021/12/Harold-and-Maude-Ellen-Geer.jpg"
    ]
},
{
    name: "Being There",
    released: 1979,
    rating: 7.9,
    imdb: "tt0078841",
    stars: ["Peter Sellers", "Shirley MacLaine", "Melvyn Douglas"],
    director: "Hal Ashby",
    photos:[
        "https://m.media-amazon.com/images/M/MV5BMDgwYjlmNjgtYmNjMy00MDlmLTk4YjUtNTA5OTY0YmNiNzFjXkEyXkFqcGc@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMmJhMGEyODAtMjJiMy00OGIzLTg2MWYtNTMxY2E1NTk3MGQyXkEyXkFqcGc@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNzY0Nzc5MTI3MV5BMl5BanBnXkFtZTcwMTIzNTIwNA@@._V1_QL75_UX288_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNjc5ODBmNTctMGE0MC00MzgzLThkMDAtM2Y4NjAzZDQwNjc2XkEyXkFqcGc@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "Dr. Strangelove",
    released: 1964,
    rating: 8.4,
    imdb: "tt0057012",
    stars: ["Peter Sellers", "George C. Scott", "Sterling Hayden", "Slim Pickens"],
    director: "Stanley Kubrick",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMmEyMjA0NWYtMmNhZi00NDVlLWFhZWYtYzEzZDgwMzIyNGI5XkEyXkFqcGc@._V1_QL75_UX361_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYWJiNTA2OWUtYjAxZC00ZDE0LTkzMzItMzVlZDA2MWUzNzBjXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYzcxNDM3OWYtM2UwNi00ZDA3LWJmOTMtM2I1NDViYjY4MjVkXkEyXkFqcGc@._V1_QL75_UX358_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjYwNDQ1YzgtY2ZjYS00YjNmLTk0MjktMGY0YzNjMjQ4NGQ2XkEyXkFqcGc@._V1_QL75_UX373_.jpg"
    ]
},
{
    name: "2001: A Space Odyssey",
    released: 1968,
    rating: 8.3,
    imdb: "tt0062622",
    stars: ["Keir Dullea", "Gary Lockwood", "William Sylvester"],
    director: "Stanley Kubrick",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTM1ODg0OTY5OV5BMl5BanBnXkFtZTcwNTYyNDMzNQ@@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTMzZDIwNGItNTM3Ny00NjMyLWJiZmYtZjE1ODVlZDQ4M2JlXkEyXkFqcGc@._V1_QL75_UX442_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTQ0OTY4MjIzNV5BMl5BanBnXkFtZTcwOTUyNDMzNQ@@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZmU1ZjllY2QtNjcxYy00ZTJjLWFkYTAtM2ZmZThmZmJjN2Q1XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzExZmUyYmYtYmE1OC00YWUzLTk1MDgtZTEzOGM5YWM4ZjEwXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOWQzMDc2YjctZjY1OC00MDI2LTk3MTEtOTFlYmYzMWNmNWIzXkEyXkFqcGc@._V1_QL75_UX808_.jpg"
    ]
},
{
    name: "An American Werewolf in London",
    released: 1981,
    rating: 7.5,
    imdb: "tt0082010",
    stars: ["David Naughton", "Griffin Dunne", "Jenny Agutter"],
    director: "John Landis",
    popcorn: "https://www.youtube.com/watch?v=dThrj2IE-0I",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYjQxMjc0NmMtNmU0Yi00N2EyLWIzNDUtMmNiYWRkODk4NGYzXkEyXkFqcGc@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYzQzMDA4MzMtNjViMC00NDFkLWJlMWMtMmNmOTJmNWY0NDBlXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "A Clockwork Orange",
    released: 1971,
    rating: 8.3,
    imdb: "tt0066921",
    stars: ["Malcolm McDowell", "Patrick Magee", "Michael Bates"],
    director: "Stanley Kubrick",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjE0NTk2NDkzNl5BMl5BanBnXkFtZTcwMzE4NzMyNQ@@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDJiYmJkOGItNmZhYy00YWE0LThlNzgtODFiOTI3YzBmMTI4XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Shining",
    released: 1980,
    rating: 8.4,
    imdb: "tt0081505",
    stars: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd", "Scatman Crothers"],
    director: "Stanley Kubrick",
    popcorn: "https://www.youtube.com/watch?v=1yxZgAWTIwg",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTc5MjM4Njg3Nl5BMl5BanBnXkFtZTgwNTk1NDU2NjM@._V1_QL75_UX268_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU0NTYxNjIzNl5BMl5BanBnXkFtZTcwNDk4NDIwNA@@._V1_QL75_UX326_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOWU4NjNiNDQtYmQwMS00ZDI1LTk5NDItY2UwZDZmNWJlOWY3XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZDA5ZjM3ZjEtMTFmMC00MzA0LWI3NjYtMjQyZjhiMjk1ZDVmXkEyXkFqcGc@._V1_QL75_UX446_.jpg"
    ]
},
{
    name: "Fargo",
    released: 1996,
    rating: 8.1,
    imdb: "tt0116282",
    stars: ["William H. Macy", "Frances McDormand", "Steve Buscemi"],
    director: "Coen brothers",
    popcorn: "https://www.youtube.com/watch?v=D8CXQ_2OD9A",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTM3ODIzMzcyN15BMl5BanBnXkFtZTcwNzkzNjMyNA@@._V1_QL75_UX327_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTQwNTAzMTU4M15BMl5BanBnXkFtZTcwMDgzNDY3Mw@@._V1_QL75_UX442_.jpg"
    ]
},
{
    name: "Apocalypse Now",
    released: 1979,
    rating: 8.4,
    imdb: "tt0078788",
    stars: ["Martin Sheen", "Marlon Brando", "Robert Duvall"],
    director: "Francis Ford Coppola",
    popcorn: "https://www.youtube.com/watch?v=ybOxME-Opzo",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BOTQyMTk3Njg3NF5BMl5BanBnXkFtZTcwMjUxMTkzNQ@@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDllM2U1ZTYtMDRiYy00M2I0LWEwOWUtZTNmODdiNjA5N2IwXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMDBkODNiOWQtMWZiYi00YTI0LTlmYzMtM2UwMzBkZWZjZTRhXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDEzODAyYWUtMzliMy00YTcwLWFlZjQtMzdlZjJmMTRiNDE3XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Raising Arizona",
    released: 1987,
    rating: 7.3,
    imdb: "tt0093822",
    stars: ["Nicolas Cage", "Holly Hunter", "Trey Wilson"],
    director: "Coen brothers",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTAzMTA0NjE0NDNeQTJeQWpwZ15BbWU4MDAzMzIxNzIy._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "No Country for Old Men",
    released: 2007,
    rating: 8.2,
    imdb: "tt0477348",
    stars: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"],
    director: "Coen brothers",
    popcorn: "https://www.youtube.com/watch?v=fXhry99UFus",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMzM2ZjQ5MmQtOWY2Yi00NDI5LWJkZjgtMWM5M2Q2ZWMzNmRkXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZDE4Y2QxMmYtYjVhNi00N2Y4LWEzYzYtNWU1ZTdiMmFlOTEzXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BODlkODAzMjYtM2EwNC00NWM3LWE2YjEtY2RmZjUxZTRkY2ExXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNWM2ZTM0MzAtNzhiZC00NDRmLTkyNjUtNDA5NTA5OGNlNDQxXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "One Flew Over the Cuckoo's Nest",
    released: 1975,
    rating: 8.7,
    imdb: "tt0073486",
    stars: ["Jack Nicholson", "Louise Fletcher", "Michael Berryman"],
    director: "Milos Forman",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNDMyNTY5NTctZmM1MS00ZjZkLWJkMmQtNmQzNWUwZjg2ZjZlXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYjc3MmI4ZWEtZGRkZC00M2MxLThjZWUtZTYwYmM2ZDY3M2U2XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjE4MTQ3ODc4MV5BMl5BanBnXkFtZTcwMjYzNTIwNA@@._V1_QL75_UX400_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDc2NjMwNTUwOF5BMl5BanBnXkFtZTcwOTUzNTIwNA@@._V1_QL75_UX404_.jpg"
    ]
},
{
    name: "Terms of Endearment",
    released: 1983,
    rating: 7.4,
    imdb: "tt0086425",
    stars: ["Shirley MacLaine", "Debra Winger", "Jack Nicholson"],
    director: "James L. Brooks",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODE2NTAwNzE2MV5BMl5BanBnXkFtZTgwODkzMDY3MTE@._V1_QL75_UX320_.jpg",
        "https://m.media-amazon.com/images/M/MV5BN2FjNzZhYzYtNzUzMS00OWQwLTk5NTMtMDUxZDhlMGE3YTA0XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Wizard of Oz",
    released: 1939,
    rating: 8.1,
    imdb: "tt0032138",
    stars: ["Judy Garland", "Ray Bolger", "Margaret Hamilton", "Frank Morgan"],
    director: "Victor Fleming",
    popcorn: "https://www.youtube.com/watch?v=Bs87zHvuDtM",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODc2NDU2NDc4OF5BMl5BanBnXkFtZTcwNjk4NTkxNA@@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU1Mzg2ODcwNV5BMl5BanBnXkFtZTcwMzg4NTkxNA@@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTA5MDEyNDM5MjFeQTJeQWpwZ15BbWU3MDQ4ODU5MTQ@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjI3NDk5NzY0Nl5BMl5BanBnXkFtZTcwNjI5NTkxNA@@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "Papillon",
    released: 1973,
    rating: 8.0,
    imdb: "tt0070511",
    stars: ["Steve McQueen", "Dustin Hoffman", "Victor Jory"],
    director: "Franklin J. Schaffner",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYWU1ODhmOWEtODBjYi00OWY2LWE0YzctMTFjZjNhOGQ0NjgxXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDRjOTY4YjQtMTE3ZS00MGY3LTgxYzctMjlmNzZhOTg1ODMxXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZmRiZGNiZjUtZWExYS00OWZlLTlkYTAtOGQ5ZjJiODRkZDdkXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYmVhNjdkYTEtYjNmOC00MTg2LWE3YzktMWMyZWFjZTRmMGM4XkEyXkFqcGc@._V1_QL75_UX808_.jpg"
    ]
},
{
    name: "Close Encounters of the Third Kind",
    released: 1977,
    rating: 7.6,
    imdb: "tt0075860",
    stars: ["Richard Dreyfuss", "Teri Garr", "Melinda Dillon", "François Truffaut"],
    director: "Steven Spielberg",
    popcorn: "https://www.youtube.com/watch?v=J0t8tGyE6Ug",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNjRiMTIwOTEtYTlhZS00ZDljLThiNjEtYWZlMmFhN2EzODQwXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYmEyMjk1YmYtMGQ2MS00Y2JiLWEwYWUtNTQwNDE0OTgzOTUwXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYjRmNmY4MTAtMzY3Zi00MDZiLTk3NzUtNGI5ODczNDA4NTA3XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzcxMTE5MWQtYzE2NC00ODBjLWEyYzQtM2M0NTExZjIwNzVjXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Butch Cassidy and the Sundance Kid",
    released: 1969,
    rating: 8.0,
    imdb: "tt0064115",
    stars: ["Paul Newman", "Robert Redford", "Katharine Ross"],
    director: "George Roy Hill",
    popcorn: "https://www.youtube.com/watch?v=J4qPrK0j-B4",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTIzNDI4NjAwOF5BMl5BanBnXkFtZTYwMTE1NzM2._V1_QL75_UX415_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZjM4NTBkOTItYzI1Mi00YjZjLTlhMDEtZGU2ZWM3OWU4Zjk3XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Pulp Fiction",
    released: 1994,
    rating: 8.9,
    imdb: "tt0110912",
    stars: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    director: "Quentin Tarantino",
    popcorn: "https://www.youtube.com/watch?v=jDqzDdStces",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMDc2YmFjZDgtZmEyNy00ZjAyLWI5NGQtZTY2OGZiZDU2ZjAxXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZmNjNmNlYjUtNDdlZC00Y2E4LTg5NmItODJhMzBkNTg0ZjBjXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTQ2MDk3ODAwMV5BMl5BanBnXkFtZTgwNzE4OTEwMjE@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTgxNDYxNjMzNF5BMl5BanBnXkFtZTgwODE4OTEwMjE@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "Kill Bill: Vol. 1, 2",
    released: 2003,
    rating: 8.2,
    imdb: "tt0266697",
    stars: ["Uma Thurman", "David Carradine", "Daryl Hannah"],
    director: "Quentin Tarantino",
    popcorn: "https://www.youtube.com/watch?v=1NdYYh_7Osg",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMzY2NTM0YWQtYTYxOC00MzRkLTg4YTEtYTA2YmU3NTM1YzBhXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTUzZGMzZTYtZmIzMy00M2Q2LTkyMDAtOTAxYmE5YTk5ODMwXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTUwNzY4ODY3OV5BMl5BanBnXkFtZTgwNDc4MzA4MTI@._V1_QL75_UX359_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTgxNzEwNzEyN15BMl5BanBnXkFtZTgwMjc4MzA4MTI@._V1_QL75_UX436_.jpg"
    ]
},
{
    name: "Amadeus",
    released: 1984,
    rating: 8.4,
    imdb: "tt0086879",
    stars: ["Tom Hulce", "F. Murray Abraham", "Elizabeth Berridge"],
    director: "Milos Forman",
    popcorn: "https://www.youtube.com/watch?v=FY96tSEBYQw",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTM5MzE4MTQtOWM4ZS00YjNlLTgzYjAtY2Q2ZDAxMDM4NWZhXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BODUzNDczOWUtODRmNS00ZGEyLWJlYzYtMjdhNDEwYmE3MjZhXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNjk4MTExNTAtNWU0Ni00ODk3LWJiODQtMGNlMTg5NzA5NDQyXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZmU1OWY3N2ItYWQwNi00N2RlLWEzZGItZjQzNzU5ZmQ2NDkwXkEyXkFqcGc@._V1_QL75_UX808_.jpg"
    ]
},
{
    name: "American Graffiti",
    released: 1973,
    rating: 7.4,
    imdb: "tt0069704",
    stars: ["Richard Dreyfuss", "Ron Howard", "Paul Le Mat", "Cindy Williams", "Mackenzie Phillips"],
    director: "George Lucas",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BOTM5MDY1ZWYtMzhiOS00NDVkLWJlZGItZDEzZjQwM2Y0ZGU1XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOTBjYzMwMDgtZGE3Yi00NTMyLWEwZTItYmNiYWY3YTk3MDQ1XkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjE4MzBiM2QtNzJmMC00M2I3LThkYTYtZTgwN2UyMzBmY2M4XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMmUxNGQwMzItMjcwMS00ZTdhLThhY2UtZDlmODYyZmUzNDQ2XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Deliverance",
    released: 1972,
    rating: 7.6,
    imdb: "tt0068473",
    stars: ["Burt Reynolds", "Jon Voight", "Ned Beatty"],
    director: "John Boorman",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNTI3OTU2NGQtOGI1MC00MmY2LWFjZTktZjExM2Q2ZTJjN2VkXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZTJmZGNjZTEtZDdkZS00ZTJiLThkZGUtMTU4Y2VjODM3YTMwXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOTRkNzg5YzAtYmUzNS00NjFhLTlkMTktOTdhNDEwZGM1ODdhXkEyXkFqcGc@._V1_QL75_UX515_.jpg",
        "https://m.media-amazon.com/images/M/MV5BY2NjY2Y5MGEtMjlmNi00ODgwLWI3YmYtNGZlMmYzZjkwMzQzXkEyXkFqcGc@._V1_QL75_UX808_.jpg"
    ]
},
{
    name: "Eraserhead",
    released: 1977,
    rating: 7.3,
    imdb: "tt0074486",
    stars: ["Jack Nance", "Charlotte Stewart", "Allen Joseph"],
    director: "David Lynch",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTk3ODMxODQyNl5BMl5BanBnXkFtZTgwNTQ5NDg5MDI@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Safety Not Guaranteed",
    released: 6.9,
    rating: 2012,
    imdb: "tt1862079",
    stars: ["Aubrey Plaza", "Mark Duplass", "Jake Johnson"],
    director: "Colin Trevorrow",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTQ5NzA2NjM5OV5BMl5BanBnXkFtZTcwODIwNTMyNw@@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjEyMjg3MDI2OV5BMl5BanBnXkFtZTcwOTIwNTMyNw@@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYjZlYzY1NGItODkyMS00OGJmLWExYjEtODk2ZGVmY2ZhOWU4XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOGRmYTQzZGItM2M1My00ZDBiLWI1ZmUtZDI3N2U2MWI2NDc5XkEyXkFqcGc@._V1_QL75_UX808_.jpg"
    ]
},
{
    name: "Dancer in the Dark",
    released: 2000,
    rating: 7.9,
    imdb: "tt0168629",
    stars: ["Björk", "Catherine Deneuve", "David Morse"],
    director: "Lars von Trier",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYzUxMzE3NDUtNTc4Ny00OGQ1LWIzNjAtY2NmYjE2Zjg3NGZkXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOTc2ZDIzNTItNjhhZC00ODFhLTkwZjItOTVjNjNhNTBlMGYxXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BODA4MTIxNjk4OV5BMl5BanBnXkFtZTcwMzA5MjY0NA@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Nurse Betty",
    released: 2000,
    rating: 6.3,
    imdb: "tt0171580",
    stars: ["Renée Zellweger", "Morgan Freeman", "Chris Rock"],
    director: "Neil LaBute",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjE3MmU2NDktMGJlOC00MzA4LWJmMjktYzhhZjIxOTJjM2M2XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "On Golden Pond",
    released: 1981,
    rating: 7.6,
    imdb: "tt0082846",
    stars: ["Katharine Hepburn", "Henry Fonda", "Jane Fonda"],
    director: "Mark Rydell",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMGZhNDRjOWItMTZjYi00NWQ0LWE4OTYtNTRkNGI3MWQ2MThlXkEyXkFqcGc@._V1_QL75_UX418_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTBlYjI2YWYtYTVkNC00ZjBjLWJiYjktNzBlYWNmNGQ2ZmVjXkEyXkFqcGc@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjA2NzY4MDE4Nl5BMl5BanBnXkFtZTYwMjYyMTM2._V1_QL75_UX403_.jpg"
    ]
},
{
    name: "Bonnie and Clyde",
    released: 1967,
    rating: 7.7,
    imdb: "tt0061418",
    stars: ["Warren Beatty", "Faye Dunaway", "Michael J. Pollard"],
    director: "Arthur Penn",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZTI2NzhmZDktZWQyZC00OTM2LWI4NjItODk0ZmJhMWIyMGMxXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Planet of the Apes",
    released: 1968,
    rating: 8.0,
    imdb: "tt0063442",
    stars: ["Charlton Heston", "Roddy McDowall", "Kim Hunter"],
    director: "Franklin J. Schaffner",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BOTAwMjU5OTYtMTRiMy00MWJjLWEwYWMtNzk2ZDdmZDcwNWFkXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Matrix",
    released: 1999,
    rating: 8.7,
    imdb: "tt0133093",
    stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "Lana Wachowski, Lilly Wachowski",
    popcorn: "https://www.youtube.com/watch?v=ssYO5u5ebHs",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTFmNDkyZjItMWQ3ZC00YjYzLWJhMzItZTFjNWI1MWIzNDQzXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNmQzMTU0NjktMjE2NS00YTJiLWI1ZDItZTNhZWVkYTI4MTIzXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU5NTA0OTIxNF5BMl5BanBnXkFtZTcwNjI4MTc4Mw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "American Beauty",
    released: 1999,
    rating: 8.3,
    imdb: "tt0169547",
    stars: ["Kevin Spacey", "Annette Bening", "Thora Birch"],
    director: "Sam Mendes",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTM1NjYyMzExMV5BMl5BanBnXkFtZTcwODEyODY3Mw@@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTYzNjIwNzI0OV5BMl5BanBnXkFtZTcwNjIyODY3Mw@@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTc1Mzk4NzIxNl5BMl5BanBnXkFtZTcwMzIyODY3Mw@@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MzEwODQzOF5BMl5BanBnXkFtZTcwMTIyODY3Mw@@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "The Paper Chase",
    released: 1973,
    rating: 7.2,
    imdb: "tt0070509",
    stars: ["Timothy Bottoms", "Lindsay Wagner", "John Houseman"],
    director: "James Bridges",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMmY2MGQ3YjQtZTAyOS00ODc3LTg0MDMtOWE0MzI2OTdmMzMxXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Risky Business",
    released: 1983,
    rating: 6.8,
    imdb: "tt0086200",
    stars: ["Tom Cruise", "Rebecca De Mornay", "Joe Pantoliano"],
    director: "Paul Brickman",
    popcorn: "https://www.youtube.com/watch?v=o2UXwsKeYks",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMzI0ZWJjMDUtMWViZi00NmNhLTllNTMtZDg0OWE3YTM3ZmJiXkEyXkFqcGc@._V1_QL75_UX423_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNmU3NzdlNmYtNjdlNy00MDI1LWE4NWUtODgwYzgyMjA4YzZlXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjExMDQyODkxMF5BMl5BanBnXkFtZTcwMTczNjMwNA@@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTEwOTQ5MDQzNDJeQTJeQWpwZ15BbWU3MDQ1NDU1Mjc@._V1_QL75_UX411_.jpg"
    ]
},
{
    name: "Rain Man",
    released: 1988,
    rating: 8.0,
    imdb: "tt0095953",
    stars: ["Dustin Hoffman", "Tom Cruise", "Valeria Golino"],
    director: "Barry Levinson",
    popcorn: "https://www.youtube.com/watch?v=KRRk4QhwxAw",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTM1MDYyNjYzMV5BMl5BanBnXkFtZTcwOTYwMTU2NA@@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU0MjcyODA5NV5BMl5BanBnXkFtZTcwNzYwMTU2NA@@._V1_QL75_UX328_.jpg"
    ]
},
{
    name: "The Silence of the Lambs",
    released: 1991,
    rating: 8.6,
    imdb: "tt0102926",
    stars: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    director: "Jonathan Demme",
    popcorn: "https://www.youtube.com/watch?v=R0Ef_nbm2ww",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BOGZmZjQ2NGEtZTRlMS00OTc2LTg5YzEtZWFiOGNmYjIxZTEyXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZjUwNTBmNWEtYTRhOC00MDljLTk1MzQtZTI5NzQxMzQ0ODNkXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMDg0MTM0YmUtZDExMS00MjM4LWI1OWUtY2Q4MzdkNDJlMTBhXkEyXkFqcGc@._V1_QL75_UX344_.jpg"
    ]
},
{
    name: "Alien",
    released: 1979,
    rating: 8.5,
    imdb: "tt0078748",
    stars: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
    director: "Ridley Scott",
    popcorn: "https://www.youtube.com/watch?v=G_BF54AlhwA",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BOTk3ODg1Nzg3NV5BMl5BanBnXkFtZTgwNDU0ODQ3NTM@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Terminator",
    released: 1984,
    rating: 8.1,
    imdb: "tt0088247",
    stars: ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn"],
    director: "James Cameron",
    popcorn: "https://www.youtube.com/watch?v=IXQdDwpwj2w",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjAyMTk3ODA2MF5BMl5BanBnXkFtZTcwMTkzNDQyNA@@._V1_QL75_UX187_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTgwNDM0MDg0NF5BMl5BanBnXkFtZTcwNTkzNDQyNA@@._V1_QL75_UX149_.jpg"
    ]
},
{
    name: "Léon: The Professional",
    released: 1994,
    rating: 8.5,
    imdb: "tt0110413",
    stars: ["Jean Reno", "Gary Oldman", "Natalie Portman"],
    director: "Luc Besson",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BY2Y5YTlmOTQtYmY0OC00MTk3LThjMDEtMGMwNGMyYTg3OWFmXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNjYxYzI0MjctNjIzZS00Mzc0LThhMTQtOGFiNTM2MjNhMmUzXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTM1MDcxNDI0NV5BMl5BanBnXkFtZTcwNjI2NDkxNA@@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOGMzOGU3ZjEtMWI4YS00ZGIyLTg5OTAtYTMzOWQ4MGVlOTliXkEyXkFqcGc@._V1_QL75_UX808_.jpg"
    ]
},
{
    name: "The Sixth Sense",
    released: 1999,
    rating: 8.2,
    imdb: "tt0167404",
    stars: ["Bruce Willis", "Haley Joel Osment", "Toni Collette"],
    director: "M. Night Shyamalan",
    popcorn: "https://www.youtube.com/watch?v=h6dJJtGDg18",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTk0MzcwNjMxN15BMl5BanBnXkFtZTcwMjYyODY3Mw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Big",
    released: 1988,
    rating: 7.3,
    imdb: "tt0094737",
    stars: ["Tom Hanks", "Elizabeth Perkins", "Robert Loggia"],
    director: "Penny Marshall",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZWZiYTllYjItOWE4NC00YjE4LWFjY2YtN2E4Y2NkYzc5NTM2XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Network",
    released: 1976,
    rating: 8.1,
    imdb: "tt0074958",
    stars: ["Faye Dunaway", "William Holden", "Peter Finch"],
    director: "Sidney Lumet",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTMwOTY3MDQ4OV5BMl5BanBnXkFtZTcwODA5NjMyNA@@._V1_QL75_UX333_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYWZiNDUzNjktOGQ1YS00MzU0LTgxODItMjBkNjRhYzlmMDJhXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Sound of Music",
    released: 1965,
    rating: 8.1,
    imdb: "tt0059742",
    stars: ["Julie Andrews", "Christopher Plummer", "Eleanor Parker"],
    director: "Robert Wise",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjEyNDc2MDMyNV5BMl5BanBnXkFtZTcwNDU0MTUzNA@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Groundhog Day",
    released: 1993,
    rating: 8.0,
    imdb: "tt0107048",
    stars: ["Bill Murray", "Andie MacDowell", "Chris Elliott"],
    director: "Harold Ramis",
    popcorn: "https://www.youtube.com/watch?v=VocohRhYTks",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZDMwYjkyMmMtNGUzZC00OTYxLWI1OTUtNDE0OGIyZGRmM2MzXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Titanic",
    released: 1997,
    rating: 7.9,
    imdb: "tt0120338",
    stars: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    director: "James Cameron",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTkxODQ2NTUwMF5BMl5BanBnXkFtZTcwODI3NTk1Nw@@._V1_QL75_UX388_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTUyNDMyOTU2NF5BMl5BanBnXkFtZTcwOTI3NTk1Nw@@._V1_QL75_UX416_.jpg"
    ]
},
{
    name: "Forrest Gump",
    released: 1994,
    rating: 8.8,
    imdb: "tt0109830",
    stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    director: "Robert Zemeckis",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYTE3MGUyYTktNDhlNy00Mjc1LWI5NmEtMDVhMzU3Nzc5MWM1XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTViYzM2MTAtNTJjNS00YWVlLTkzODktZTA5NDdjYmZkNTEzXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMWE0Y2ZmYjAtYTk2YS00OTMwLWE1OTQtZmY3NmI1MTkxYWUzXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOGIwMGI3ZmYtODEzYi00ZmQ1LWFkZDUtYzRkYWRhNTEwMDBhXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Back to the Future",
    released: 1985,
    rating: 8.5,
    imdb: "tt0088763",
    stars: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    director: "Robert Zemeckis",
    popcorn: "https://www.youtube.com/watch?v=kb0Ike9nOD4",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNjE4Mzk3NjM4MF5BMl5BanBnXkFtZTcwOTUxNDc0NA@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Joe Versus the Volcano",
    released: 1990,
    rating: 5.9,
    imdb: "tt0099892",
    stars: ["Tom Hanks", "Meg Ryan", "Lloyd Bridges"],
    director: "John Patrick Shanley",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYzI2YjFhMjktMDRhMC00ZDEwLWFhZDQtNzMxM2I2MjFmNWY2XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Ghost",
    released: 1990,
    rating: 7.1,
    imdb: "tt0099653",
    stars: ["Patrick Swayze", "Demi Moore", "Whoopi Goldberg"],
    director: "Jerry Zucker",
    popcorn: "https://www.youtube.com/watch?v=mMiGSk_9AZc",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYTE1Yjg4OTctZTBiZS00NzEyLTkwYzYtYzNjMjRjM2QzZjg0XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Ghost World",
    released: 2001,
    rating: 7.3,
    imdb: "tt0162346",
    stars: ["Scarlett Johansson", "Thora Birch", "Steve Buscemi"],
    director: "Terry Zwigoff",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZjkxMjcxM2YtOTBiNC00OGM3LWE1NTAtNWRmZTk1YzI1OTI5XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Lost in Translation",
    released: 2003,
    rating: 7.7,
    imdb: "tt0335266",
    stars: ["Bill Murray", "Scarlett Johansson", "Giovanni Ribisi"],
    director: "Sofia Coppola",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjA1MzMyODM0Nl5BMl5BanBnXkFtZTgwOTY0NjkxMDI@._V1_QL75_UX398_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTcwODU5MDYzOV5BMl5BanBnXkFtZTgwNjc0NjkxMDI@._V1_QL75_UX400_.jpg"
    ]
},
{
    name: "Young Frankenstein",
    released: 1974,
    rating: 8.0,
    imdb: "tt0072431",
    stars: ["Gene Wilder", "Madeline Kahn", "Marty Feldman", "Teri Garr", "Peter Boyle"],
    director: "Mel Brooks",
    popcorn: "https://www.youtube.com/watch?v=1pboSBPcoKw",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTgwMDAwMDkyMF5BMl5BanBnXkFtZTcwMTE5NTQ4Mw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "When Harry Met Sally",
    released: 1989,
    rating: 7.7,
    imdb: "tt0098635",
    stars: ["Billy Crystal", "Meg Ryan", "Carrie Fisher"],
    director: "Rob Reiner",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYzljNzE2YTktY2RlZC00YTZmLWE3NTYtZTRjODgyYThlMTU5XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Election",
    released: 1999,
    rating: 7.2,
    imdb: "tt0126886",
    stars: ["Matthew Broderick", "Reese Witherspoon", "Loren Nelson"],
    director: "Alexander Payne",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNDU0ODJmMGYtNjg0OS00MDYzLTg5MTYtYzgyMzc1OWRhNDc3XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDVmYThhMmUtZWU2MC00MzEzLWJlM2UtN2Q4YTk4OTQ5ZjhkXkEyXkFqcGc@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "Annie Hall",
    released: 1977,
    rating: 7.9,
    imdb: "tt0075686",
    stars: ["Woody Allen", "Diane Keaton", "Tony Roberts"],
    director: "Woody Allen",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjI4NTg0NTA3Nl5BMl5BanBnXkFtZTgwMzk1NzYwMjI@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Blue Brothers",
    released: 1980,
    rating: 7.9,
    imdb: "tt0080455",
    stars: ["John Belushi", "Dan Aykroyd", "Cab Calloway"],
    director: "John Landis",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODE1MTZmNWMtNzM5OC00ZWE0LWFlNTAtOWM2N2U1MzZjMDg5XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Ferris Bueller's Day Off",
    released: 1986,
    rating: 7.8,
    imdb: "tt0091042",
    stars: ["Matthew Broderick", "Alan Ruck", "Mia Sara"],
    director: "John Hughes",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjI4ODU1ODczMl5BMl5BanBnXkFtZTcwODUzOTI2OQ@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Jaws",
    released: 1975,
    rating: 8.1,
    imdb: "tt0073195",
    stars: ["Roy Scheider", "Robert Shaw", "Richard Dreyfuss"],
    director: "Steven Spielberg",
    popcorn: "https://www.youtube.com/watch?v=oKZk6YycYks",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYzMyNTFjYzktN2NhZS00YWI2LWE0MDktZWM2YTg3MzgxZTk5XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjIyMjkzMDE4OF5BMl5BanBnXkFtZTcwNzI2ODU2Nw@@._V1_QL75_UX599_.jpg"
    ]
},
{
    name: "E.T. the Extra-Terrestrial",
    released: 1982,
    rating: 7.9,
    imdb: "tt0083866",
    stars: ["Henry Thomas", "Drew Barrymore", "Peter Coyote"],
    director: "Steven Spielberg",
    popcorn: "https://www.youtube.com/watch?v=bucwLqtmrj0",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMDRiNzViMjQtMTJhZS00OWVhLWFlMzgtNjZjZWY0MWMwOTYxXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Arthur",
    released: 1981,
    rating: 6.9,
    imdb: "tt0082031",
    stars: ["Dudley Moore", "Liza Minnelli", "John Gielgud"],
    director: "Steve Gordon",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTkyMjc3NDE5MF5BMl5BanBnXkFtZTgwMDE4NTU5MTE@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Logan's Run",
    released: 1976,
    rating: 6.8,
    imdb: "tt0074812",
    stars: ["Michael York", "Jenny Agutter", "Richard Jordan"],
    director: "Michael Anderson",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYWQ1ZThlNDEtOTIyMi00ZTk5LTkwZTEtYTQ4YmUxYzAzNDk1XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNjEwZDk5NDQtYzRmZC00ZmIxLWExOTgtNjczMGYxMWQ3ZDI5XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZTU4Zjk4MmEtNzE2Ny00ZDA2LWExODQtNGJmMjQxNmJlODllXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZTYzNDdmZTAtNzk5ZS00OGFiLWIwODctNzM1OGM3Y2RkMzJkXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The King of Comedy",
    released: 1982,
    rating: 7.8,
    imdb: "tt0085794",
    stars: ["Robert De Niro", "Jerry Lewis", "Diahnne Abbott", "Sandra Bernhard"],
    director: "Martin Scorsese",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY2NDA3NV5BMl5BanBnXkFtZTcwMDU3NDgyMw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Goodfellas",
    released: 1990,
    rating: 8.7,
    imdb: "tt0099685",
    stars: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    director: "Martin Scorsese",
    popcorn: "https://www.youtube.com/watch?v=6RYOPKJ2Ig8",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjI0ODA3NDQ4NV5BMl5BanBnXkFtZTcwMDMwMjMwNA@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Kick-Ass",
    released: 2010,
    rating: 7.6,
    imdb: "tt1250777",
    stars: ["Nicolas Cage", "Chloë Grace Moretz", "Aaron Taylor-Johnson"],
    director: "Matthew Vaughn",
    popcorn: "https://www.youtube.com/watch?v=4DPL2Czsy9s",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTQ4OTkxMjE4Ml5BMl5BanBnXkFtZTcwNzIyMTUxMw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Brazil",
    released: 1985,
    rating: 7.8,
    imdb: "tt0088846",
    stars: ["Jonathan Pryce", "Kim Greist", "Robert De Niro"],
    director: "Terry Gilliam",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZGRkYjhkNzUtODlkNS00MmM2LTg2YTMtNDVlZTQ2ODQ4MWQyXkEyXkFqcGc@._V1_QL75_UX403_.jpg"
    ]
},
{
    name: "Mrs. Doubtfire",
    released: 1993,
    rating: 7.1,
    imdb: "tt0107614",
    stars: ["Robin Williams", "Sally Field", "Pierce Brosnan"],
    director: "Chris Columbus",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMGRkMzI5MDgtNjk0Yy00YTU5LWE0ZDMtY2Q4OThmZDUxYTMzXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Tootsie",
    released: 1982,
    rating: 7.4,
    imdb: "tt0084805",
    stars: ["Dustin Hoffman", "Jessica Lange", "Teri Garr"],
    director: "Sydney Pollack",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODJlOTgzNDAtNmRkNS00Y2M0LWJiNDEtZGI1NTY2ZDZhMWY3XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Pleasantville",
    released: 1998,
    rating: 7.5,
    imdb: "tt0120789",
    stars: ["Tobey Maguire", "Jeff Daniels", "Joan Allen", "Reese Witherspoon", "William H. Macy"],
    director: "Gary Ross",
    popcorn: "https://www.youtube.com/watch?v=hAe6fPbxqCM",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNWQ4OTM0ZWYtNDEzNi00N2M4LWE4ZTctNmM2NzU4YzgxYmZiXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Secretary",
    released: 2002,
    rating: 6.9,
    imdb: "tt0274812",
    stars: ["James Spader", "Maggie Gyllenhaal", "Jeremy Davies"],
    director: "Steven Shainberg",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNmNmMzFhYmUtNTRmNy00MDJlLThkYjctYTE1ODYzNzE5YjM4XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Gods Must Be Crazy",
    released: 1980,
    rating: 7.3,
    imdb: "tt0080801",
    stars: ["N!xau", "Marius Weyers", "Sandra Prinsloo"],
    director: "Jamie Uys",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYzg2MWMyMzUtOTY2OC00ZTM1LTliOWEtN2ZkZjE0NzdhODQ0XkEyXkFqcGc@._V1_QL75_UX373_.jpg"
    ]
},
{
    name: "Ghostbusters",
    released: 1984,
    rating: 7.8,
    imdb: "tt0087332",
    stars: ["Bill Murray", "Dan Aykroyd", "Sigourney Weaver", "Harold Ramis", "Rick Moranis"],
    director: "Ivan Reitman",
    popcorn: "https://www.youtube.com/watch?v=AW-7NC4aack",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTUwMjI4MDA3MV5BMl5BanBnXkFtZTgwODAyODIwMjE@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "National Lampoon's Animal House",
    released: 1978,
    rating: 7.4,
    imdb: "tt0077975",
    stars: ["John Belushi", "Karen Allen", "Tom Hulce"],
    director: "John Landis",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNzQ2MWE4ZjQtZGM2ZS00MWI5LWI1NjUtMWI3N2Q2ODcxOGJmXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDAzZTA3NzUtM2I3MS00MGU5LWFjMzgtM2Q0YmZlNDk0NGEyXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTBhNGE5Y2MtNzRmMS00YTM5LWE1OTktOGY1MzY4ODNjMDE0XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZmJlNWQ2YzItOGUyOC00MmMzLThmOTUtNjU1YjRmYmNiNmVkXkEyXkFqcGc@._V1_QL75_UX401_.jpg"
    ]
},
{
    name: "Bruce Almighty",
    released: 2003,
    rating: 6.8,
    imdb: "tt0315327",
    stars: ["Jim Carrey", "Jennifer Aniston", "Morgan Freeman"],
    director: "Tom Shadyac",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTk0ODQyNDc3M15BMl5BanBnXkFtZTcwNTA2MTEzMw@@._V1_QL75_UX351_.jpg",
        "https://m.media-amazon.com/images/M/MV5BN2ZmZGI0ZDMtNjcyNy00MzU1LTg3NDYtODE5Y2RhNmNjOWY4XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Heaven Can Wait",
    released: 1978,
    rating: 6.9,
    imdb: "tt0077663",
    stars: ["Warren Beatty", "James Mason", "Julie Christie"],
    director: "Warren Beatty, Buck Henry",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMzliOTUyNTEtMzAxYi00MTUzLWE5MmYtZTMwYTdhNjA2YTAxXkEyXkFqcGc@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTNiYzlkNDktNzIyYS00ZDI2LWJiNDUtZjg5OTkwZTg2MGJhXkEyXkFqcGc@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "The Breakfast Club",
    released: 1985,
    rating: 7.8,
    imdb: "tt0088847",
    stars: ["Judd Nelson", "Emilio Estevez", "Ally Sheedy", "Molly Ringwald", "Anthony Michael Hall"],
    director: "John Hughes",
    popcorn: "https://www.youtube.com/watch?v=xi0ymeh5-VU",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTQ0MDQ3OTYwNV5BMl5BanBnXkFtZTcwNDYxNTI5Mw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Office Space",
    released: 1999,
    rating: 7.6,
    imdb: "tt0151804",
    stars: ["Ron Livingston", "Jennifer Aniston", "David Herman"],
    director: "Mike Judge",
    popcorn: "https://www.youtube.com/watch?v=KekblCv-qpA",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODBkMTZhOWMtMzllMi00NjhkLWE3MWItMmRjODI0NmIyYmM2XkEyXkFqcGc@._V1_QL75_UX396_.jpg",
        "https://m.media-amazon.com/images/M/MV5BY2FmMjRlZWQtMzVkYy00MjQ0LWFkMWItNWQ1NGQyZDEwYzk0XkEyXkFqcGc@._V1_QL75_UX399_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTQ1MDI1NjE0OV5BMl5BanBnXkFtZTgwNzQ1MTA5MTE@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMWZkZTAwNzYtMzgzMy00MTkzLTlmZGItMTI5MTkxNmI2ODA2XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Westworld",
    released: 1973,
    rating: 6.9,
    imdb: "tt0070909",
    stars: ["Yul Brynner", "Richard Benjamin", "James Brolin"],
    director: "Michael Crichton",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODYwMjNhM2UtOGI4NS00NGZhLTk5ODEtNDMzN2E1NGUyMDUzXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMWJhODI0NGYtNjhiNy00YTVkLTkzZTItYmNhOWVhMTFiMjU5XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNjk4N2IzNDktNjRjNy00YzVkLWJjMjItODJiZmMzODg2MjQwXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Duel",
    released: 1971,
    rating: 7.6,
    imdb: "tt0067023",
    stars: ["Dennis Weaver", "Jacqueline Scott", "Eddie Firestone"],
    director: "Steven Spielberg",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYTJmNzk0ODAtZDVhMi00ZDczLTgxZmYtZGY3YTk0ZWJiODNlXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Witness",
    released: 1985,
    rating: 7.4,
    imdb: "tt0090329",
    stars: ["Harrison Ford", "Kelly McGillis", "Lukas Haas"],
    director: "Peter Weir",
    popcorn: "https://www.youtube.com/watch?v=_cAzV5fwc1M",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BOGUyYmZhNWItN2VlMS00MWZlLWI0YmItZmNkNDIzZTQ4ZDc2XkEyXkFqcGc@._V1_QL75_UX435_.jpg"
    ]
},
{
    name: "The Fugitive",
    released: 1993,
    rating: 7.8,
    imdb: "tt0106977",
    stars: ["Harrison Ford", "Tommy Lee Jones", "Sela Ward"],
    director: "Andrew Davis",
    popcorn: "https://www.youtube.com/watch?v=g9BBAayxipg",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNjQwOTBhN2ItYWU2Ni00MTMzLWFiN2ItZjZmYTQ5OWIwYjRiXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Taking of Pelham One Two Three",
    released: 1974,
    rating: 7.6,
    imdb: "tt0072251",
    stars: ["Walter Matthau", "Robert Shaw", "Martin Balsam"],
    director: "Joseph Sargent",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTMxODU4OTkwNV5BMl5BanBnXkFtZTcwMzAzMTM3NA@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Aladdin",
    released: 1992,
    rating: 8.0,
    imdb: "tt0103639",
    stars: ["Scott Weinger", "Robin Williams", "Linda Larkin"],
    director: "Ron Clements, John Musker",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNTQ3NTY2MjAyOV5BMl5BanBnXkFtZTcwODE0ODAyNw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Toy Story",
    released: 1995,
    rating: 8.3,
    imdb: "tt0114709",
    stars: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    director: "John Lasseter",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTk5MzkzOTI4NF5BMl5BanBnXkFtZTcwNTk5Mjg2MQ@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Planes, Trains & Automobiles",
    released: 1987,
    rating: 7.6,
    imdb: "tt0093748",
    stars: ["Steve Martin", "John Candy", "Laila Robins"],
    director: "John Hughes",
    popcorn: "https://www.youtube.com/watch?v=dbjToeDOc24",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYTM2ODYxNGQtMmQ0ZC00MWRjLTk5ZjktMWEwZjA5MWU4Yzg1XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "My Cousin Vinny",
    released: 1992,
    rating: 7.6,
    imdb: "tt0104952",
    stars: ["Joe Pesci", "Marisa Tomei", "Ralph Macchio"],
    director: "Jonathan Lynn",
    popcorn: "https://www.youtube.com/watch?v=-IJaM27zZkM",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODJjZWUwYWUtM2Q0ZS00OWVhLTk2NDctMmEzZTRhNjk5MThjXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMDNhYjVmZTEtZTQ4ZC00OTM0LTg1NTEtZjMyNmFkYmUzMjZiXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Crazy, Stupid, Love",
    released: 2011,
    rating: 7.4,
    imdb: "tt1570728",
    stars: ["Steve Carell", "Ryan Gosling", "Julianne Moore"],
    director: "Glenn Ficarra, John Requa",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTkxNTQxMDg1MF5BMl5BanBnXkFtZTcwMzQ2MjU5NQ@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "La La Land",
    released: 2016,
    rating: 8.0,
    imdb: "tt3783958",
    stars: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"],
    director: "Damien Chazelle",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZTM0MjIxOTItMDgxMy00MjAwLWE1NDQtYzZhNjUxMjJhYjlmXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Poor Things",
    released: 2023,
    rating: 7.8,
    imdb: "tt14230458",
    stars: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe"],
    director: "Yorgos Lanthimos",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMmYyYTFkNDEtZjg2YS00YTUyLWE2NmYtZGIzZjhmNTRiYzk3XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDBjYjMzZTUtYWU3Ny00YWRjLWE0ODQtM2Q3MjE1N2M5NzJmXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Pretty Woman",
    released: 1990,
    rating: 7.1,
    imdb: "tt0100405",
    stars: ["Richard Gere", "Julia Roberts", "Jason Alexander"],
    director: "Garry Marshall",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZGRmMDk2YWYtOGNlNS00MjM5LThkYjEtZjU5YTUwMThlYTQ3XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Fifth Element",
    released: 1997,
    rating: 7.6,
    imdb: "tt0119116",
    stars: ["Bruce Willis", "Milla Jovovich", "Chris Tucker", "Gary Oldman"],
    director: "Luc Besson",
    popcorn: "https://www.youtube.com/watch?v=ySdvixqjwaw",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODM2OGQ2YjUtNjE5NS00Y2Q4LTkwOWUtYzE2MDlmMGUyOTgwXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BM2FjZjExNWUtYjgxZC00MzEzLWJiNWYtMjU1ODU0OTY1NjMyXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZWY3MDZhODAtZjYyMi00MzNjLWE3ZGItZTNjZGZhMzA2N2MyXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzljY2I5YWMtMzczZC00MDEwLTkxMWYtN2Q2ZDY2NGU3Yjg3XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "A Christmas Story",
    released: 1983,
    rating: 7.9,
    imdb: "tt0085334",
    stars: ["Peter Billingsley", "Melinda Dillon", "Darren McGavin"],
    director: "Bob Clark",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BOTU0NDg1NjgyNl5BMl5BanBnXkFtZTcwNjQ5NDAyMg@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Graduate",
    released: 1967,
    rating: 8.0,
    imdb: "tt0061722",
    stars: ["Dustin Hoffman", "Anne Bancroft", "Katharine Ross"],
    director: "Mike Nichols",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYWY4MTJjNDYtMWVjMi00NmIyLTk1MjUtOWQ2MDMxMmMxNDVlXkEyXkFqcGc@._V1_QL75_UX808_.jpg"
    ]
},
{
    name: "My Fair Lady",
    released: 1964,
    rating: 7.7,
    imdb: "tt0058385",
    stars: ["Audrey Hepburn", "Rex Harrison", "Stanley Holloway"],
    director: "George Cukor",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTkxNDYzNzY0OV5BMl5BanBnXkFtZTgwODUzOTk5MTE@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Sixteen Candles",
    released: 1984,
    rating: 7.0,
    imdb: "tt0088128",
    stars: ["Molly Ringwald", "Anthony Michael Hall", "Justin Henry"],
    director: "John Hughes",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZGFiNTA4M2EtODIyNS00YTdjLThlODEtMTk2NDdmMTc4NGE3XkEyXkFqcGc@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "Home Alone",
    released: 1990,
    rating: 7.7,
    imdb: "tt0099785",
    stars: ["Macaulay Culkin", "Joe Pesci", "Daniel Stern"],
    director: "Chris Columbus",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYzQyZGMxYTUtMTkyYS00MzUxLWE1ODgtMzU0YTliZGQxMDFhXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Green Mile",
    released: 1999,
    rating: 8.6,
    imdb: "tt0120689",
    stars: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    director: "Frank Darabont",
    popcorn: "https://www.youtube.com/watch?v=ks_KBhZ4swQ",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BM2IyOWE3MDAtYzYyMi00MTAxLWI1MjgtZTQ0ZDk4MGQ2OWEwXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Rocky",
    released: 1976,
    rating: 8.1,
    imdb: "tt0075148",
    stars: ["Sylvester Stallone", "Talia Shire", "Burt Young"],
    director: "John G. Avildsen",
    popcorn: "https://www.youtube.com/watch?v=-9TPgxtMVAA",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMzlkNmEzMGQtM2JhOC00ZGQ4LWJiZmItMDM2MDZjZTkwNzk2XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Little Miss Sunshine",
    released: 2006,
    rating: 7.8,
    imdb: "tt0449059",
    stars: ["Steve Carell", "Toni Collette", "Greg Kinnear"],
    director: "Jonathan Dayton, Valerie Faris",
    popcorn: "https://www.youtube.com/watch?v=baNSo574jSI",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTMxMDA3MDU5NF5BMl5BanBnXkFtZTcwMjc0NjE5NA@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "CODA",
    released: 2021,
    rating: 8.0,
    imdb: "tt10366460",
    stars: ["Emilia Jones", "Marlee Matlin", "Troy Kotsur"],
    director: "Sian Heder",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYTEwNWY4MmItMjRhNy00NzZkLTk4OWEtZDUyOWJiZTY5ZjhiXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Blast from the Past",
    released: 1999,
    rating: 6.7,
    imdb: "tt0124298",
    stars: ["Brendan Fraser", "Alicia Silverstone", "Christopher Walken", "Sissy Spacek"],
    director: "Hugh Wilson",
    popcorn: "https://www.youtube.com/watch?v=RcBLIkHvwIA",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZmJlZmRmNDUtYWM3NC00YjFhLWIyZmYtZmYyZTgwOGFiYzQ3XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "RoboCop",
    released: 1987,
    rating: 7.6,
    imdb: "tt0093870",
    stars: ["Peter Weller", "Nancy Allen", "Dan O'Herlihy"],
    director: "Paul Verhoeven",
    popcorn: "https://www.youtube.com/watch?v=2GqMfcmPERw",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTc1MDQ4MTkyMV5BMl5BanBnXkFtZTcwMTQwODU2NA@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Poltergeist",
    released: 1982,
    rating: 7.3,
    imdb: "tt0084516",
    stars: ["JoBeth Williams", "Heather O'Rourke", "Craig T. Nelson"],
    director: "Tobe Hooper",
    popcorn: "https://www.youtube.com/watch?v=d0TRpBIwwZ4",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNGY4NGNhZWQtNjEwMS00ZTllLTgzNjMtODVmZmY5ZTgwNjcyXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZTQ0YjkwMTktMzAyNi00NzFiLTgzMTItNjU2YTgyYzMzZDE0XkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYzI3ZTdjNDgtMDM4OS00YjU5LWFhNjctMzIxNDhhZTcxODJkXkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZTdjYWM4MGYtYzEwZi00NDk5LThhMzItYjgxODI4YTdiMmI3XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Stand by Me",
    released: 1986,
    rating: 8.1,
    imdb: "tt0092005",
    stars: ["Wil Wheaton", "River Phoenix", "Corey Feldman"],
    director: "Rob Reiner",
    popcorn: "https://www.youtube.com/watch?v=8laSmUQLv54",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjIzNDc4NzUxN15BMl5BanBnXkFtZTgwOTA2ODIwMjE@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Fantasia",
    released: 1940,
    rating: 7.7,
    imdb: "tt0032455",
    stars: ["Leopold Stokowski", "Deems Taylor", "The Philadelphia Orchestra"],
    director: "James Algar, Samuel Armstrong, Ford Beebe Jr.",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTk1Nzk2MDk0M15BMl5BanBnXkFtZTcwOTUyOTAyNw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Fatal Attraction",
    released: 1987,
    rating: 6.9,
    imdb: "tt0093010",
    stars: ["Michael Douglas", "Glenn Close", "Anne Archer"],
    director: "Adrian Lyne",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNTAzMjMyNWQtMDcxYi00NDE3LTliNjYtY2JhMWViYjQ2N2JlXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Thing",
    released: 1982,
    rating: 8.2,
    imdb: "tt0084787",
    stars: ["Kurt Russell", "Wilford Brimley", "Keith David"],
    director: "John Carpenter",
    popcorn: "https://www.youtube.com/watch?v=48JvWljE0ng",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjI4MGY3MmUtZjBiOC00YWM2LWI0NjgtYzFiZTBkNmQ2NTk1XkEyXkFqcGc@._V1_QL75_UX808_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMDkyZWViNzEtNzlmMS00ZjdmLWE4YzAtYjk3M2ZhNTc0YzgyXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "The Brother from Another Planet",
    released: 1984,
    rating: 6.7,
    imdb: "tt0087004",
    stars: ["Joe Morton", "Daryl Edwards", "Rosanna Carter"],
    director: "Craig Laurence Rice, John Sayles",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZWNkODY3NjgtZmRjNS00YjhhLTlkZDktNjJlOTRmYmFmYjdmXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Edward Scissorhands",
    released: 1990,
    rating: 7.9,
    imdb: "tt0099487",
    stars: ["Johnny Depp", "Winona Ryder", "Dianne Wiest"],
    director: "Tim Burton",
    popcorn: "https://www.youtube.com/watch?v=U2POBnzoZsU",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZTEzYjJiMjgtYjc1YS00YzBiLThiZDEtMjlkZTZlNTMzOWM0XkEyXkFqcGc@._V1_QL75_UX403_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjE0ZmNhNmEtMGYwNi00OWM2LWEyNjEtYTk1NWU2OTcyOGViXkEyXkFqcGc@._V1_QL75_UX403_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZDExNjAzODMtMGFhNC00MzA0LTg3YjMtNzY1ZmMzZmJmY2U0XkEyXkFqcGc@._V1_QL75_UX403_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjk0MzhkNmItM2Q5OC00YWFmLTgxNGUtM2RhZGRlZTgwYzMwXkEyXkFqcGc@._V1_QL75_UX400_.jpg"
    ]
},
{
    name: "The Nightmare Before Christmas",
    released: 1993,
    rating: 7.9,
    imdb: "tt0107688",
    stars: ["Danny Elfman", "Chris Sarandon", "Catherine O'Hara"],
    director: "Henry Selick",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMGJlZWU4MTAtMTMyYy00NjA2LTkwZjgtNmFiMmYxOTQ2YTZjXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Being John Malkovich",
    released: 1999,
    rating: 7.7,
    imdb: "tt0120601",
    stars: ["John Cusack", "Cameron Diaz", "Catherine Keener"],
    director: "Spike Jonze",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZmY0Yzk5YjctNGIwMC00OGMyLThkYWQtZjVhMjY2YjVhY2I1XkEyXkFqcGc@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "Cast Away",
    released: 2000,
    rating: 7.8,
    imdb: "tt0162222",
    stars: ["Tom Hanks", "Helen Hunt", "Paul Sanchez"],
    director: "Robert Zemeckis",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNDVkNjljODItZWJjYi00NTM2LWEyM2YtNGExOTc2NWJmYWU2XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Boyhood",
    released: 2014,
    rating: 7.9,
    imdb: "tt1065073",
    stars: ["Ellar Coltrane", "Patricia Arquette", "Ethan Hawke"],
    director: "Richard Linklater",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjIyNTI0MzI2OV5BMl5BanBnXkFtZTgwMzIxNjc5MDE@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Touching the Void",
    released: 2003,
    rating: 8.0,
    imdb: "tt0379557",
    stars: ["Simon Yates", "Joe Simpson", "Brendan Mackey"],
    director: "Kevin Macdonald",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMDQ4NGJkZjgtYTcxYi00NmY0LTkyNGUtNDE2MWY3Njk1YTJmXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Everything Everywhere All at Once",
    released: 2022,
    rating: 7.8,
    imdb: "tt6710474",
    stars: ["Michelle Yeoh", "Stephanie Hsu", "Jamie Lee Curtis"],
    director: "Daniel Kwan, Daniel Scheinert",
    popcorn: "https://www.youtube.com/watch?v=njU7VVO4co4",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZTk2MmIyNTgtNGJjNC00Zjk5LThiZDItYWI1YWI4MTU3ZDZhXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Don't Look Up",
    released: 2021,
    rating: 7.2,
    imdb: "tt11286314",
    stars: ["Leonardo DiCaprio", "Jennifer Lawrence", "Meryl Streep"],
    director: "Adam McKay",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BN2YzMmFiZjUtYTU5Ny00Y2FlLWExODQtMDExNjQ2MjE1OWU4XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Lady Bird",
    released: 2017,
    rating: 7.4,
    imdb: "tt4925292",
    stars: ["Saoirse Ronan", "Laurie Metcalf", "Tracy Letts"],
    director: "Greta Gerwig",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNGQyNTRkMzctZGIxZi00OTM4LTg0MDEtODY4NWE2YmE4NDliXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Tora! Tora! Tora!",
    released: 1970,
    rating: 7.5,
    imdb: "tt0066473",
    stars: ["Martin Balsam", "Sô Yamamura", "Jason Robards"],
    director: "Richard Fleischer, Kinji Fukasaku, Toshio Masuda",
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTcwNzM2NTg0N15BMl5BanBnXkFtZTgwNjM4MzU3MTE@._V1_QL75_UX820_.jpg"
    ]
}
];


let stars = [
{
    name: "Scarlett Johansson",
    lived: "1984-",
    imdb: "nm0424060",
    films: ["Manny & Lo", "The Horse Whisperer", "Ghost World", "An American Rhapsody", "Lost in Translation", "Girl with a Pearl Earring", "The Perfect Score", "A Love Song for Bobby Long", "Match Point", "The Island", "Scoop", "The Black Dahlia", "The Prestige", "The Nanny Diaries", "Vicky Cristina Barcelona", "The Spirit", "Iron Man 2", "Under the Skin", "Her", "Lucy", "Ghost in the Shell", "Marriage Story", "Jojo Rabbit", "Black Widow"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjA1MzMyODM0Nl5BMl5BanBnXkFtZTgwOTY0NjkxMDI@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTMwODMzNjIyMF5BMl5BanBnXkFtZTcwMzc5NTIyMw@@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTlkYWE4YjMtZjYyZC00ZjJkLTliNDAtZWZiNjc0MTU4Y2EyXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzVjZWJhOGUtY2E4ZS00OWFiLTk3YjEtZDNjOWUyODJkMDdiXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Jane Fonda",
    lived: "1937-",
    imdb: "nm0000404",
    films: ["Barbarella", "They Shoot Horses, Don't They?", "Klute", "The China Syndrome", "9 to 5", "On Golden Pond", "The Morning After", "The Newsroom", "Monster-in-Law", "Youth", "Coming Home", "The Electric Horseman", "Grace and Frankie"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNzk5M2M2NWQtMWI3ZS00MGJkLTkxNmMtYzgwMjNlMTg3NjBkXkEyXkFqcGc@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU3NjQ0OTAxMF5BMl5BanBnXkFtZTgwOTk0NDExNTE@._V1_QL75_UX400_.jpg"
    ]
},
{
    name: "Jack Nicholson",
    lived: "1937-",
    imdb: "nm0000197",
    films: ["One Flew Over the Cuckoo's Nest", "Chinatown", "The Shining", "A Few Good Men", "Terms of Endearment", "Batman", "As Good as It Gets", "Easy Rider", "The Last Detail", "Prizzi's Honor", "The Witches of Eastwick", "Anger Management", "The Departed", "Something's Gotta Give"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYjc3MmI4ZWEtZGRkZC00M2MxLThjZWUtZTYwYmM2ZDY3M2U2XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Marlon Brando",
    lived: "1924-2004",
    imdb: "nm0000008",
    films: ["A Streetcar Named Desire", "The Wild One", "Julius Caesar", "On the Waterfront", "Mutiny on the Bounty", "The Chase", "Burn!", "The Godfather", "Last Tango in Paris", "The Godfather Part II", "The Missouri Breaks", "Superman", "Apocalypse Now", "The Freshman"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYzM0NjgwMzEtY2I5Zi00NjhiLWI0MDQtNjVjMGY4OTRmZmFlXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Martin Sheen",
    lived: "1940-",
    imdb: "nm0000640",
    films: ["Badlands", "Apocalypse Now", "The West Wing", "Wall Street", "The Departed", "The American President", "Catch-22", "Gandhi", "Angels in the Outfield", "Bobby", "The Way", "The Burning", "The Amazing Spider-Man 2"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMDM4NzE0Y2ItNTRjMS00MDgxLWFjNTYtMDUyNzFjZWI4MjczXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Peter Sellers",
    lived: "1925-1980",
    imdb: "nm0000634",
    films: ["Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "The Pink Panther", "A Shot in the Dark", "The Party", "Being There", "The Return of the Pink Panther", "After the Fox", "I Love You, Alice B. Toklas", "The World of Henry Orient", "The Millionairess", "Heavens Above!", "What's New Pussycat?", "The Party", "The Wrong Arm of the Law"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjVhYjY0MjctNjU2My00YzU2LTg4MGUtMzEyZTM1YzEyM2I4XkEyXkFqcGc@._V1_QL75_UX290_.jpg"
    ]
},
{
    name: "Frances McDormand",
    lived: "1957-",
    imdb: "nm0000531",
    films: ["Blood Simple", "Fargo", "Burn After Reading", "Almost Famous", "The Man Who Wasn't There", "North Country", "Miss Pettigrew Lives for a Day", "A Serious Man", "Olive Kitteridge", "Hail, Caesar!", "Three Billboards Outside Ebbing, Missouri", "Nomadland", "The Tragedy of Macbeth"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BOGFjNzE5NzUtZmYzOS00ODRlLWJmZDQtNTAyMDQ0YTViZGNkXkEyXkFqcGc@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "Robert Duvall",
    lived: "1931-",
    imdb: "nm0000380",
    films: ["The Godfather", "Apocalypse Now", "The Great Santini", "The Conversation", "The Godfather Part II", "Lonesome Dove", "The Judge", "A Civil Action", "The Road", "Open Range", "Secondhand Lions", "True Grit", "The Apostle", "Jack Reacher"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNDEzODAyYWUtMzliMy00YTcwLWFlZjQtMzdlZjJmMTRiNDE3XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Shirley MacLaine",
    lived: "1934-",
    imdb: "nm0000511",
    films: ["The Apartment", "Some Came Running", "Irma la Douce", "The Turning Point", "Terms of Endearment", "Postcards from the Edge", "Being There", "Steel Magnolias", "The Children's Hour", "Madame Sousatzka", "In Her Shoes", "Bernie", "The Evening Star", "Guarding Tess"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZGZjNGFiZDgtZTNmMC00MmFjLTkxM2EtMzlmYTM5NGU2ZjFlXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYjk2ODFmM2QtNGIxZi00YTZmLTgzMzgtMjdmYjU2M2QyZGZjXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjc5MDU5NDYxOF5BMl5BanBnXkFtZTcwNjQ3NTQ4Mw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Judy Garland",
    lived: "1922-1969",
    imdb: "nm0000023",
    films: ["The Wizard of Oz", "A Star Is Born", "Meet Me in St. Louis", "The Harvey Girls", "Easter Parade", "Summer Stock", "The Clock", "The Pirate", "Till the Clouds Roll By", "The Barkleys of Broadway", "Ziegler's Holiday Inn", "The Land of the Good", "Listen, Darling"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZjg5ZGZjZTUtOGMxZC00N2JiLWFhZTctZjA1NjcwY2E3Y2UyXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZDc4ZDI3NmEtM2Y1Mi00OWZjLWIxNDItMDg3NWQzZDhiZjNiXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Dustin Hoffman",
    lived: "1937-",
    imdb: "nm0000163",
    films: ["The Graduate", "Papillon", "All the President's Men", "Kramer vs. Kramer", "Tootsie", "Rain Man", "Wag the Dog", "Outbreak", "Sleepers", "The Rainmaker", "Sphere", "I Heart Huckabees", "Stranger Than Fiction", "Last Chance Harvey", "Kung Fu Panda", "Meet the Fockers", "Little Fockers", "The Meyerowitz Stories"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMGU4YzFkYzQtYjdhMi00OGY1LTkzYTktOWRhNDYyMzViYTZhXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Uma Thurman",
    lived: "1970-",
    imdb: "nm0000235",
    films: ["Pulp Fiction", "Kill Bill: Vol. 1", "Kill Bill: Vol. 2", "Gattaca", "The Truth About Cats & Dogs", "Dangerous Liaisons", "Batman & Robin", "My Super Ex-Girlfriend", "The Producers", "The War of the Roses", "Paycheck", "Be Cool", "Motherhood", "Les Misérables", "The House That Jack Built"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODgyNWQ1MWEtYmJlZS00ZjhmLWExNGQtNjJiNjY5MTQwZTg4XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Tom Hanks",
    lived: "1956-",
    imdb: "nm0000158",
    films: ["He Knows You're Alone", "Splash", "Bachelor Party", "The Man with One Red Shoe", "Volunteers", "The Money Pit", "Nothing in Common", "Every Time We Say Goodbye", "Dragnet", "Big", "Punchline", "The 'Burbs", "Turner & Hooch", "Joe Versus the Volcano", "The Bonfire of the Vanities", "A League of Their Own", "Sleepless in Seattle", "Philadelphia", "Forrest Gump", "Apollo 13", "That Thing You Do!", "Saving Private Ryan", "You've Got Mail", "The Green Mile", "Cast Away", "Road to Perdition", "Catch Me If You Can", "The Terminal", "The Ladykillers", "The Polar Express", "The Da Vinci Code", "Charlie Wilson's War", "Angels & Demons", "Larry Crowne", "Cloud Atlas", "Captain Phillips", "Saving Mr. Banks", "Bridge of Spies", "Sully", "The Post", "A Beautiful Day in the Neighborhood", "News of the World", "Finch", "Elvis", "A Man Called Otto"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTFkM2I5ZmEtZWU4Ny00YWU5LWJlOGUtNjFjMmZhYzU3YmNlXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Meg Ryan",
    lived: "1961-",
    imdb: "nm0000212",
    films: ["When Harry Met Sally", "Joe Versus the Volcano", "Prelude to a Kiss", "Sleepless in Seattle", "When a Man Loves a Woman", "I.Q.", "French Kiss", "Courage Under Fire", "Addicted to Love", "City of Angels", "You've Got Mail", "Hanging Up", "Proof of Life", "Kate & Leopold", "In the Cut", "Against the Ropes", "In the Land of Women", "The Women", "Serious Moonlight"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjE4MjMyNjQxMF5BMl5BanBnXkFtZTcwOTU2Mzg3NA@@._V1_QL75_UX187_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU3NjI0NjI1N15BMl5BanBnXkFtZTcwMTY2Mzg3NA@@._V1_QL75_UX146_.jpg"
    ]
},
{
    name: "Teri Garr",
    lived: "1944-2024",
    imdb: "nm0000414",
    films: ["Young Frankenstein", "Oh, God!", "Close Encounters of the Third Kind", "The Black Stallion", "One from the Heart", "Tootsie", "Mr. Mom", "Firstborn", "After Hours", "Miracles", "Full Moon in Blue Water", "Let It Ride", "Out Cold", "Short Time", "Waiting for the Light", "Mom and Dad Save the World", "Perfect Alibi", "A Simple Wish", "The Sky Is Falling"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNDgzZTFhODctMzRiZC00ODc1LTg0YjUtZDliZjc2MzQ1ZTE2XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Richard Dreyfuss",
    lived: "1947-",
    imdb: "nm0000377",
    films: ["The Apprenticeship of Duddy Kravitz", "Jaws", "Close Encounters of the Third Kind", "The Goodbye Girl", "The Big Fix", "The Competition", "Whose Life Is It Anyway?", "The Buddy System", "Down and Out in Beverly Hills", "Stakeout", "Nuts", "Moon over Parador", "Always", "Rosencrantz & Guildenstern Are Dead", "Once Around", "What About Bob?", "Mr. Holland's Opus", "Krippendorf's Tribe", "The Crew", "The Old Man Who Read Love Stories", "Silver City", "Poseidon", "My Life in Ruins", "Leaves of Grass", "The Lightkeepers", "Red", "Paranoia", "Cas & Dylan", "Very Good Girls", "Astronaut", "Daughter of the Wolf", "Crime Story"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZGM4YmMxZDMtNGU0OC00NzVhLTlmYTktZmZhYjllZTBjN2U4XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Aubrey Plaza",
    lived: "1984-",
    imdb: "nm2201555",
    films: ["Safety Not Guaranteed", "The To Do List", "Life After Beth", "Ned Rifle", "The Little Hours", "Ingrid Goes West", "An Evening with Beverly Luff Linn", "Black Bear", "Best Sellers", "Emily the Criminal"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BOGU2NWM3ZTYtZDNmZS00NWExLWI4YmUtMzY2MzliYjkyN2Y1XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Tom Cruise",
    lived: "1962-",
    imdb: "nm0000129",
    films: ["Endless Love", "Taps", "The Outsiders", "Losin' It", "Risky Business", "All the Right Moves", "Legend", "Top Gun", "The Color of Money", "Cocktail", "Rain Man", "Born on the Fourth of July", "Days of Thunder", "Far and Away", "A Few Good Men", "The Firm", "Interview with the Vampire", "Mission: Impossible", "Jerry Maguire", "Eyes Wide Shut", "Magnolia", "Mission: Impossible 2", "Vanilla Sky", "Minority Report", "The Last Samurai", "Collateral", "War of the Worlds", "Mission: Impossible III", "Lions for Lambs", "Valkyrie", "Knight and Day", "Mission: Impossible – Ghost Protocol", "Rock of Ages", "Jack Reacher", "Oblivion", "Edge of Tomorrow", "Mission: Impossible – Rogue Nation", "Jack Reacher: Never Go Back", "The Mummy", "American Made", "Mission: Impossible – Fallout", "Top Gun: Maverick", "Mission: Impossible – Dead Reckoning Part One"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYzVhMjE3M2ItMDU5My00YzM1LWE0OGYtOTJlYTM1ZmVlNDc0XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Robin Williams",
    lived: "1951-2014",
    imdb: "nm0000245",
    films: ["Popeye", "The World According to Garp", "Moscow on the Hudson", "Good Morning, Vietnam", "Dead Poets Society", "Awakenings", "The Fisher King", "Hook", "Aladdin", "Mrs. Doubtfire", "Jumanji", "The Birdcage", "Jack", "Good Will Hunting", "Patch Adams", "Bicentennial Man", "One Hour Photo", "Insomnia", "RV", "Man of the Year", "Night at the Museum", "License to Wed", "August Rush", "World's Greatest Dad", "Night at the Museum: Battle of the Smithsonian", "Old Dogs", "The Big Wedding", "The Face of Love", "Boulevard", "Night at the Museum: Secret of the Tomb"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNjFiOTkwMjktZjE5OC00ODIyLWFiOTAtYjAzNzVhMWM3MWVhXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Bill Murray",
    lived: "1950-",
    imdb: "nm0000195",
    films: ["Meatballs", "Where the Buffalo Roam", "Caddyshack", "Stripes", "Tootsie", "Ghostbusters", "The Razor's Edge", "Scrooged", "Ghostbusters II", "Quick Change", "What About Bob?", "Groundhog Day", "Mad Dog and Glory", "Ed Wood", "Kingpin", "Larger Than Life", "The Man Who Knew Too Little", "Rushmore", "Cradle Will Rock", "The Royal Tenenbaums", "Lost in Translation", "Coffee and Cigarettes", "The Life Aquatic with Steve Zissou", "Broken Flowers", "The Lost City", "Garfield: A Tail of Two Kitties", "The Darjeeling Limited", "Get Smart", "City of Ember", "Fantastic Mr. Fox", "Zombieland", "Get Low", "Passion Play", "Moonrise Kingdom", "Hyde Park on Hudson", "A Glimpse Inside the Mind of Charles Swan III", "The Monuments Men", "The Grand Budapest Hotel", "St. Vincent", "Rock the Kasbah", "The Jungle Book", "Ghostbusters", "Isle of Dogs", "The Dead Don't Die", "Zombieland: Double Tap", "On the Rocks", "The French Dispatch", "Ghostbusters: Afterlife"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYjYwZDZhZTItM2E0MS00MDZmLTgyOWUtNWQyMzdkZWQ4MmM5XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Sally Field",
    lived: "1946-",
    imdb: "nm0000398",
    films: ["Stay Hungry", "Smokey and the Bandit", "Heroes", "The End", "Hooper", "Norma Rae", "Beyond the Poseidon Adventure", "Smokey and the Bandit II", "Back Roads", "Absence of Malice", "Kiss Me Goodbye", "Places in the Heart", "Murphy's Romance", "Surrender", "Punchline", "Steel Magnolias", "Not Without My Daughter", "Soapdish", "Mrs. Doubtfire", "Forrest Gump", "Eye for an Eye", "Where the Heart Is", "Legally Blonde 2: Red, White & Blonde", "Two Weeks", "The Amazing Spider-Man", "Lincoln", "The Amazing Spider-Man 2", "Hello, My Name Is Doris", "Spoiler Alert", "80 for Brady"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZmZhYjg0MTMtMjQ2Ni00MzY4LTg2MDgtZTNhZjBjMGFhMmJjXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNWQzNTY1NmItYzJiZS00NWFlLWJlZjUtNGVkMTI1YTdiNTRlXkEyXkFqcGc@._V1_QL75_UX327_.jpg"
    ]
},
{
    name: "Harrison Ford",
    lived: "1942-",
    imdb: "nm0000148",
    films: ["American Graffiti", "Star Wars: Episode IV - A New Hope", "Heroes", "Force 10 from Navarone", "Hanover Street", "Apocalypse Now", "The Frisco Kid", "Star Wars: Episode V - The Empire Strikes Back", "Raiders of the Lost Ark", "Blade Runner", "Star Wars: Episode VI - Return of the Jedi", "Indiana Jones and the Temple of Doom", "Witness", "The Mosquito Coast", "Frantic", "Working Girl", "Indiana Jones and the Last Crusade", "Presumed Innocent", "Regarding Henry", "Patriot Games", "The Fugitive", "Clear and Present Danger", "Sabrina", "The Devil's Own", "Air Force One", "Six Days, Seven Nights", "Random Hearts", "What Lies Beneath", "K-19: The Widowmaker", "Hollywood Homicide", "Firewall", "Indiana Jones and the Kingdom of the Crystal Skull", "Extraordinary Measures", "Morning Glory", "Cowboys & Aliens", "Paranoia", "Ender's Game", "The Expendables 3", "The Age of Adaline", "Star Wars: Episode VII - The Force Awakens", "Blade Runner 2049", "The Call of the Wild", "Indiana Jones and the Dial of Destiny"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZWFlYmQ2NTUtNzk0MS00NmI4LTliZjMtNDY1Yjk3NDc1OTBkXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Gene Wilder",
    lived: "1933-2016",
    imdb: "nm0000698",
    films: ["The Producers", "Start the Revolution Without Me", "Quackser Fortune Has a Cousin in the Bronx", "Willy Wonka & the Chocolate Factory", "Everything You Always Wanted to Know About Sex* (*But Were Afraid to Ask)", "Rhinoceros", "Blazing Saddles", "The Little Prince", "Young Frankenstein", "The Adventure of Sherlock Holmes' Smarter Brother", "Silver Streak", "The World's Greatest Lover", "The Frisco Kid", "Stir Crazy", "Hanky Panky", "The Woman in Red", "Haunted Honeymoon", "See No Evil, Hear No Evil", "Funny About Love", "Another You"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BM2ZlNWYxYWItYzBiNC00MTEzLWEwMjctMmExZDQ1N2EyM2M1XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Steve Martin",
    lived: "1945-",
    imdb: "nm0000188",
    films: ["The Jerk", "Pennies from Heaven", "Dead Men Don't Wear Plaid", "The Man with Two Brains", "The Lonely Guy", "All of Me", "¡Three Amigos!", "Roxanne", "Planes, Trains and Automobiles", "Dirty Rotten Scoundrels", "Parenthood", "My Blue Heaven", "L.A. Story", "Father of the Bride", "Grand Canyon", "Housesitter", "Leap of Faith", "A Simple Twist of Fate", "Mixed Nuts", "Father of the Bride Part II", "Sgt. Bilko", "The Spanish Prisoner", "The Out-of-Towners", "Bowfinger", "Novocaine", "Bringing Down the House", "Cheaper by the Dozen", "Shopgirl", "Cheaper by the Dozen 2", "The Pink Panther", "Baby Mama", "The Pink Panther 2", "It's Complicated", "The Big Year", "Billy Lynn's Long Halftime Walk"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZWY4ZTMyMDQtMGNjMS00ZDQ3LWI4ZWItYzcyNGFiYmFiY2NhXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Marisa Tomei",
    lived: "1964-",
    imdb: "nm0000673",
    films: ["Oscar", "My Cousin Vinny", "Untamed Heart", "The Paper", "Only You", "Unhook the Stars", "Slums of Beverly Hills", "Happy Accidents", "In the Bedroom", "Anger Management", "Alfie", "Factotum", "Before the Devil Knows You're Dead", "The Wrestler", "Cyrus", "The Lincoln Lawyer", "Crazy, Stupid, Love.", "The Ides of March", "Parental Guidance", "Love Is Strange", "The Big Short", "Spider-Man: Homecoming", "The First Purge", "Spider-Man: Far From Home", "The King of Staten Island", "Spider-Man: No Way Home"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMGVlOGIwMTYtNzBmOS00YmFhLWFhNGYtYTA5MmMwZDczNWY2XkEyXkFqcGc@._V1_QL75_UX595_.jpg"
    ]
},
{
    name: "Emma Stone",
    lived: "1988-",
    imdb: "nm1297015",
    films: ["Superbad", "The Rocker", "The House Bunny", "Ghosts of Girlfriends Past", "Paper Man", "Zombieland", "Easy A", "Crazy, Stupid, Love.", "The Help", "The Amazing Spider-Man", "Gangster Squad", "Movie 43", "The Croods", "The Amazing Spider-Man 2", "Magic in the Moonlight", "Birdman or (The Unexpected Virtue of Ignorance)", "Aloha", "Irrational Man", "La La Land", "Battle of the Sexes", "The Favourite", "Zombieland: Double Tap", "The Croods: A New Age", "Cruella", "Poor Things"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTU4ODgxODkxN15BMl5BanBnXkFtZTgwMjE2NjYyNjE@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Bruce Willis",
    lived: "1955-",
    imdb: "nm0000246",
    films: ["Blind Date", "Sunset", "Die Hard", "In Country", "Look Who's Talking", "Die Hard 2", "Mortal Thoughts", "Hudson Hawk", "Billy Bathgate", "Death Becomes Her", "Striking Distance", "Pulp Fiction", "Color of Night", "Die Hard with a Vengeance", "Last Man Standing", "The Fifth Element", "Mercury Rising", "Armageddon", "The Sixth Sense", "The Whole Nine Yards", "Unbreakable", "Bandits", "Hart's War", "Tears of the Sun", "Hostage", "Sin City", "16 Blocks", "Lucky Number Slevin", "Live Free or Die Hard", "Surrogates", "Red", "Moonrise Kingdom", "Looper", "A Good Day to Die Hard", "Red 2", "Sin City: A Dame to Kill For", "Death Wish", "Glass"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTc1NzgxMzQ5OV5BMl5BanBnXkFtZTcwMzM0ODAyNw@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Robert De Niro",
    lived: "1943-",
    imdb: "nm0000134",
    films: ["Greetings", "The Wedding Party", "Bloody Mama", "Hi, Mom!", "The Gang That Couldn't Shoot Straight", "Mean Streets", "Bang the Drum Slowly", "The Godfather Part II", "Taxi Driver", "The Last Tycoon", "New York, New York", "The Deer Hunter", "Raging Bull", "True Confessions", "The King of Comedy", "Once Upon a Time in America", "Falling in Love", "Brazil", "The Mission", "Angel Heart", "The Untouchables", "Midnight Run", "Jacknife", "We're No Angels", "Stanley & Iris", "Goodfellas", "Awakenings", "Guilty by Suspicion", "Cape Fear", "Mad Dog and Glory", "This Boy's Life", "A Bronx Tale", "Mary Shelley's Frankenstein", "Casino", "Heat", "The Fan", "Sleepers", "Marvin's Room", "Wag the Dog", "Jackie Brown", "Ronin", "Analyze This", "Flawless", "The Adventures of Rocky & Bullwinkle", "Meet the Parents", "15 Minutes", "The Score", "Showtime", "City by the Sea", "Analyze That", "Godsend", "Meet the Fockers", "Hide and Seek", "The Good Shepherd", "Stardust", "Righteous Kill", "What Just Happened", "Everybody's Fine", "Machete", "Stone", "Little Fockers", "Limitless", "Killer Elite", "Red Lights", "The Big Wedding", "Killing Season", "The Family", "Last Vegas", "American Hustle", "Grudge Match", "The Bag Man", "The Intern", "Heist", "Dirty Grandpa", "Hands of Stone", "The Comedian", "The Wizard of Lies", "Joker", "The Irishman", "The Comeback Trail", "Amsterdam", "Killers of the Flower Moon"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZmY5NzJhYTMtN2QwNy00OGUzLWI1YzAtYTBkZDAxOGRhYTRlXkEyXkFqcGc@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "Robert Redford",
    lived: "1936-",
    imdb: "nm0000602",
    films: ["War Hunt", "Situation Hopeless... But Not Serious", "Inside Daisy Clover", "This Property Is Condemned", "The Chase", "Barefoot in the Park", "Butch Cassidy and the Sundance Kid", "Tell Them Willie Boy Is Here", "Little Fauss and Big Halsy", "Jeremiah Johnson", "The Candidate", "The Way We Were", "The Sting", "The Great Gatsby", "Three Days of the Condor", "All the President's Men", "A Bridge Too Far", "The Electric Horseman", "Brubaker", "The Natural", "Out of Africa", "Legal Eagles", "Sneakers", "Indecent Proposal", "Quiz Show", "Up Close & Personal", "The Horse Whisperer", "The Last Castle", "Spy Game", "All Is Lost", "Captain America: The Winter Soldier", "A Walk in the Woods", "Truth", "Our Souls at Night", "The Old Man & the Gun"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNjYyMWY2MjQtYjgwNC00NDJlLThjYjktNjIwMzhhZmY0NWVmXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Morgan Freeman",
    lived: "1937-",
    imdb: "nm0000151",
    films: ["Brubaker", "Eyewitness", "Harry & Son", "Teachers", "Marie", "That Was Then... This Is Now", "Street Smart", "Clean and Sober", "Lean on Me", "Driving Miss Daisy", "The Bonfire of the Vanities", "Robin Hood: Prince of Thieves", "Unforgiven", "The Shawshank Redemption", "Se7en", "Chain Reaction", "Kiss the Girls", "Amistad", "Deep Impact", "Nurse Betty", "Along Came a Spider", "High Crimes", "Bruce Almighty", "Dreamcatcher", "Million Dollar Baby", "An Unfinished Life", "Lucky Number Slevin", "Evan Almighty", "Gone Baby Gone", "The Bucket List", "Wanted", "The Dark Knight", "Invictus", "Red", "Dolphin Tale", "The Magic of Belle Isle", "Olympus Has Fallen", "Now You See Me", "Oblivion", "Last Vegas", "Transcendence", "Lucy", "Ted 2", "London Has Fallen", "Now You See Me 2", "Angel Has Fallen", "The Comeback Trail", "The Hitman's Wife's Bodyguard", "Paradise Highway", "A Good Person", "The Ritual Killer"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODlkZjc1YjAtODAyNy00MjRmLWI5MGMtMmVmM2UyNWRkYWYzXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Samuel L. Jackson",
    lived: "1948-",
    imdb: "nm0000168",
    films: ["Together for Days", "Ragtime", "Magic Sticks", "Do the Right Thing", "Goodfellas", "Jungle Fever", "Patriot Games", "Amos & Andrew", "Jurassic Park", "Pulp Fiction", "Die Hard with a Vengeance", "A Time to Kill", "Jackie Brown", "The Negotiator", "Deep Blue Sea", "Shaft", "Unbreakable", "Changing Lanes", "XXX", "S.W.A.T.", "Kill Bill: Vol. 2", "Coach Carter", "Snakes on a Plane", "Black Snake Moan", "1408", "Iron Man", "Lakeview Terrace", "The Spirit", "Inglourious Basterds", "Mother and Child", "Unthinkable", "The Other Guys", "Captain America: The First Avenger", "The Avengers", "Django Unchained", "RoboCop", "Kingsman: The Secret Service", "Avengers: Age of Ultron", "The Hateful Eight", "Kong: Skull Island", "The Hitman's Bodyguard", "Avengers: Infinity War", "Captain Marvel", "Spider-Man: Far From Home", "The Hitman's Wife's Bodyguard", "Secret Invasion"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMDJlZTg4MzYtY2U1ZC00YTc3LTliZjAtZjdjNGQxYzlmY2MwXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Ethan Hawke",
    lived: "1970-",
    imdb: "nm0000160",
    films: ["Explorers", "Dead Poets Society", "White Fang", "A Midnight Clear", "Alive", "Reality Bites", "Before Sunrise", "Gattaca", "Great Expectations", "The Newton Boys", "Snow Falling on Cedars", "Hamlet", "Training Day", "Tape", "Chelsea Walls", "Taking Lives", "Before Sunset", "Assault on Precinct 13", "Lord of War", "Fast Food Nation", "Before the Devil Knows You're Dead", "What Doesn't Kill You", "Brooklyn's Finest", "Daybreakers", "Sinister", "Before Midnight", "The Purge", "Boyhood", "Predestination", "Good Kill", "Born to Be Blue", "Maggie's Plan", "The Magnificent Seven", "First Reformed", "Juliet, Naked", "Stockholm", "The Truth", "Tesla", "The Black Phone", "Raymond & Ray", "The Northman"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjMwYmZlNDAtOTM5ZC00OGZjLTk4NzUtZTYwOTk4ZjAzOWY3XkEyXkFqcGc@._V1_QL75_UX360_.jpg"
    ]
},
{
    name: "Jodie Foster",
    lived: "1962-",
    imdb: "nm0000149",
    films: ["Napoleon and Samantha", "Kansas City Bomber", "Tom Sawyer", "One Little Indian", "Alice Doesn't Live Here Anymore", "Taxi Driver", "Bugsy Malone", "Freaky Friday", "The Little Girl Who Lives Down the Lane", "Candleshoe", "Foxes", "The Hotel New Hampshire", "The Accused", "The Silence of the Lambs", "Sommersby", "Maverick", "Nell", "Contact", "Anna and the King", "Panic Room", "Flightplan", "Inside Man", "The Brave One", "Nim's Island", "Carnage", "Elysium", "Hotel Artemis", "The Mauritanian"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTM3MDUwNjgzM15BMl5BanBnXkFtZTcwODExOTQyNQ@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Billy Crystal",
    lived: "1948-",
    imdb: "nm0000345",
    films: ["Rabbit Test", "This Is Spinal Tap", "Running Scared", "Throw Momma from the Train", "The Princess Bride", "When Harry Met Sally...", "City Slickers", "Mr. Saturday Night", "Forget Paris", "City Slickers II: The Legend of Curly's Gold", "Deconstructing Harry", "Analyze This", "America's Sweethearts", "Analyze That", "Parental Guidance", "Monsters University", "Standing Up, Falling Down", "Here Today"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYmVkYzNiNDQtYmEwMi00MTEyLTkzNzktZmJiYzhkNWU3YzZkXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Jennifer Lawrence",
    lived: "1990-",
    imdb: "nm2225369",
    films: ["Winter's Bone", "The Hunger Games", "Silver Linings Playbook", "The Hunger Games: Catching Fire", "American Hustle", "X-Men: Days of Future Past", "The Hunger Games: Mockingjay – Part 1", "The Hunger Games: Mockingjay – Part 2", "Joy", "X-Men: Apocalypse", "Passengers", "Mother!", "Red Sparrow", "Dark Phoenix", "Don't Look Up", "Causeway", "No Hard Feelings"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjM4OTUyODc0OV5BMl5BanBnXkFtZTgwMjA2ODQ0MzI@._V1_QL75_UX402_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOGQ1YjUxNmItYjhlYi00MTA5LTkxNTgtODE2YzQ3YjVlMDgwXkEyXkFqcGc@._V1_QL75_UX553_.jpg"
    ]
},
{
    name: "Christopher Lloyd",
    lived: "1938-",
    imdb: "nm0000502",
    films: ["Back to the Future", "Back to the Future Part II", "Back to the Future Part III", "The Addams Family", "Addams Family Values", "Angels in the Outfield", "Camp Nowhere", "Baby Geniuses", "Interstate 60: Episodes of the Road", "The Boat Builder", "Nobody"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNTY2ZTA4NDEtZWYxNi00NGJlLThkOGMtNmY0YzQ4NzQ0NGQzXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Jenny Agutter",
    lived: "1952-",
    imdb: "nm0000256",
    films: ["East of Sudan", "Star!", "I Start Counting", "The Railway Children", "Walkabout", "Logan's Run", "Equus", "An American Werewolf in London", "Dark Tower", "Child's Play 2", "Blue Juice", "The Avengers", "Captain America: The Winter Soldier", "Queen of the Desert", "Sometimes Always Never", "The Railway Children Return"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMDAwMzJlNzQtYTg2ZS00NGZhLWI2ZmUtYzk2ZTMwNDU3YmQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNzgxYzNjNWYtZmRlNi00MmI2LTlhZTQtNGFkOGRiOGRhYjkxXkEyXkFqcGc@._V1_QL75_UX808_.jpg"
    ]
},
{
    name: "Anthony Hopkins",
    lived: "1937-",
    imdb: "nm0000164",
    films: ["The Lion in Winter", "A Bridge Too Far", "Magic", "The Elephant Man", "The Bounty", "84 Charing Cross Road", "The Silence of the Lambs", "Howards End", "Bram Stoker's Dracula", "The Remains of the Day", "Legends of the Fall", "Nixon", "Amistad", "The Mask of Zorro", "Meet Joe Black", "Hannibal", "Red Dragon", "The World's Fastest Indian", "Fracture", "The Wolfman", "Thor", "The Rite", "Hitchcock", "Thor: The Dark World", "Noah", "Transformers: The Last Knight", "The Father", "The Son"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMWYyNTA4OWEtMGRhOS00NGQ4LTliMWItYTMxM2RhNDIxNGMzXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Diane Keaton",
    lived: "1946-",
    imdb: "nm0000473",
    films: ["Lovers and Other Strangers", "The Godfather", "Play It Again, Sam", "Sleeper", "Love and Death", "The Godfather Part II", "Annie Hall", "Looking for Mr. Goodbar", "Interiors", "Manhattan", "Reds", "Shoot the Moon", "The Little Drummer Girl", "Mrs. Soffel", "Crimes of the Heart", "Baby Boom", "The Good Mother", "The Godfather Part III", "Father of the Bride", "Manhattan Murder Mystery", "Father of the Bride Part II", "The First Wives Club", "Marvin's Room", "The Only Thrill", "The Other Sister", "Hanging Up", "Town & Country", "Plan B", "Something's Gotta Give", "The Family Stone", "Because I Said So", "Mama's Boy", "Mad Money", "Smother", "Morning Glory", "Darling Companion", "The Big Wedding", "And So It Goes", "5 Flights Up", "Love the Coopers", "Finding Dory", "Hampstead", "Book Club", "Poms", "Father of the Bride, Part 3(ish)", "Love, Weddings & Other Disasters", "Mack & Rita", "Maybe I Do", "Book Club: The Next Chapter", "Arthur's Whisky", "Summer Camp"],
    photos: [
        "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/81863/87682/ss3616210_-_photograph_of_diane_keaton_available_in_4_sizes_framed_or_unframed_buy_now_at_starstills__34890__92340.1396093724.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTcxYjM3ODktMDk3OS00ZThhLWE2NzgtMjUxMDg1ZmYzZmViXkEyXkFqcGc@._V1_QL75_UX316_.jpg"
    ]
},
{
    name: "Sigourney Weaver",
    lived: "1949-",
    imdb: "nm0000244",
    films: ["Alien", "Aliens", "Gorillas in the Mist", "Ghostbusters", "Alien³", "Death and the Maiden", "Alien Resurrection", "Galaxy Quest", "Heartbreakers", "The Village", "Avatar", "You Again", "Red Lights", "The Cabin in the Woods", "Chappie", "A Monster Calls", "My Salinger Year", "Avatar: The Way of Water"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BZjVkZjg1NmEtZTE4Yy00ODQwLTlkZjAtYTdmZjM4YjFiZDc4XkEyXkFqcGc@._V1_QL75_UX808_.jpg"
    ]
}
];


let directors = [
{
    name: "Francis Ford Coppola",
    lived: "1939-",
    imdb: "nm0000338",
    films: ["Dementia 13", "You're a Big Boy Now", "Finian's Rainbow", "The Rain People", "The Godfather", "The Conversation", "The Godfather Part II", "Apocalypse Now", "One from the Heart", "The Outsiders", "Rumble Fish", "The Cotton Club", "Peggy Sue Got Married", "Gardens of Stone", "Tucker: The Man and His Dream", "The Godfather Part III", "Bram Stoker's Dracula", "Jack", "The Rainmaker", "Youth Without Youth", "Tetro", "Twixt", "Megalopolis"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYWRmYWNiNWMtOGZiNS00MDYxLWEwMGQtNTZiNWZiMzM5MGVlXkEyXkFqcGc@._V1_QL75_UX360_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYmQ3ZmQ4N2MtNDM1NC00MTM3LTk2ZTctMDhhZTE0Yjg5M2ZjXkEyXkFqcGc@._V1_QL75_UX267_.jpg"
    ]
},
{
    name: "Coen brothers",
    lived: "Joel 1954-, Ethan 1957-",
    url: "https://en.wikipedia.org/wiki/Coen_brothers",
    films: ["Blood Simple", "Raising Arizona", "Miller's Crossing", "Barton Fink", "The Hudsucker Proxy", "Fargo", "The Big Lebowski", "O Brother, Where Art Thou?", "The Man Who Wasn't There", "Intolerable Cruelty", "The Ladykillers", "No Country for Old Men", "Burn After Reading", "A Serious Man", "True Grit", "Inside Llewyn Davis", "Hail, Caesar!", "The Ballad of Buster Scruggs"],
    photos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Coen_brothers_Cannes_2015_2_%28CROPPED%29.jpg/220px-Coen_brothers_Cannes_2015_2_%28CROPPED%29.jpg"
    ]
},
{
    name: "Hal Ashby",
    lived: "1929-1988",
    imdb: "nm0000797",
    films: ["The Landlord", "Harold and Maude", "The Last Detail", "Shampoo", "Bound for Glory", "Coming Home", "Being There", "Second-Hand Hearts", "Lookin' to Get Out", "Let's Spend the Night Together", "The Slugger's Wife", "8 Million Ways to Die"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNTE4MjI2Njc4MF5BMl5BanBnXkFtZTcwNDA0NjIyOA@@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Stanley Kubrick",
    lived: "1928-1999",
    imdb: "nm0000040",
    films: ["Fear and Desire", "Killer's Kiss", "The Killing", "Paths of Glory", "Spartacus", "Lolita", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "2001: A Space Odyssey", "A Clockwork Orange", "Barry Lyndon", "The Shining", "Full Metal Jacket", "Eyes Wide Shut"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMjI3Y2Y4ODAtZTBhYi00NTUyLTk5NmMtN2VlOTE3OWU3ZDA3XkEyXkFqcGc@._V1_QL75_UX475_.jpg"
    ]
},
{
    name: "Steven Spielberg",
    lived: "1946-",
    imdb: "nm0000229",
    films: ["Duel", "The Sugarland Express", "Jaws", "Close Encounters of the Third Kind", "1941", "Raiders of the Lost Ark", "E.T. the Extra-Terrestrial", "Indiana Jones and the Temple of Doom", "The Color Purple", "Empire of the Sun", "Indiana Jones and the Last Crusade", "Hook", "Jurassic Park", "Schindler's List", "The Lost World: Jurassic Park", "Amistad", "Saving Private Ryan", "A.I. Artificial Intelligence", "Minority Report", "Catch Me If You Can", "The Terminal", "War of the Worlds", "Munich", "Indiana Jones and the Kingdom of the Crystal Skull", "The Adventures of Tintin", "War Horse", "Lincoln", "Bridge of Spies", "The BFG", "The Post", "Ready Player One", "West Side Story", "The Fabelmans"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BYWU5NzFkMjUtYjgzYi00NDBhLWJkYjctNTRhODU4ZDg4NGIzXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Quentin Tarantino",
    lived: "1963-",
    imdb: "nm0000233",
    films: ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown", "Kill Bill: Vol. 1", "Kill Bill: Vol. 2", "Death Proof", "Inglourious Basterds", "Django Unchained", "The Hateful Eight", "Once Upon a Time in Hollywood"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNGRjMmI5MTktNjc3Mi00N2UxLWE4ODUtODNjZTU3ZTUwYjRlXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Woody Allen",
    lived: "1935-",
    imdb: "nm0000095",
    films: ["What's Up, Tiger Lily?", "Take the Money and Run", "Bananas", "Everything You Always Wanted to Know About Sex* (*But Were Afraid to Ask)", "Sleeper", "Love and Death", "Annie Hall", "Interiors", "Manhattan", "Stardust Memories", "A Midsummer Night's Sex Comedy", "Zelig", "Broadway Danny Rose", "The Purple Rose of Cairo", "Hannah and Her Sisters", "Radio Days", "September", "Another Woman", "Crimes and Misdemeanors", "Alice", "Shadows and Fog", "Husbands and Wives", "Manhattan Murder Mystery", "Bullets Over Broadway", "Mighty Aphrodite", "Everyone Says I Love You", "Deconstructing Harry", "Celebrity", "Sweet and Lowdown", "Small Time Crooks", "The Curse of the Jade Scorpion", "Hollywood Ending", "Anything Else", "Melinda and Melinda", "Match Point", "Scoop", "Cassandra's Dream", "Vicky Cristina Barcelona", "Whatever Works", "You Will Meet a Tall Dark Stranger", "Midnight in Paris", "To Rome with Love", "Blue Jasmine", "Magic in the Moonlight", "Irrational Man", "Café Society", "Wonder Wheel", "A Rainy Day in New York", "Rifkin's Festival", "Coup de chance"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMWIzYzFmYzEtYjBjYS00MDY1LTg1MWQtMTQzOTcxZTMyMTM3XkEyXkFqcGc@._V1_QL75_UX395_.jpg"
    ]
},
{
    name: "Mel Brooks",
    lived: "1926-",
    imdb: "nm0000316",
    films: ["The Producers", "The Twelve Chairs", "Blazing Saddles", "Young Frankenstein", "Silent Movie", "High Anxiety", "History of the World, Part I", "Spaceballs", "Life Stinks", "Robin Hood: Men in Tights", "Dracula: Dead and Loving It"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMDQzYTA3MzgtOGM5My00MWZmLWJmNDYtODkyNGQyMDNkOThhXkEyXkFqcGc@._V1_QL75_UX402_.jpg"
    ]
},
{
    name: "George Lucas",
    lived: "1944-",
    imdb: "nm0000184",
    films: ["THX 1138", "American Graffiti", "Star Wars"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BODM3ZGNjYTktNGYxOC00ODQyLTk3YmUtZjAxMDVkMGJjNTg3XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "Martin Scorsese",
    lived: "1942-",
    imdb: "nm0000217",
    films: ["Who's That Knocking at My Door", "Boxcar Bertha", "Mean Streets", "Alice Doesn't Live Here Anymore", "Taxi Driver", "New York, New York", "Raging Bull", "The King of Comedy", "After Hours", "The Color of Money", "The Last Temptation of Christ", "Goodfellas", "Cape Fear", "The Age of Innocence", "Casino", "Kundun", "Bringing Out the Dead", "Gangs of New York", "The Aviator", "The Departed", "Shutter Island", "Hugo", "The Wolf of Wall Street", "Silence", "The Irishman", "Killers of the Flower Moon"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTM0NjNhYTMtOWI3Ni00Nzc1LWJjMDItYzBmMjAxZTIyYzVkXkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
},
{
    name: "David Lynch",
    lived: "1946-",
    imdb: "nm0000186",
    films: ["Eraserhead", "The Elephant Man", "Dune", "Blue Velvet", "Wild at Heart", "Twin Peaks: Fire Walk with Me", "Lost Highway", "The Straight Story", "Mulholland Drive", "Inland Empire"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BMTY3MTk1NzAxOV5BMl5BanBnXkFtZTYwOTA2NTE1._V1_QL75_UX820_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMDM5MDU5ZTktNmRjMi00M2ZhLWE2NzYtYmJiNmNhNTRiOWUzXkEyXkFqcGc@._V1_QL75_UX347_.jpg"
    ]
},
{
    name: "Wes Anderson",
    lived: "1969-",
    imdb: "nm0027572",
    films: ["Bottle Rocket", "Rushmore", "The Royal Tenenbaums", "The Life Aquatic with Steve Zissou", "The Darjeeling Limited", "Fantastic Mr. Fox", "Moonrise Kingdom", "The Grand Budapest Hotel", "Isle of Dogs", "The French Dispatch", "Asteroid City"],
    photos: [
        "https://m.media-amazon.com/images/M/MV5BNDJiNDVjNzAtMDczNS00OTVkLTg2ZjAtNjQ5ODczNGUyMDU4XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
    ]
}
];