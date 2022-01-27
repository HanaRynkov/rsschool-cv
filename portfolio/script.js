
const main = () => {

    const winterButton = document.querySelector('#winter');
    const springButton = document.querySelector('#spring');
    const summerButton = document.querySelector('#summer');
    const autumnButton = document.querySelector('#autumn');
    
    function selectSeason(htmlElement) {
        if (htmlElement === null) {
            return;
        }

        const prevSelected = document.querySelector('.selected');
        if (prevSelected !== null) {
            prevSelected.classList.remove('selected');
        }
        htmlElement.classList.add('selected');
        
        
        // - choose images
        const images = document.querySelectorAll('.gallery-image');
        
        for (let i = 0; i < images.length; i++) {
            images[i].src = `./${htmlElement.id}${i + 1}.jpeg`;
        }
    
    }

    // 1. pre-choose
    selectSeason(winterButton);

    // ON CLICK;
    winterButton.onclick = () => {
        selectSeason(winterButton);
    }
    springButton.onclick = () => {
        selectSeason(springButton);
    }
    summerButton.onclick = () => {
        selectSeason(summerButton);
    }
    autumnButton.onclick = () => {
        selectSeason(autumnButton);
    }

};

window.addEventListener('DOMContentLoaded', () => {
    main();
})
