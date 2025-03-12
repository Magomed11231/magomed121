// ==UserScript==
// @name         INTANT
// @version      0.1
// @description  Intant Client
// @author       wrsshx & kaktakto
// @license      MIT
// @match        https://starblast.io/
// @run-at       document-start
// @grant        none
// ==/UserScript==

const log = (msg) => console.log(`%c[Intant] ${msg}`, "color: #9A00C0");
const modlog = (msg) => console.log(`%c[Mod] ${msg}`, "color: #9A00C0");
const stylelog = (msg) => console.log(`%c[Style] ${msg}`, "color: #9A00C0");
const updtaelog = (msg) =>
    console.log(`%c[Intant] ${msg}`, "color: #00ff00");
const updatelog = (msg) =>
    console.log(`%c[Intant] ${msg}`, "color: #ff0000");
var starSRC;
console.clear();
log(`Started`);

function gay() {
    if (window.location.pathname !== "/") {
        log(`Injection not needed`);
        return;
    }
    var url = "https://raw.githubusercontent.com/Kentuccky/magomed/refs/heads/main/Kenns";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            starSRC = data;
            if (starSRC !== undefined) {
                log(`Src fetched successfully`);
            }

            if (localStorage.getItem("gemindeed") === null) {
                localStorage.setItem("gemindeed", "#ff0000");
            }

            if (localStorage.getItem("gemindeed1") === null) {
                localStorage.setItem("gemindeed1", "#ff0000");
            }
            const start_time = performance.now();

            log("Loading Mods...");

            //Badges
            const localStorageKey = "badgergers";
            const localStorageData = localStorage.getItem(localStorageKey);

            if (!localStorageData) {
                console.warn(
                    `Local storage key "${localStorageKey}" not found or empty. Nothing will be loaded.`
                );
            } else {
                const badgegersData = JSON.parse(localStorageData);

                if (Array.isArray(badgegersData) && badgegersData.length > 0) {
                    const newCaseTemplate = `case "{name}": this.icon = "{url}"; break;`;
                    let newCases = "";
                    let newBadges = "";

                    badgegersData.forEach(({
                                               name,
                                               url
                                           }) => {
                        const sanitizedCaseName = name.replace(/\s/g, "");
                        newCases += newCaseTemplate
                            .replace("{name}", sanitizedCaseName)
                            .replace("{url}", url);
                        newBadges += `"${sanitizedCaseName}":"${name}",`;
                    });

                    const seasonalIndex = starSRC.indexOf('case"seasonal":');
                    if (seasonalIndex !== -1) {
                        starSRC =
                            starSRC.slice(0, seasonalIndex) +
                            newCases +
                            starSRC.slice(seasonalIndex);
                    }

                    const blankIndex = starSRC.indexOf('blank:"Blank"');
                    if (blankIndex !== -1) {
                        newBadges = newBadges.replace(/,\s*$/, "");
                        starSRC =
                            starSRC.slice(0, blankIndex + 'blank:"Blank"'.length) +
                            "," +
                            newBadges +
                            starSRC.slice(blankIndex + 'blank:"Blank"'.length);
                    }
                }
            }
            modlog("Badges added");
            const lowNameCase = localStorage.getItem("lownamecase");
            const timDel = localStorage.getItem("timdel");
            const leaderunde = localStorage.getItem("leaderunde");
            const get = localStorage.getItem("emopacity");
            const gemslol = localStorage.getItem("gemindeed");
            const gemslol1 = localStorage.getItem("gemindeed1");
            const blurdes = localStorage.getItem("blurdes");
            const stationisten = localStorage.getItem("stationisten");
            const weaponisten = localStorage.getItem("weaponisten");
            const goodles = localStorage.getItem("goodles");
            const rabasom = localStorage.getItem("rabasom");
            const ass = localStorage.getItem("ass");
            const faborn = localStorage.getItem("faborn");
            const webonore = localStorage.getItem("webonore");
            const beambock = localStorage.getItem("beambock");
            const agugg = localStorage.getItem("agugg");
            const abugg = localStorage.getItem("abugg");
            //main settings
            let ТестClientScript = document.createElement('script');
            ТестClientScript.textContent = `
            class Тестclient {
                guidetect() {
                    return "im here!";
                }
                Тестer() {
    if (window.Тестer == true) {
      window.Тестer = false;
      console.log("Тестer Simulator disabled");
    } else {
      window.Тестer = true;
      if (Object.values(Object.values(window.module.exports.settings).find(_0x568bd9 => _0x568bd9.mode)).find(_0x218be2 => _0x218be2.status).status.shield != 0 && Object.values(Object.values(window.module.exports.settings).find(_0x4e3e9e => _0x4e3e9e.mode)).find(_0x3a15de => _0x3a15de.status).status.generator != 0) {
        var number = 0;
        var objval = Object.values(Object.values(window.module.exports.settings).find(_0x4ae68f => _0x4ae68f.mode)).find(_0x3cbdf0 => _0x3cbdf0.socket).socket;
        console.log("Тестer Simulator enabled");
        function onnoff() {
          function sayemote(_0x5dfe35) {
            var saythng = {
              name: "say",
              data: _0x5dfe35
            };
            objval.send(JSON.stringify(saythng));
          }
          var onofffunc = false;
          if (onofffunc == false && number == 0) {
            number = 1;
            sayemote("HDKSQ");
            onofffunc = true;
          }
          if (onofffunc == false && number == 1) {
            sayemote("HDKSQ");
            number = 2;
            onofffunc = true;
          }
          if (onofffunc == false && number == 2) {
            sayemote("HDKSQ");
            number = 3;
            onofffunc = true;
          }
          if (onofffunc == false && number == 3) {
            sayemote("HDKSQ");
            number = 4;
            onofffunc = true;
          }
          if (onofffunc == false && number == 4) {
            sayemote("HDKSQ");
            number = 0;
            onofffunc = true;
          }
          if (window.Тестer == true) {
            setTimeout(onnoff, 600);
          }
        }
        onnoff();
      }
    }
  }

  blank() {
    if (window.blank == true) {
      window.blank = false;
      console.log("Тестer Simulator disabled");
    } else {
      window.blank = true;
      if (Object.values(Object.values(window.module.exports.settings).find(_0x568bd9 => _0x568bd9.mode)).find(_0x218be2 => _0x218be2.status).status.shield != 0 && Object.values(Object.values(window.module.exports.settings).find(_0x4e3e9e => _0x4e3e9e.mode)).find(_0x3a15de => _0x3a15de.status).status.generator != 0) {
        var number = 0;
        var objval = Object.values(Object.values(window.module.exports.settings).find(_0x4ae68f => _0x4ae68f.mode)).find(_0x3cbdf0 => _0x3cbdf0.socket).socket;
        console.log("Blank Simulator enabled");
        function onnoff() {
          function sayemote(_0x5dfe35) {
            var saythng = {
              name: "say",
              data: _0x5dfe35
            };
            objval.send(JSON.stringify(saythng));
          }
          var onofffunc = false;
          if (onofffunc == false && number == 0) {
            number = 1;
            sayemote("ooooo");
            onofffunc = true;
          }
          if (onofffunc == false && number == 1) {
            sayemote("ooooo");
            number = 2;
            onofffunc = true;
          }
          if (onofffunc == false && number == 2) {
            sayemote("ooooo");
            number = 3;
            onofffunc = true;
          }
          if (onofffunc == false && number == 3) {
            sayemote("ooooo");
            number = 4;
            onofffunc = true;
          }
          if (onofffunc == false && number == 4) {
            sayemote("ooooo");
            number = 0;
            onofffunc = true;
          }
          if (window.blank == true) {
            setTimeout(onnoff, 600);
          }
        }
        onnoff();
      }
    }
  }


fovzoom() {
let инд, мсф = [];
document.body.addEventListener("wheel", function(event) {
    event.preventDefault();
    if ("welcome" == Object.values(window.module.exports.settings).find(e => e && e.mode).mode.id) return;
    let хрзн;
    if (event.deltaY < 1) {
        хрзн = -5;
    } else if (event.deltaY > 1) {
        хрзн = 5;
    }

    мсф.push(хрзн);

    (function smoothScroll() {
        if (0 === мсф.length || инд) return;
        let t = Object.values(Object.values(Object.values(window.module.exports.settings).find(e => e && e.mode)).find(e => e && e.seed)).find(e => e && e.fov);
        let n = t.position.z,
            новз = n + мсф.shift(),
            скр = (новз - n) / 12;
        инд = setInterval(() => {
            1 >= Math.abs(n - новз) || n === новз ? (t.translateZ(новз - n), clearInterval(инд), инд = null, smoothScroll()) : (n += скр, t.translateZ(скр));
        }, 1);
    })();
});
}

            }
            const agugg = localStorage.getItem("agugg");
            if (agugg) {
            class foo{bar(){let x = Object.values(window.module.exports.settings).find(v => v.mode); let y = Object.values(x).find(v => v.socket).socket; y.send(JSON.stringify({name: "say",data: "${agugg}"}));};};
            window.gg = new foo()
            }
            var Тестcl = new Тестclient();
            window.Тестcl = Тестcl;
            `;
            document.body.appendChild(ТестClientScript);
            starSRC = starSRC.replace(/this\.hue,\.5,1/g, 'this.hue,1,1');
            starSRC = starSRC.replace(/this\.hue,\.5,.5/g, 'this.hue,1,1');
            starSRC = starSRC.replace(/"fullcolor"===this\.custom\.finish&&(this\.custom\.finish="alloy"),/, "");
            starSRC = starSRC.replace(`w === this.OOlOI.IIO0O.status.id && (this.OOlOI.IIO0O.status.kills++, S = this.OOlOI.names.get(U)`, `w === this.OOlOI.IIO0O.status.id && (this.OOlOI.IIO0O.status.kills++, gg.bar(), S = this.OOlOI.names.get(U)`);

            if (weaponisten === "true") {
                let script = document.createElement("script");
                script.src =
                    "https://cdn.jsdelivr.net/gh/officialТестer/starblast-things/weaponmodels.user.js";
                document.body.appendChild(script);
                modlog(`Custom Weapons added`);
            }

            if (abugg === "true") {
                starSRC = starSRC.replace(`w === this.OOlOI.IIO0O.status.id && (this.OOlOI.IIO0O.status.kills++, S = this.OOlOI.names.get(U)`, `w === this.OOlOI.IIO0O.status.id && (this.OOlOI.IIO0O.status.kills++, gg.bar(), S = this.OOlOI.names.get(U)`);
                console.log(`soso`);
            }

            if (stationisten === "true") {
                let sbibt = document.createElement("script");
                sbibt.src =
                    "";
                document.body.appendChild(sbibt);
                modlog(`Custom Bases Ye!`);
            }

            if (get) {
                starSRC = starSRC.replace(/>=\s*4/, `>= ${get}`);
                modlog(get + " Emotes Ye!");
            }

            if (gemslol) {
                starSRC = starSRC.replace(/16711680/g, `"${gemslol}"`);
                starSRC = starSRC.replace(/specular:16744576/g, `specular:"${gemslol1}"`);
                modlog("Crystal Color Ye!");
            }

            if (lowNameCase === "true") {
                starSRC = starSRC.replace(/\.toUpperCase\(\)/g, "");
                starSRC = starSRC.replace(/text-transform:uppercase;/gim, "");
                modlog(`Lowercase Ye!`);
            }

            if (timDel === "true") {
                starSRC = starSRC.replace(
                    /<\/span>\s*\(<span id="menucountdown"><\/span>\)/, ""
                );
                starSRC = starSRC.replace(
                    /e\.prototype\.countdown=function\(\)\{[^}]*\},/, ""
                );
                modlog(`Timer Ye!`);
            }

            if (leaderunde === "true") {
                starSRC = starSRC.replace(
                    /this\.[iI10OlL]{3,6}\.mode\.radar_shows_leader/g, "1"
                );
                modlog(`Leader Ye!`);
            }

            if (rabasom === "true") {
                starSRC = starSRC.replace(/this\.radar_zoom = ([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g, 'this.radar_zoom = 1');
                modlog('Radar Ye!');
            }

            if (ass === "true") {
                starSRC = starSRC.replace(/requestAnimationFrame\(function\((.*?)\){return function\(\){return t\.([iI10OlL]{3,6})\(\)}}\(this\)\),this\.([iI10OlL]{3,6})\.paused\)/, "setTimeout(function($1){return function(){return $1.$2()}}(this), 0),this.$3.paused)");
                modlog('Fps Ye!');
            }

            if (beambock === "true") {
                starSRC = starSRC.replace(/\s*&&\s*this\.team\.open/g, '');
                modlog('Teams Ye!');
            }

            if (faborn === "true") {
                starSRC = starSRC.replace(/respawn_delay=([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g, 'respawn_delay=1');
                starSRC = starSRC.replace(/<span id="menucountdown"><\/span>\s*\(<span id="menucountdown"><\/span>\)\s*/, '');
                modlog('Fast Repair Ye!');
            }

            if (webonore === "true") {
                starSRC = starSRC.replace(/!this\.[iI10OlL]{3,6}\.mode\.restricted_weapons_store/g, "1");
                modlog('Weapon Store Ye!');
            }

            var regex = /var\s+x\s*=\s*document\.querySelector\(".training"\),/;
            starSRC = starSRC.replace(regex, "");
            modlog(`Logo replaced`);
            const end_time = performance.now();
            log(`Loaded Mods successfully (${(end_time - start_time).toFixed(0)}ms)`);
            document.open();
            document.write(starSRC);
            document.close();
            log("Document loaded");
            setTimeout(() => {
                stylelog("Loading Style");
                document.getElementById("training").style.display = "none";

                if (blurdes === "true") {
                    var overlay = document.querySelector("#overlay");
                    var div = document.createElement("div");
                    div.id = "blur";
                    div.style.position = "absolute";
                    div.style.top = "0";
                    div.style.left = "0";
                    div.style.width = "100%";
                    div.style.height = "100%";
                    div.style.background = "hsla(273, 80%, 80%, .3)";
                    div.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
                    div.style.backdropFilter = "blur(5px)";
                    div.style.webkitBackdropFilter = "blur(5px)";
                    div.style.pointerEvents = "none";
                    div.style.zIndex = "0";
                    overlay.insertBefore(div, overlay.firstChild);
                    overlay.style.zIndex = "1";
                    stylelog(`Blur added`);
                }
                if (window.location.pathname == "/") {
                    if (window.location.pathname == "/") {
                        function l(m) {
                            var q = document.getElementsByTagName("head")[0x0];
                            var r = document.createElement("style");
                            r.setAttribute('id', "customtheme");
                            r.type = "text/css";
                            r.appendChild(document.createTextNode(m));
                            q.appendChild(r);
                        }
                        document.body.insertAdjacentHTML("beforeend", "<div class=\"menu\">\n                          <i style=\"padding-left:50px;user-select: none;\">INTANT</i>\n                          <div class=\"settings\">\n                                                                     <input id=\"clickMe\" type=\"button\" value=\"Zoomhack\" onclick=\"('Blank emoji'); Тестcl.fovzoom();\" />\n                                          </div>\n                        </div>");
                        l(".menu:not(:hover) .settings{display: none;} .menu:hover .settings{display: fixed; padding:10px;} .menu{position: fixed; top: 1%; left: 95%; transform: translateX(-50%); z-index: 100000000; width: 160px; height: 20px; background: linear-gradient(135deg, #1a237e 5%, #8e44ad 95%); webkit-transition: .3s ease; transition: .3s ease; border-radius: 0px;} .menu:hover{background-color: hsla(273, 80%, 80%, .3); width: 160px; height: 60px;}"); document.body.insertAdjacentHTML("beforeend", `
    <div class="menu">
        <i style="padding-left:50px;user-select: none; color: white;">INTANT</i>
        <div class="settings">

            <input id="clickMe" type="button" value="Zoomhack" onclick="('Blank emoji'); Тестcl.fovzoom();" />
        </div>
    </div>
`);
                    }
                }
                const plaything = document.querySelector("#play");
                const moddingthing = document.querySelectorAll(".mod");

                const onGameStart = () => {
                    document.getElementById("blur").style.display = "none";
                    plaything.removeEventListener("click", onGameStart);
                };

                plaything.addEventListener("click", onGameStart);
                console.log("Settings loaded");

                var socialDie1 = document.querySelector(".bottom-left .changelog-new div");
                if (socialDie1) {
                    while (socialDie1.firstChild) {
                        socialDie1.removeChild(socialDie1.firstChild);
                    }
                    var loveIcon = document.createElement("i");
                    loveIcon.className = "sbg sbg-menu";
                    socialDie1.appendChild(loveIcon);
                    loveIcon.style.position = "relative";
                    loveIcon.style.top="50%"; // Изменено на '50%'
                    loveIcon.style.left="50%"; // Изменено на '50%'
                    loveIcon.style.transform = "translate(-50%, -0%)"; // Добавлено для центрирования
                    loveIcon.style.zIndex = "10000";
                    loveIcon.style.width = "359px";
                    loveIcon.style.height = "50px";
                    loveIcon.style.display = "flex";
                    loveIcon.style.justifyContent = "center";
                    loveIcon.style.alignItems = "center";
                    loveIcon.style.fontSize = "30px"; // Добавлено: размер шрифта
                    loveIcon.style.lineHeight = "30px"; // Добавлено: высота строки
                    var settingstab = null;
                    loveIcon.addEventListener("mousedown", function (e) {
                        if (settingstab) {
                            console.log("Settings closed");
                            settingstab.remove();
                            settingstab = null;
                            // Удаление всех дочерних элементов из socialDie1
                            while (socialDie1.firstChild) {
                                socialDie1.removeChild(socialDie1.firstChild);
                            }
                            // Добавление loveIcon обратно в socialDie1 после удаления всех дочерних элементов
                            socialDie1.appendChild(loveIcon);
                        } else {
                            console.log("Settings opened");
                            settingstab = document.createElement("div");
                            settingstab.id = "settings-manager";
                            settingstab.style.position = "absolute";
                            settingstab.style.backdropFilter = "blur(5px)";
                            const styleElement = document.createElement("style");
                            document.head.appendChild(styleElement);
                            socialDie1.appendChild(settingstab);
                            let offsetX, offsetY, isDragging = false;
                            settingstab.addEventListener("mousedown", function (e) {
                                const target = e.target;
                                if (target.tagName !== "INPUT" && target.tagName !== "BUTTON" && target.type !== "color" && target.type !== "range" && target.type !== "checkbox") {
                                    isDragging = true;
                                    offsetX = e.clientX - (settingstab.getBoundingClientRect().left + settingstab.offsetWidth / 2);
                                    offsetY = e.clientY - (settingstab.getBoundingClientRect().top + settingstab.offsetHeight / 2);
                                }
                            });
                            document.addEventListener("mousemove", function (e) {
                                if (!isDragging) return;
                                const x = e.clientX - offsetX;
                                const y = e.clientY - offsetY;
                                settingstab.style.left = `${x}px`;
                                settingstab.style.top = `${y}px`;
                            });
                            document.addEventListener("mouseup", function () {
                                isDragging = false;
                            });
                            //close button
                            var closeButtonTopRight1 = document.createElement("button");
                            closeButtonTopRight1.textContent = "X";
                            closeButtonTopRight1.style.position = "absolute";
                            closeButtonTopRight1.style.top = "10px";
                            closeButtonTopRight1.style.right = "10px";
                            closeButtonTopRight1.style.userSelect = "none";
                            closeButtonTopRight1.addEventListener("click", function (event) {
                                event.stopPropagation();
                                settingstab.remove();
                                settingstab = null;
                            });
                            settingstab.appendChild(closeButtonTopRight1);
                            //header
                            var header = document.createElement("h2");
                            header.style.userSelect = "none";
                            header.style.pointerEvents = "none";
                            settingstab.appendChild(header);

                            //Lowercase Name
                            var lwerlol = document.createElement("input");
                            lwerlol.type = "checkbox";
                            lwerlol.id = "lowercaseName";
                            var lowerlol = document.createElement("label");
                            lowerlol.htmlFor = "lowercaseName";
                            lowerlol.appendChild(document.createTextNode("Lowercase Name"));
                            lowerlol.style.userSelect = "none";
                            lowerlol.style.pointerEvents = "none";
                            //Uncover Leader
                            var checkleader = document.createElement("input");
                            checkleader.type = "checkbox";
                            checkleader.id = "uncoverLeader";
                            var label1 = document.createElement("label");
                            label1.htmlFor = "uncoverLeader";
                            label1.appendChild(document.createTextNode("Uncover Leader"));
                            label1.style.userSelect = "none";
                            label1.style.pointerEvents = "none";
                            var br1 = document.createElement("br");
                            br1.style.userSelect = "none";
                            br1.style.pointerEvents = "none";
                            //Radar Zoom
                            var babardo = document.createElement("input");
                            babardo.type = "checkbox";
                            babardo.id = "radarzoom";
                            var babadom = document.createElement("label");
                            babadom.htmlFor = "radarzoom";
                            babadom.appendChild(document.createTextNode("Radar Zoom"));
                            babadom.style.userSelect = "none";
                            babadom.style.pointerEvents = "none";
                            //фпс
                            var фафас = document.createElement("input");
                            фафас.type = "checkbox";
                            фафас.id = "fpsanlock";
                            var рейк = document.createElement("label");
                            рейк.htmlFor = "fpsanlock";
                            рейк.appendChild(document.createTextNode("Fps Anlock"));
                            рейк.style.userSelect = "none";
                            рейк.style.pointerEvents = "none";
                            //Fast Respawn
                            var bapaw = document.createElement("input");
                            bapaw.type = "checkbox";
                            bapaw.id = "fastspawm";
                            var barbas = document.createElement("label");
                            barbas.htmlFor = "fastspawm";
                            barbas.appendChild(document.createTextNode("Fast Respawn"));
                            barbas.style.userSelect = "none";
                            barbas.style.pointerEvents = "none";
                            //Weapon Store
                            var bored = document.createElement("input");
                            bored.type = "checkbox";
                            bored.id = "weaponstore";
                            var boredto = document.createElement("label");
                            boredto.htmlFor = "weaponstore";
                            boredto.appendChild(document.createTextNode("Weapon Store"));
                            boredto.style.userSelect = "none";
                            boredto.style.pointerEvents = "none";
                            //Bypass Teamlock
                            var eabock = document.createElement("input");
                            eabock.type = "checkbox";
                            eabock.id = "teamlock";
                            var eamlock = document.createElement("label");
                            eamlock.htmlFor = "teamlock";
                            eamlock.appendChild(document.createTextNode("Bypass Teamlock"));
                            eamlock.style.userSelect = "none";
                            eamlock.style.pointerEvents = "none";
                            //Blur Option
                            var blurlol = document.createElement("input");
                            blurlol.type = "checkbox";
                            blurlol.id = "blurlol";
                            var brurwha = document.createElement("label");
                            brurwha.htmlFor = "blurlol";
                            brurwha.appendChild(document.createTextNode("Blur"));
                            brurwha.style.userSelect = "none";
                            brurwha.style.pointerEvents = "none";
                            //Remove Timer
                            var bebotmber = document.createElement("input");
                            bebotmber.type = "checkbox";
                            bebotmber.id = "removeTimer";
                            var label3 = document.createElement("label");
                            label3.htmlFor = "removeTimer";
                            label3.appendChild(document.createTextNode("Remove Timer"));
                            label3.style.userSelect = "none";
                            label3.style.pointerEvents = "none";
                            //Custom Station Modules
                            var molds = document.createElement("input");
                            molds.type = "checkbox";
                            molds.id = "stationists";
                            var modls = document.createElement("label");
                            modls.htmlFor = "stationists";
                            modls.appendChild(document.createTextNode("Custom Station Modules"));
                            modls.style.userSelect = "none";
                            modls.style.pointerEvents = "none";
                            //Custom Weapon Modules
                            var morlds = document.createElement("input");
                            morlds.type = "checkbox";
                            morlds.id = "weaponists";
                            var mordls = document.createElement("label");
                            mordls.htmlFor = "weaponists";
                            mordls.appendChild(document.createTextNode("Custom Weapon Modules"));
                            mordls.style.userSelect = "none";
                            mordls.style.pointerEvents = "none";
                            //Blank Badges
                            var ankages = document.createElement("input");
                            ankages.type = "checkbox";
                            ankages.id = "blankbadge";
                            var anges = document.createElement("label");
                            anges.htmlFor = "blankbadge";
                            anges.appendChild(document.createTextNode("Blank Badges"));
                            anges.style.userSelect = "none";
                            anges.style.pointerEvents = "none";
                            //Emotes
                            var ebot = document.createElement("label");
                            ebot.htmlFor = "emoteCapacity";
                            ebot.classList.add("emote-label");
                            ebot.style.userSelect = "none";
                            ebot.style.pointerEvents = "none";
                            ebot.htmlFor = "emoteCapacity";
                            ebot.appendChild(document.createTextNode("Emote Capacity:"));
                            var ebote = document.createElement("span");
                            ebote.id = "emoteCapacityValue";
                            ebote.classList.add("emote-value");
                            ebote.appendChild(document.createTextNode("1"));
                            ebote.style.userSelect = "none";
                            ebote.style.pointerEvents = "none";
                            var eboti = document.createElement("input");
                            eboti.type = "range";
                            eboti.id = "emoteCapacity";
                            eboti.min = "1";
                            eboti.max = "5";
                            eboti.classList.add("emote-slider");
                            //Auto GG
                            var avogg = document.createElement("input");
                            avogg.type = "checkbox";
                            avogg.id = "autogg1";
                            var abogg = document.createElement("input");
                            abogg.type = "text";
                            abogg.maxLength = 5;
                            abogg.id = "autogg";
                            abogg.placeholder = "(max 5 characters)";
                            var anogg = document.createElement("label");
                            anogg.htmlFor = "autogg";
                            anogg.appendChild(document.createTextNode("Auto GG Msg:"));
                            anogg.style.userSelect = "none";
                            anogg.style.pointerEvents = "none";
                            //Gem Color
                            var gemus = document.createElement("label");
                            gemus.htmlFor = "gemColor";
                            gemus.classList.add("color-label");
                            gemus.style.userSelect = "none";
                            gemus.style.pointerEvents = "none";
                            gemus.appendChild(document.createTextNode("Gem Color:"));
                            var gembus = document.createElement("input");
                            gembus.type = "color";
                            gembus.id = "gemColor";
                            gembus.classList.add("color-input");
                            //Gem Color 2
                            var gemobus = document.createElement("label");
                            gemobus.htmlFor = "gemColor1";
                            gemobus.classList.add("color-label");
                            gemobus.style.userSelect = "none";
                            gemobus.style.pointerEvents = "none";
                            gemobus.appendChild(document.createTextNode("Gem Color 2:"));
                            var gembomus = document.createElement("input");
                            gembomus.type = "color";
                            gembomus.id = "gemColor1";
                            gembomus.classList.add("color-input");
                            //apply button
                            var applythng = document.createElement("button");
                            applythng.id = "applyChangesBtn";
                            applythng.innerHTML = "Apply";
                            applythng.style.padding = "6px 10px";
                            applythng.style.fontSize = "1em";
                            applythng.style.cursor = "pointer";
                            applythng.style.margin = "20px 0";
                            applythng.style.textAlign = "center";
                            applythng.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
                            applythng.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.2)";
                            applythng.style.color = "#fff";
                            applythng.style.backgroundColor = "#007BFF";  // Изменение цвета кнопки
                            applythng.style.fontFamily = "Arial, sans-serif";
                            applythng.style.border = "none";
                            applythng.style.borderRadius = "5px";

                            //apply things to the Settings Menu
                            socialDie1.appendChild(lwerlol);
                            socialDie1.appendChild(lowerlol);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(molds);
                            socialDie1.appendChild(modls);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(morlds);
                            socialDie1.appendChild(mordls);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(ankages);
                            socialDie1.appendChild(anges);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(checkleader);
                            socialDie1.appendChild(label1);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(babardo);
                            socialDie1.appendChild(babadom);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(фафас);
                            socialDie1.appendChild(рейк);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(bapaw);
                            socialDie1.appendChild(barbas);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(bored);
                            socialDie1.appendChild(boredto);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(eabock);
                            socialDie1.appendChild(eamlock);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(blurlol);
                            socialDie1.appendChild(brurwha);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(bebotmber);
                            socialDie1.appendChild(label3);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(avogg);
                            socialDie1.appendChild(anogg);
                            socialDie1.appendChild(abogg);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(ebot);
                            socialDie1.appendChild(ebote);
                            socialDie1.appendChild(eboti);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(gemus);
                            socialDie1.appendChild(gembus);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(gemobus);
                            socialDie1.appendChild(gembomus);
                            socialDie1.appendChild(br1.cloneNode());
                            socialDie1.appendChild(applythng);
                            //apply Settings Menu to game
                            document.body.appendChild(settingstab);
                            settingstab.style.display = "block";
                            setTimeout(function () { // Добавлено для анимации
                                settingstab.style.transform = "translate(-50%, -50%) scale(1)";
                            }, 100);
                            loadSettings();
                            attachEventListeners();
                        }
                    });
                }

                function attachEventListeners() {
                    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
                    checkboxes.forEach(function (checkbox) {
                        checkbox.addEventListener("change", function () {
                            saveSetting(checkbox.id, checkbox.checked);
                        });
                    });

                    var rangeInput = document.getElementById("emoteCapacity");
                    if (rangeInput) {
                        rangeInput.addEventListener("input", function () {
                            saveSetting("emoteCapacity", Number(rangeInput.value));
                            document.getElementById("emoteCapacityValue").textContent =
                                rangeInput.value;
                        });
                        rangeInput.value = getSettingValue("emoteCapacity");
                        document.getElementById("emoteCapacityValue").textContent =
                            rangeInput.value;
                    }

                    var colorInput = document.getElementById("gemColor");
                    if (colorInput) {
                        colorInput.addEventListener("input", function () {
                            saveSetting("gemColor", colorInput.value);
                        });
                        colorInput.value = getSettingValue("gemColor");
                    }
                    var colorInput2 = document.getElementById("gemColor1");
                    if (colorInput2) {
                        colorInput2.addEventListener("input", function () {
                            saveSetting("gemColor1", colorInput2.value);
                        });
                        colorInput2.value = getSettingValue("gemColor1");
                    }

                    var autoggInput = document.getElementById("autogg");
                    if (autoggInput) {
                        autoggInput.addEventListener("input", function () {
                            saveSetting("autogg", autoggInput.value);
                        });
                        autoggInput.value = getSettingValue("autogg");
                    }

                    var applyChangesBtn = document.getElementById("applyChangesBtn");
                    if (applyChangesBtn) {
                        applyChangesBtn.addEventListener("click", function () {
                            saveSetting();
                            location.reload();
                        });
                    }
                }

                function loadSettings() {
                    var settings = [
                        "uncoverLeader"
                        , "removeTimer"
                        , "emoteCapacity"
                        , "gemColor"
                        , "gemColor1"
                        , "lowercaseName"
                        , "blurlol"
                        , "stationists"
                        , "weaponists"
                        , "radarzoom"
                        , "fpsanlock"
                        , "teamlock"
                        , "fastspawm"
                        , "weaponstore"
                        , "blankbadge"
                        , "autogg"
                        , "autogg1"
                        ,];

                    settings.forEach(function (setting) {
                        var key = getKey(setting);
                        var value = localStorage.getItem(key);
                        if (value !== null) {
                            if (setting === "emoteCapacity") {
                                document.getElementById(setting).value = value;
                                document.getElementById("emoteCapacityValue").textContent = value;
                            } else if (setting === "gemColor") {
                                document.getElementById(setting).value = value;
                            } else if (setting === "gemColor1") {
                                document.getElementById(setting).value = value;
                            } else if (setting === "autogg") {
                                document.getElementById(setting).value = value;
                            } else {
                                document.getElementById(setting).checked = JSON.parse(value);
                            }
                        }
                    });
                }

                function saveSetting(setting, value) {
                    var key = getKey(setting);
                    if (setting === "gemColor") {
                        localStorage.setItem(key, value);
                    } else if (setting === "gemColor1") {
                        localStorage.setItem(key, value);
                    } else if (setting === "autogg") {
                        localStorage.setItem(key, value);
                    } else {
                        localStorage.setItem(key, JSON.stringify(value));
                    }
                }

                function getKey(setting) {
                    switch (setting) {
                        case "weaponists":
                            return "weaponisten";
                        case "stationists":
                            return "stationisten";
                        case "blurlol":
                            return "blurdes";
                        case "uncoverLeader":
                            return "leaderunde";
                        case "emoteCapacity":
                            return "emopacity";
                        case "gemColor":
                            return "gemindeed";
                        case "gemColor1":
                            return "gemindeed1";
                        case "lowercaseName":
                            return "lownamecase";
                        case "removeTimer":
                            return "timdel";
                        case "radarzoom":
                            return "rabasom";
                        case "fpsanlock":
                            return "ass";
                        case "teamlock":
                            return "beambock";
                        case "fastspawm":
                            return "faborn";
                        case "weaponstore":
                            return "webonore";
                        case "blankbadge":
                            return "goodles";
                        case "autogg":
                            return "agugg";
                        case "autogg1":
                            return "abugg";
                        default:
                            return setting;
                    }
                }

                function getSettingValue(setting) {
                    var key = getKey(setting);
                    var value = localStorage.getItem(key);

                    if (setting === "emoteCapacity") {
                        if (value === null) {
                            localStorage.setItem(key, 4);
                            return 4;
                        } else {
                            return Number(value);
                        }
                    } else if (setting === "gemColor") {
                        return value || "#ff0000";
                    } else if (setting === "gemColor1") {
                        return value || "#ff0000";
                    } else if (setting === "autogg") {
                        return value || "G";
                    }

                    return value ? JSON.parse(value) : false;
                }


                function validateUrl(url) {
                    var regex = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
                    return regex.test(url);
                }

                (function () {
                    window.addEventListener('load', function () {
                        var svg = `<svg viewBox="0 0 500 500">
                            <defs>
                                <path id="curve1" fill="transparent" d="m 250 260 m -300 0 a 300 100 0 1 1 600 0" /> <!--m 250 250 m -300 0 a 300 100 0 1 1 0 1-->
                                <path id="curve2" fill="transparent" d="m 250 250 m -75 0 a 75 25 0 1 1 0 0.0001" />
                            </defs>
                            <text id="text1" width="500">
                                <textPath alignment-baseline="top" xlink:href="#curve1" side="left">
                                    <animate attributeType="XML" attributeName="startOffset" from="-100%" to="130%" dur="2min" repeatCount="indefinite"/>
                                </textPath>
                            </text>
                            <text id="text2" width="500" style="font-size: 10px;">
                                <textPath alignment-baseline="top" xlink:href="#curve2" side="left">

                                    <animate attributeType="XML" attributeName="startOffset" from="-100%" to="130%" dur="2min" repeatCount="indefinite"/>
                                </textPath>
                            </text>
                            <filter id="outline1">
                                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="dilated"/>
                                <feFlood flood-color="red"/>
                                <feComposite in2="dilated" operator="in" result="outline"/>
                                <feMerge>
                                    <feMergeNode in="outline"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <filter id="outline2">
                                <feMorphology in="SourceAlpha" operator="dilate" radius="0.2" result="dilated"/>
                                <feFlood flood-color="red"/>
                                <feComposite in2="dilated" operator="in" result="outline"/>
                                <feMerge>
                                    <feMergeNode in="outline"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <style>
                                text {
                                    font-weight: bold;
                                    color: black;
                                    filter: url(#outline);
                                    pointer-events: none;
                                }
                                #text1 {
                                    font-size: 36px;
                                    filter: url(#outline1);
                                }
                                #text2 {
                                    font-size: 5px;
                                    filter: url(#outline2);
                                }
                            </style>
                        </svg>`;

                        var menu = document.createElement('div');
                        menu.innerHTML = svg;
                        menu.style.position = 'fixed';
                        menu.style.top = '0';
                        menu.style.left = '0';
                        menu.style.width = '100%';
                        menu.style.height = '100%';
                        menu.style.display = 'flex';
                        menu.style.justifyContent = 'center';
                        menu.style.alignItems = 'center';
                        menu.style.backgroundColor = 'transparent';

                        document.body.insertBefore(menu, document.body.firstChild);

                        var playButton = document.getElementById('play');
                        if (playButton) {
                            playButton.addEventListener('click', function () {
                                menu.remove();
                            });
                        }
                    });
                })();

                function saveBadge(name, url) {
                    var badges = JSON.parse(localStorage.getItem('badgergers')) || [];
                    badges.push({
                        "name": name,
                        "url": url
                    });
                    localStorage.setItem('badgergers', JSON.stringify(badges));
                }


                function displayBadge(name, url) {
                    var badge = document.createElement('div');
                    badge.style.display = 'flex';
                    badge.style.alignItems = 'center';
                    badge.style.marginBottom = '10px';

                    var img = document.createElement('img');
                    img.src = url;
                    img.style.width = '64px';
                    img.style.height = '64px';
                    img.style.userSelect = 'none';
                    img.style.pointerEvents = 'none';
                    img.style.borderRadius = '50%';
                    badge.appendChild(img);

                    var badgeName = document.createElement('p');
                    badgeName.innerText = name;
                    badgeName.style.marginLeft = '10px';
                    badgeName.style.userSelect = 'none';
                    badgeName.style.pointerEvents = 'none';
                    badge.appendChild(badgeName);

                    var closeButton = document.createElement('button');
                    closeButton.innerText = 'x';
                    closeButton.style.marginLeft = 'auto';
                    closeButton.style.userSelect = 'none';
                    closeButton.style.userSelect = 'none';
                    closeButton.onclick = function () {
                        badge.remove();
                        location.reload();
                        updateLocalStorage();
                    };
                    badge.appendChild(closeButton);

                    badgeManager.appendChild(badge);
                }

                function updateLocalStorage() {
                    var badges = [];
                    document.querySelectorAll('#badge-manager div').forEach(function (badgeElement) {
                        var name = badgeElement.querySelector('p').innerText;
                        var url = badgeElement.querySelector('img').src;
                        badges.push({
                            "name": name,
                            "url": url
                        });
                    });

                    if (badges.length > 0) {
                        localStorage.setItem('badgergers', JSON.stringify(badges));
                    } else {
                        localStorage.removeItem('badgergers');
                    }
                }



                stylelog(`Css applied`);
                stylelog(`Settings added`);
                stylelog(`Badge Manager added`);
                stylelog("Style loaded successfully");
                log(`Client loaded successfully`);
            }, 30);
            //});
        });
}

setTimeout(gay, 1);
