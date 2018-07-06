window.onload = () => {
    /**
     * show timeline btn
     */
    let btn = document.getElementById('js-timeline-btn'),
        footer = document.getElementById('js-timeline-footer'),
        section = document.getElementById('js-timeline-section'),
        preloader = document.getElementById('js-preloader');

    footer.style.height = 60 + 'vh';
    btn.style.bottom = 20 + '%';

    preloader.style.display = 'none';

    btn.addEventListener('click', () => {
        section.style.height = 'auto';
        footer.style.height = 7.5 + 'rem';
        btn.style.display = 'none';
    })

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document. documentElement.clientWidth)
        );
    }

    /**
     * Animation
     */
    function VerticalTimeline( element ) {
        this.element = element;
        this.blocks = element.getElementsByClassName('timeline__block');
        this.contents = element.getElementsByClassName('timeline__content');
        this.offset = 0.5;
        this.hideBlocks();
    }

    VerticalTimeline.prototype.hideBlocks = function() {
        if (!('classList'in document.documentElement)) {
            return;
        }
        var that = this;

        for (var i = 0; i < this.blocks.length; i++) {
            (function(i) {
                if (!isElementInViewport(that.blocks[i])) {
                    that.contents[i].classList.add('timeline__content_hidden');
                }
            }
            )(i);
        }
    };

    VerticalTimeline.prototype.showBlocks = function() {
        var that = this;

        for ( var i = 0; i < this.blocks.length; i++) {
            (function(i) {
                if ( that.contents[i].classList.contains('timeline__content_hidden') && that.blocks[i].getBoundingClientRect().top <= window.innerHeight) {
                    that.contents[i].classList.add('timeline__content_animation_bounce-in');
                    that.contents[i].classList.remove('timeline__content_hidden');
                }
            })(i);
        }
    };

    var verticalTimelines = document.getElementsByClassName('timeline__container')
        , verticalTimelinesArray = []
        , scrolling = false;

    if (verticalTimelines.length > 0) {
        for (var i = 0; i < verticalTimelines.length; i++) {
            (function(i) {
                verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
            }
            )(i);
        }
        window.addEventListener('scroll', () => {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
            }
        });
    }
    function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function(timeline) {
            timeline.showBlocks();
        });
        scrolling = false;
    }
};