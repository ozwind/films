/*

Author: Cliff Hewitt

30-Dec-2024  Inception
14-Jan-2025  Movie reactions included
25-Jan-2025  Add yellow imdb links in list of #infoTable films and stars

*/

const MAIN_TBL = "#mainTable";
const INFO_TBL = "#infoTable";
const HIGHLIGHT = "highlight";
const FILM_LIST_STORE = "filmListStore";
const CLICKABLE = "clickable";
let types = [films, stars, directors];
let names = ["films", "stars", "directors"];
let selType = types[0];
let hasFocus = true;      // web-app hasFocus

function init() {
    setFilmStore(localStorage.getItem(FILM_LIST_STORE));
    sortFilms();
    directors.sort((a, b) => a.name.localeCompare(b.name));  // Sort directors by name
    stars.sort((a, b) => a.name.localeCompare(b.name));      // Sort stars by name
    initTable();
    initHandlers();
}

function sortFilms() {  // library sort films
    films.sort((a, b) => {
        const titleA = removeArticle(a.name).toLowerCase();
        const titleB = removeArticle(b.name).toLowerCase();
        return titleA.localeCompare(titleB);
    });
}

function removeArticle(title) {
    return title.replace(/^(The|A|An)\s+/i, "");
}

function setFilmStore(name) {
    let idx = $.inArray(name, names);
    idx = (idx >= 0) ? idx : 0;
    selType = types[idx];
    document.title = names[idx].charAt(0).toUpperCase() + names[idx].slice(1);
    localStorage.setItem(FILM_LIST_STORE, names[idx]);
}

function initHandlers() {
    const $document = $(document);

    $document.keydown(function(event) {
        if (event.key === "ArrowLeft" || event.keyCode === 37) {
            advanceType(false);  // back
        }
        else if (event.key === "ArrowRight" || event.keyCode === 39) {
            advanceType(true);   // forward
        }
    });

    $document.click(function(event) {
        openUrl(event);
    });

    $(window).on("focus blur", function (e) {
        hasFocus = e.type === "focus";
    });
}

function openUrl(event) {
    let url;
    const $target = $(event.target);
    const prefix = "https://imdb.com/";
    let name = $(MAIN_TBL + " ." + HIGHLIGHT + " td").text();

    if ($target.hasClass(CLICKABLE)) {
        name = $target.text();
        const film = films.find(d => d.name === name);
        if (film) {
            url = prefix + "title/" + film.imdb + "/";
        }
        else {
            const star = stars.find(d => d.name === name);
            if (star) {
                url = prefix + "name/" + star.imdb + "/";
            }
        }
    }
    else if (name && $(event.target).closest("." + HIGHLIGHT).length > 0) {

        if (selType === films) {
            const film = films.find(d => d.name === name);
            if ($(event.target).hasClass("popcorn") && film.popcorn) {
                url = film.popcorn;
            }
            else if (film.imdb) {
                url = prefix + "title/" + film.imdb + "/";
            }
        }
        else if (selType === directors) {
            const director = directors.find(d => d.name === name);
            if (director.url) {
                url = director.url;
            }
            else if (director.imdb) {
                url = prefix + "name/" + director.imdb + "/";
            }
        }
        else if (selType === stars) {
            const star = stars.find(d => d.name === name);
            if (star.imdb) {
                url = prefix + "name/" + star.imdb + "/";
            }
        }
    }

    if (url) {
        window.open(url, "_blank");
    }
}

function advanceType(forward) {  // true=forward, false= back
    let index = 0;

    $(INFO_TBL).empty();

    for (let i = 0; i < types.length; i++) {
        if (selType === types[i]) {
            index = i;
            break;
        }
    }

    if (forward) {
        index++;
        if (index >= types.length) {
            index = 0;
        }
    }
    else {  // back
        index--;
        if (index < 0) {
            index = types.length - 1;
        }
    }

    setFilmStore(names[index]);
    initTable();
}

function initTable() {
    const $mainTbl = $(MAIN_TBL);
    const $table = $("<table>");
    const $thead = $("<thead>");
    const $tbody = $("<tbody>");
    let text = "Films (" + films.length + ")";
    if (selType === directors) {
        text = "Directors (" + directors.length + ")";
    }
    else if (selType === stars) {
        text = "Stars (" + stars.length + ")";
    }
    const $headerRow = $("<tr>").append($("<th>").text(text));
    $headerRow.attr("title", "Click to cycle between Films, Directors, and Stars");

    $thead.append($headerRow);
    $table.append($thead);

    // Add table rows
    selType.forEach(type => {
        const $row = $("<tr>");
        let $div = $("<div>");
        const $span = $("<span>").text(type.name);
        $div.append($span);
        if (type.popcorn) {
            const $icon = $('<img>').attr('src', 'images/popcorn.ico');
            $icon.addClass("popcorn");
            $icon.attr("title", "Click for movie reaction video");
            $div.append($icon);
        }
        $row.append($("<td>").html($div));
        $tbody.append($row);
        if (type.imdb || type.url) {
            $row.addClass("pointer");
            $span.attr("title", "Click for imdb info");
        }
    });
    $table.append($tbody);

    $mainTbl.empty();
    $mainTbl.append($table);

    $('tbody tr').hover(
        function() {
            hover($(this));
        }
    );

    $(MAIN_TBL + " thead").hover(
        function() {
            clearHover();
        }
    );

    $(MAIN_TBL + " th").click(function() {
        advanceType(true);
    });
}

function initInfoTable(entry) {
    const $infoTbl = $(INFO_TBL);
    const $table = $("<table>");
    const $thead = $("<thead>");
    const $tbody = $("<tbody>");
    const $headerRow = $("<tr>");
    let columns = [];
    let headers;
    if (selType === films) {
        headers = ["Released", "Rating", "Director", "Stars"];
        columns.push(entry.released);
        columns.push(Number(entry.rating).toFixed(1));
        columns.push(entry.director);
        let $div = $("<div>");
        for (let i = 0; i < entry.stars.length; i++) {
            let $span = $("<span>");
            $span.text(entry.stars[i]);
            const star = stars.find(d => d.name === entry.stars[i]);
            if (star) {
                $span.addClass(CLICKABLE);
            }
            if (!$div.is(":empty")) {
                $div.append(", ");
            }
            $div.append($span);
        }
        columns.push($div);
    }
    else {
        headers = ["Alive", "Films (" + entry.films.length + ")"];
        let lived = (entry.lived || "");
        columns.push(lived);
        let $div = $("<div>");
        for (let i = 0; i < entry.films.length; i++) {
            let cls = (i % 2) === 0 ? "even" : "odd";
            let $span = $("<span>");
            $span.addClass(cls);
            const film = films.find(d => d.name === entry.films[i]);
            if (film) {
                $span.addClass(CLICKABLE);
            }
            $span.text(entry.films[i]);
            if (!$div.is(":empty")) {
                $div.append(", ");
            }
            $div.append($span);
        }
        columns.push($div);
    }
    
    headers.forEach(header => {
        $headerRow.append($("<th>").text(header));
    });
    $thead.append($headerRow);
    $table.append($thead);
    const $row = $("<tr>");
    for (let i = 0; i < columns.length; i++) {
        $row.append($("<td>").html(columns[i]));
    }
    $tbody.append($row);
    $table.append($tbody);
    $infoTbl.empty();
    $infoTbl.append($table);

    if (entry.photo) {
        const $img = $("<img>").attr("src", entry.photo);
        $infoTbl.append($img);
    }

    document.title = entry.name;
}

function hover($this) {
    if (hasFocus) {
        const name = $this.find("td").text();
        $('tbody tr').removeClass(HIGHLIGHT);
        $this.addClass(HIGHLIGHT);
        const entry = selType.find(item => item.name === name);
        initInfoTable(entry);
    }
}

function clearHover() {
    $('tbody tr').removeClass(HIGHLIGHT);
    $(INFO_TBL).empty();
}