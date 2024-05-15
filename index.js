const treatmentsModal = document.querySelector('.Treatments-modal');
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.section-1-container');
    let scrollDirection = 1;
    let scrollAmount = 4000;

    setInterval(() => {
        const newScrollLeft = container.scrollLeft + (scrollAmount * scrollDirection);
        if (newScrollLeft >= (container.scrollWidth - container.clientWidth)) {
            scrollDirection = -1;
        } else if (newScrollLeft <= 0) {
            scrollDirection = 1;
        }
        container.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
    }, 5000);
});

const HandleHelpNavModal = () => {
    const helpModal = document.querySelector('.help-button-modal');
    console.log("hi")
    if (helpModal.style.display == 'flex' || helpModal.style.display == 'block') {
        helpModal.style.display == 'none';
    } else {
        helpModal.style.display == 'flex';

        if (treatmentsModal.style.display == 'block') {
            treatmentsModal.style.display == 'none';
        }
    }
}

const handleDialog = () => {
    const bookappoitment = document.querySelector('.book-appointment');
    const nextBtn = document.querySelector('.next-btn');
    const bookappoitmentModal = document.querySelector('.book-consultation-call-modal');

    bookappoitment.addEventListener('click', () => {
        console.log("hi")

        bookappoitmentModal.showModal();
    });

    nextBtn.addEventListener('click', () => {
        bookappoitmentModal.close();
    });
}

const showTreatmentsModal = () => {
    console.log(treatmentsModal.style.display)
    if (treatmentsModal.style.display == 'none') {
        treatmentsModal.style.display == 'block';
        treatmentsModal.style.opactiy = 100;
        helpModal.style.display = 'none';
    } else if (treatmentsModal.style.display = 'block'){
        treatmentsModal.style.opactiy = 0;
        treatmentsModal.style.display = 'none';
    }
}

document.querySelector('.section-5-description button').addEventListener('click', function () {
    document.querySelector('.section-5-description').style.display = 'none';
});

const helpBtn = document.querySelector('.navbar-help');

helpBtn.addEventListener('click', () => {
    const helpModal = document.querySelector('.help-button-modal');
    const modalStyle = window.getComputedStyle(helpModal);

    if (modalStyle.display === 'block' || modalStyle.display === 'flex') {
        helpModal.style.display = 'none';
    } else {
        helpModal.style.display = 'block';
    }
});


const scrollRightBtn = document.querySelector('.btn-2');
const scrollLeftBtn = document.querySelector('.btn-1');

const handleScrollRight = (classname) => {
    const container = document.querySelector(`.${classname}`);
    const currentScrollPosition = container.scrollLeft;
    container.scrollTo({
        left: currentScrollPosition + container.scrollWidth / 3.5,
        behavior: 'smooth'
    });
};
const handleScrollLeft = (classname) => {
    const container = document.querySelector(`.${classname}`);
    const currentScrollPosition = container.scrollLeft;
    container.scrollTo({
        left: currentScrollPosition - container.scrollWidth / 3.5,
        behavior: 'smooth'
    });
};



const scrollContainer = document.querySelector('.section-8');
let isMouseDown = false;
let startX, startY, scrollLeft, scrollTop;

scrollContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    startY = e.pageY - scrollContainer.offsetTop;
    scrollLeft = scrollContainer.scrollLeft;
    scrollTop = scrollContainer.scrollTop;
});

scrollContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
});

scrollContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const y = e.pageY - scrollContainer.offsetTop;
    const moveX = (x - startX) * 1; // Adjust the speed of horizontal scroll
    const moveY = (y - startY) * 1; // Adjust the speed of vertical scroll
    scrollContainer.scrollLeft = scrollLeft - moveX;
    scrollContainer.scrollTop = scrollTop - moveY;
});





// scrollContainer.addEventListener('mousedown', (e) => {
//     isMouseDown = true;
//     startX = e.pageX - scrollContainer.offsetLeft;
//     startY = e.pageY - scrollContainer.offsetTop;
//     scrollLeft = scrollContainer.scrollLeft;
//     scrollTop = scrollContainer.scrollTop;
// });

// scrollContainer.addEventListener('mouseup', () => {
//     isMouseDown = false;
// });

// scrollContainer.addEventListener('mouseleave', () => {
//     isMouseDown = false;
// });

// scrollContainer.addEventListener('mousemove', (e) => {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     const x = e.pageX - scrollContainer.offsetLeft;
//     const y = e.pageY - scrollContainer.offsetTop;
//     const moveX = (x - startX) * 1; // Adjust the speed of horizontal scroll
//     const moveY = (y - startY) * 1; // Adjust the speed of vertical scroll
//     scrollContainer.scrollLeft = scrollLeft - moveX;
//     scrollContainer.scrollTop = scrollTop - moveY;
// });