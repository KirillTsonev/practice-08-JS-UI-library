import $ from "../core";

$.prototype.setAttribute = function(attributes, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }

        this[i].setAttribute(attributes, value);
    }

    return this;
};

$.prototype.removeAttribute = function(attributes) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].removeAttribute) {
            continue;
        }

        this[i].removeAttribute(attributes);
    }

    return this;
};