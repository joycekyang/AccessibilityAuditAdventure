window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle5group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
        // 1. Pick any of the 4 quadrants at random
        const allStates = [0, 90, 180, 270];
        const randomAngle = allStates[Math.floor(Math.random() * allStates.length)];

        // 2. Snap visual graphic immediately using GSAP
        gsap.set(masterGroup, {
            rotation: randomAngle,
            transformOrigin: "50% 50%"
        });

        // 3. Set the initial angle variable in Storyline
        player.SetVar("circle5angle", randomAngle);
        console.log("Timeline Start: Initialized dial to", randomAngle);
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle5group element.");
}
}

window.Script2 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle4group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
        // 1. Pick any of the 4 quadrants at random
        const allStates = [0, 90, 180, 270];
        const randomAngle = allStates[Math.floor(Math.random() * allStates.length)];

        // 2. Snap visual graphic immediately using GSAP
        gsap.set(masterGroup, {
            rotation: randomAngle,
            transformOrigin: "50% 50%"
        });

        // 3. Set the initial angle variable in Storyline
        player.SetVar("circle4angle", randomAngle);
        console.log("Timeline Start: Initialized dial to", randomAngle);
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle4group element.");
}
}

window.Script3 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle3group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
        // 1. Pick any of the 4 quadrants at random
        const allStates = [0, 90, 180, 270];
        const randomAngle = allStates[Math.floor(Math.random() * allStates.length)];

        // 2. Snap visual graphic immediately using GSAP
        gsap.set(masterGroup, {
            rotation: randomAngle,
            transformOrigin: "50% 50%"
        });

        // 3. Set the initial angle variable in Storyline
        player.SetVar("circle3angle", randomAngle);
        console.log("Timeline Start: Initialized dial to", randomAngle);
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle3group element.");
}
}

window.Script4 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle2group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
        // 1. Pick any of the 4 quadrants at random
        const allStates = [0, 90, 180, 270];
        const randomAngle = allStates[Math.floor(Math.random() * allStates.length)];

        // 2. Snap visual graphic immediately using GSAP
        gsap.set(masterGroup, {
            rotation: randomAngle,
            transformOrigin: "50% 50%"
        });

        // 3. Set the initial angle variable in Storyline
        player.SetVar("circle2angle", randomAngle);
        console.log("Timeline Start: Initialized dial to", randomAngle);
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle2group element.");
}
}

window.Script5 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle1group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
        // 1. Pick any of the 4 quadrants at random
        const allStates = [0, 180];
        const randomAngle = allStates[Math.floor(Math.random() * allStates.length)];

        // 2. Snap visual graphic immediately using GSAP
        gsap.set(masterGroup, {
            rotation: randomAngle,
            transformOrigin: "50% 50%"
        });

        // 3. Set the initial angle variable in Storyline
        player.SetVar("circle1angle", randomAngle);
        console.log("Timeline Start: Initialized dial to", randomAngle);
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle1group element.");
}
}

window.Script6 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle5group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
    	if (gsap.isTweening(masterGroup)) {
    		return;
    	}
        // 1. Read current angle from Storyline and calculate next angle
        const currentAngle = player.GetVar("circle5angle") || 0;
        const nextAngle = (currentAngle + 90) % 360;

        // 2. Smoothly rotate clockwise by 90 degrees
        gsap.to(masterGroup, {
            rotation: "+=90",
            duration: 0.6,
            ease: "power1.out",
            transformOrigin: "50% 50%",
            onComplete: function() {
                // 3. Update Storyline variable once rotation finishes
                player.SetVar("circle5angle", nextAngle);
                console.log("Click Complete: circle5angle is now", nextAngle);
            }
        });
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle5group element.");
}
}

window.Script7 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle4group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
    	if (gsap.isTweening(masterGroup)) {
    		return;
    	}
        // 1. Read current angle from Storyline and calculate next angle
        const currentAngle = player.GetVar("circle4angle") || 0;
        const nextAngle = (currentAngle + 90) % 360;

        // 2. Smoothly rotate clockwise by 90 degrees
        gsap.to(masterGroup, {
            rotation: "+=90",
            duration: 0.6,
            ease: "power1.out",
            transformOrigin: "50% 50%",
            onComplete: function() {
                // 3. Update Storyline variable once rotation finishes
                player.SetVar("circle4angle", nextAngle);
                console.log("Click Complete: circle4angle is now", nextAngle);
            }
        });
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle4group element.");
}
}

window.Script8 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle3group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
    	if (gsap.isTweening(masterGroup)) {
    		return;
    	}
        // 1. Read current angle from Storyline and calculate next angle
        const currentAngle = player.GetVar("circle3angle") || 0;
        const nextAngle = (currentAngle + 90) % 360;

        // 2. Smoothly rotate clockwise by 90 degrees
        gsap.to(masterGroup, {
            rotation: "+=90",
            duration: 0.6,
            ease: "power1.out",
            transformOrigin: "50% 50%",
            onComplete: function() {
                // 3. Update Storyline variable once rotation finishes
                player.SetVar("circle3angle", nextAngle);
                console.log("Click Complete: circle3angle is now", nextAngle);
            }
        });
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle3group element.");
}
}

window.Script9 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle2group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
    	if (gsap.isTweening(masterGroup)) {
    		return;
    	}
        // 1. Read current angle from Storyline and calculate next angle
        const currentAngle = player.GetVar("circle2angle") || 0;
        const nextAngle = (currentAngle + 90) % 360;

        // 2. Smoothly rotate clockwise by 90 degrees
        gsap.to(masterGroup, {
            rotation: "+=90",
            duration: 0.6,
            ease: "power1.out",
            transformOrigin: "50% 50%",
            onComplete: function() {
                // 3. Update Storyline variable once rotation finishes
                player.SetVar("circle2angle", nextAngle);
                console.log("Click Complete: circle2angle is now", nextAngle);
            }
        });
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle2group element.");
}
}

window.Script10 = function()
{
  const player = GetPlayer();
const centerCircle = document.querySelector('[data-acc-text="circle1group"]');

if (centerCircle) {
    let masterGroup = centerCircle.closest('.item-group, .slideobject-group, [id*="_group"]') 
                      || (centerCircle.parentElement ? centerCircle.parentElement.closest('div, g') : null);

    if (masterGroup) {
    	if (gsap.isTweening(masterGroup)) {
    		return;
    	}
        // 1. Read current angle from Storyline and calculate next angle
        const currentAngle = player.GetVar("circle1angle") || 0;
        const nextAngle = (currentAngle + 180) % 360;

        // 2. Smoothly rotate clockwise by 90 degrees
        gsap.to(masterGroup, {
            rotation: "+=180",
            duration: 0.6,
            ease: "power1.out",
            transformOrigin: "50% 50%",
            onComplete: function() {
                // 3. Update Storyline variable once rotation finishes
                player.SetVar("circle1angle", nextAngle);
                console.log("Click Complete: circle1angle is now", nextAngle);
            }
        });
    } else {
        console.error("Could not locate master group.");
    }
} else {
    console.error("Could not find circle1group element.");
}
}

};
