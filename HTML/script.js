/* CONFIG */
const CONFIG = {
    serverName: "Femboy Paradise",
    logoImage: "logo.png",
    backgroundVideo: "bg.mp4",
    audio: { enabled:true, file:"music.mp3", volume:0.25 },
    discord: { text:"Join our Discord for help and community:", link:"https://discord.gg/unsaFsgc3C" },
    rules: [
        "No cheating, hacking, or exploiting bugs",
        "Respect all players and staff members",
        "No RDM (Random Deathmatch) or VDM (Vehicle Deathmatch)",
        "Stay in character and roleplay realistically",
        "Use proper in-game voice chat and text chat etiquette",
        "No offensive, racist, sexist, or discriminatory language",
        "Do not spawn or abuse vehicles, weapons, or props",
        "No mic spamming or disruptive behavior",
        "Follow all server-specific roleplay guidelines",
        "No sharing or asking for personal information",
        "No advertising or promoting other servers or websites",
        "Report rule-breakers to staff instead of taking matters into your own hands",
        "No griefing, trolling, or intentional harassment",
        "Respect the roleplay environment and avoid metagaming",
        "No revenge killing or revenge arrest",
        "Use common sense and follow the server's rules at all times"
    ],
    updates:["None"],
    tutorialSlides:["Welcome to the Femboy Paradise!"]
};

/* INIT GUI */
let box = document.getElementById("box");
let logo = document.getElementById("logo");
let bg = document.getElementById("bgVideo");
let audio = document.getElementById("bgMusic");
let audioControl = document.getElementById("audioControl");

document.getElementById("title").innerText = "Welcome to " + CONFIG.serverName;
if(CONFIG.logoImage){ logo.src = CONFIG.logoImage; logo.style.display="block"; }
if(CONFIG.backgroundVideo){ bg.src = CONFIG.backgroundVideo; bg.play().catch(()=>{}); }
if(CONFIG.audio.enabled){ audio.src=CONFIG.audio.file; audio.volume=CONFIG.audio.volume; audio.play().catch(()=>{}); audioControl.innerText="🔊 Toggle Music"; } else { audioControl.style.display="none"; }
document.getElementById("discordText").innerText = CONFIG.discord.text;
document.getElementById("discordLink").innerText = CONFIG.discord.link;
document.getElementById("discordLink").href = CONFIG.discord.link;

CONFIG.rules.forEach(r=>{ let li=document.createElement("li"); li.innerText=r; document.getElementById("rulesList").appendChild(li); });
CONFIG.updates.forEach(u=>{ let li=document.createElement("li"); li.innerText=u; document.getElementById("updatesList").appendChild(li); });
CONFIG.tutorialSlides.forEach((s,i)=>{ let div=document.createElement("div"); div.className="slide"; if(i===0) div.classList.add("active"); div.innerText=s; document.getElementById("slides").appendChild(div); });

let index=0;
function show(i){ let slides=document.getElementsByClassName("slide"); for(let s of slides)s.classList.remove("active"); slides[i].classList.add("active"); }
function next(){ let slides=document.getElementsByClassName("slide"); index++; if(index>=slides.length) index=0; show(index);}
function prev(){ let slides=document.getElementsByClassName("slide"); index--; if(index<0) index=slides.length-1; show(index);}
function toggleAudio(){ if(audio.paused) audio.play(); else audio.pause(); }

/* NUI events for FiveM */
window.addEventListener('message', function(event){
    let data = event.data;
    if(data.action=="show"){ box.classList.add("visible"); }
    if(data.action=="hide"){ box.classList.remove("visible"); }
});

/* Enter Server button */
document.getElementById("enter").addEventListener("click", ()=>{
    fetch(`https://${GetParentResourceName()}/enter`, { method: 'POST', body: null });
    box.classList.remove("visible");
});