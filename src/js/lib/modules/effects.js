import $ from "../core";

$.prototype.animateOverTime = function (dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complexion = Math.min(timeElapsed / dur, 1);

        cb(complexion);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === "function") {
                fin();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function(dur, fin, display = "block") {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;

        const _fadeIn = (complexion) => {
            this[i].style.opacity = complexion;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);

        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complexion) => {
            this[i].style.opacity = 1 - complexion;

            if (complexion === 1) {
                this[i].style.display = "none";
            }
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);

        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeToggle = function(dur, fin, display = "block") {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === "none") {
            this[i].style.display = display;

            const _fadeIn = (complexion) => {
                this[i].style.opacity = complexion;
            };
    
            const ani = this.animateOverTime(dur, _fadeIn, fin);
    
            requestAnimationFrame(ani);
        } else {
            const _fadeOut = (complexion) => {
                this[i].style.opacity = 1 - complexion;
    
                if (complexion === 1) {
                    this[i].style.display = "none";
                }
            };
    
            const ani = this.animateOverTime(dur, _fadeOut, fin);
    
            requestAnimationFrame(ani);
        }
    }

    return this;
};