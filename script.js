
const reelsData = [
    {
        userDp: "https://picsum.photos/id/1011/200",
        userName: "nature_vibes",
        isFollowed: false,
        caption: "Lost in the sound of waves 🌊",
         isSaved:true,
        isLiked: false,
        likeCount: 234,
        commentCount: 12,
        shareCount: 5,
        videoUrl: "./assets/reels/reel1.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1027/200",
        userName: "urban_clicks",
        isFollowed: true,
        caption: "City lights never sleep ✨",
         isSaved:true,
        isLiked: true,
        likeCount: 1200,
        commentCount: 85,
        shareCount: 20,
        videoUrl: "./assets/reels/reel2.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1005/200",
        userName: "travel_buddy",
        isFollowed: false,
        caption: "Another day, another adventure 🗺️",
         isSaved:true,
        isLiked: false,
        likeCount: 980,
        commentCount: 33,
        shareCount: 9,
        videoUrl: "./assets/reels/reel3.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1001/200",
        userName: "coder_life",
        isFollowed: true,
        caption: "Debugging is my cardio 💻",
         isSaved:true,
        isLiked: true,
        likeCount: 670,
        commentCount: 40,
        shareCount: 14,
        videoUrl: "./assets/reels/reel4.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1012/200",
        userName: "fitness_freak",
        isFollowed: false,
        caption: "No excuses, just results 💪",
         isSaved:true,
        isLiked: false,
        likeCount: 450,
        commentCount: 22,
        shareCount: 7,
        videoUrl: "./assets/reels/reel5.mp4"
    },
    {
        userDp: "./assets/spiderMan.jpg",
        userName: "spider_man01",
        isFollowed: true,
        caption: "With Great Powers, Comes Great Responsibilities!!",
        isSaved: true,
        isLiked: true,
        likeCount: 1500,
        commentCount: 120,
        shareCount: 30,
        videoUrl: "./assets/reels/reel6.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1025/200",
        userName: "chef_at_home",
        isFollowed: false,
        caption: "Homemade pasta hits different 🍝",
         isSaved:true,
        isLiked: false,
        likeCount: 320,
        commentCount: 18,
        shareCount: 6,
        videoUrl: "./assets/reels/reel7.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1003/200",
        userName: "artsy_soul",
        isFollowed: true,
        caption: "Colors speak louder than words 🎨",
         isSaved:true,
        isLiked: true,
        likeCount: 890,
        commentCount: 55,
        shareCount: 12,
        videoUrl: "./assets/reels/reel8.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1010/200",
        userName: "car_enthusiast",
        isFollowed: false,
        caption: "Speed is an emotion 🚗💨",
         isSaved:true,
        isLiked: false,
        likeCount: 760,
        commentCount: 34,
        shareCount: 15,
        videoUrl: "./assets/reels/reel9.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1024/200",
        userName: "coffee_addict",
        isFollowed: true,
        caption: "Powered by caffeine ☕🔥",
        isSaved: false,
        isLiked: false,
        likeCount: 1340,
        commentCount: 60,
        shareCount: 22,
        videoUrl: "./assets/reels/reel10.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1024/200",
        userName: "rockstarrr",
        isFollowed: false,
        caption: "Powered by caffeine ☕🔥",
        isSaved: true,
        isLiked: true,
        likeCount: 1340,
        commentCount: 60,
        shareCount: 22,
        videoUrl: "./assets/reels/reel11.mp4"
    },
    {
        userDp: "https://picsum.photos/id/1024/200",
        userName: "rehmanDakait",
        isFollowed: false,
        caption: "Dhurandhar - Powered by rage ☕🔥",
        isSaved: true,
        isLiked: true,
        likeCount: 1100,
        commentCount: 601,
        shareCount: 220,
        videoUrl: "./assets/reels/reel12.mp4"
    }


];


var all_reels = document.querySelector('.all_reels');
var globalMuted = true;

function addData() {
    var sum = '';

    reelsData.forEach(function (reel_obj, idx) {
        sum = sum + `   <div id="${idx}" class="reel">
                    <video class="reelVideo"  src="${reel_obj.videoUrl}" autoplay ${globalMuted ? 'muted' : ''} loop></video>
                    <div class="bigHeartContainer">
                   
                    </div>
                    <div class="right">
                        <div class="like"> 
                            <img class="likeIcon icon" src="./assets/SVG/${(reel_obj.isLiked) ? 'redHeart.svg' : 'heart.svg'}" alt="">
                            <h4 class="likeCount">${reel_obj.likeCount}</h4>
                        </div>
                        <div class="comment">
                             <img class="commentIcon icon" src="./assets/SVG/comment.svg" alt="">
                            <h4 class="commentCount">${reel_obj.commentCount}</h4>
                        </div>
                        <div class="share">
                            <img class="shareIcon icon" src="./assets/SVG/share.svg" alt="">
                            <h4 class="shareCount icon">${reel_obj.shareCount}</h4>
                        </div>
                        <div class="save">
                            <img class="saveIcon icon" src="./assets/SVG/${(reel_obj.isSaved) ? 'saved.svg' : 'save.svg'}" alt="">
                        </div>
                        <div class="menu">
                                 <img class="menuIcon icon" src="./assets/SVG/menu.svg" alt="">
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="top-row">
                            <div class="userDp">
                                <img src="${reel_obj.userDp}" alt="">
                            </div>
                            <div class="userName">@${reel_obj.userName}</div>
                            <button class="follow-btn">${reel_obj.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                        <div class="caption">${reel_obj.caption}
                        </div>
                    </div>
                    <button class="pause-play">
                        <div class="pause">
                            <img  src="./assets/SVG/pause.svg" alt="">
                        </div>
                         <div class="play">
                             <img  src="./assets/SVG/play.svg" alt="">
                        </div>

                    </button>
                    <button class="muteBtn">
                    <img class="icon" src="./assets/SVG/${(globalMuted) ? 'mute' : 'sound'}.svg" alt="">
                    </button>
                    
                    </div>`
        all_reels.innerHTML = sum;

    });
}

addData();

var allReels = document.querySelectorAll('.reel');

all_reels.addEventListener("click", (dets) => {
    // console.log(dets.target);
    var reel = dets.target.closest('.reel');
    obj = reelsData[reel.id];

    if (dets.target.matches(".muteBtn")) {
        globalMuted = !globalMuted;

        document.querySelectorAll('.reelVideo').forEach(v => v.muted = globalMuted);
        document.querySelectorAll('.muteBtn').forEach(b => {
            b.querySelector('img').src = `./assets/SVG/${globalMuted ? 'mute' : 'sound'}.svg`;
        });
 
    }

    if (dets.target.matches(".reelVideo")) {
        var video = dets.target;
        reel.querySelector('.pause-play').style.opacity = 1;

        if (video.paused) {
            reel.querySelector('.pause').style.display = "none";
            reel.querySelector('.play').style.display = "block";
            video.play();

            setTimeout(() => {
                reel.querySelector('.play').style.display = "none";
            }, 500)
        }
        else {
            reel.querySelector('.play').style.display = "none";
            reel.querySelector('.pause').style.display = "block";
            video.pause();

        }
    };

    if (dets.target.matches(".follow-btn")) {
        obj.isFollowed = !obj.isFollowed;
        dets.target.textContent = obj.isFollowed ? 'Unfollow' : 'Follow';
        // console.log(obj.isFollowed);

    }

    if (dets.target.matches(".like")) {

        likeCountEl = reel.querySelector('.likeCount');
        likeBtn = reel.querySelector('.likeIcon');

        likeBtn.style.scale = 1.3;
        likeBtn.style.opacity = 0.4;

        obj.isLiked = !obj.isLiked;
        obj.likeCount += (obj.isLiked) ? 1 : -1;

        likeCountEl.textContent = obj.likeCount;
        likeBtn.src = `./assets/SVG/${(obj.isLiked) ? 'redHeart.svg' : 'heart.svg'}`


        setTimeout(() => {
            likeBtn.style.scale = 1
            likeBtn.style.opacity = 1;
        }, 200)
    }

    if (dets.target.matches(".share")) {
        shareCountEl = reel.querySelector('.shareCount');
        obj.shareCount++;
        shareCountEl.textContent = obj.shareCount;
    }
    if (dets.target.matches(".comment")) {
        commentCountEl = reel.querySelector('.commentCount');
        obj.commentCount++;
        commentCountEl.textContent = obj.commentCount;
    }
    if (dets.target.matches(".save")) {
        saveIcon = reel.querySelector('.saveIcon');
        obj.isSaved = !obj.isSaved;
        saveIcon.src = `./assets/SVG/${(obj.isSaved) ? 'saved.svg' : 'save.svg'}`;
    }

});

function spawnHeart(reel) {
    var bigHeartCn = reel.querySelector('.bigHeartContainer');
    var bigHeart = document.createElement('div');
    bigHeart.classList.add('bigHeart');
    
    var rand = -40 + Math.floor(Math.random() * 100);

    bigHeart.style.setProperty('--angle1', rand + 'deg');
    bigHeart.style.setProperty('--angle2', -rand + 'deg');


    bigHeartCn.appendChild(bigHeart);
    bigHeart.classList.add('animate1');

    setTimeout(() => {
        bigHeart.remove();
    }, 1500)

}

all_reels.addEventListener("dblclick", (dets) => {

    var reel = dets.target.closest('.reel');
    obj = reelsData[reel.id];
    spawnHeart(reel);
    setTimeout(()=>{
        spawnHeart(reel, obj);
    },100)
    setTimeout(()=>{
        spawnHeart(reel, obj);
    },200)

    if (!obj.isLiked) {
        likeCountEl = reel.querySelector('.likeCount');
        likeBtn = reel.querySelector('.likeIcon');

        obj.isLiked = !obj.isLiked;
        obj.likeCount += (obj.isLiked) ? 1 : -1;

        likeCountEl.textContent = obj.likeCount;
        likeBtn.src = `./assets/SVG/${(obj.isLiked) ? 'redHeart.svg' : 'heart.svg'}`
    }

});



const videos = document.querySelectorAll(".reelVideo");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
           
            video.muted = globalMuted;
            video.play();

        } else {
            
            video.pause();
            video.currentTime = 0; 
        }
    });
}, {
    threshold: 0.6 
});

videos.forEach(v => observer.observe(v));


(function(){
    const infoToggle = document.querySelector('.info-toggle');
    const infoCard = document.querySelector('.info-card');
    const infoClose = document.querySelector('.info-close');

    if(!infoToggle || !infoCard) return;

    function openInfo(){
        infoCard.classList.remove('hidden');
    }
    function closeInfo(){
        infoCard.classList.add('hidden');
    }

    infoToggle.addEventListener('click', () => {
        if(infoCard.classList.contains('hidden')) openInfo(); else closeInfo();
    });

    infoClose.addEventListener('click', closeInfo);

    // close on outside click
    document.addEventListener('click', (e) => {
        if(infoCard.classList.contains('hidden')) return;
        if(e.target.closest('.info-card') || e.target.closest('.info-toggle')) return;
        closeInfo();
    });

    // close with Escape
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') closeInfo();
    });
})();
















