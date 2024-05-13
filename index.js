const treatmentsModal = document.querySelector('.Treatments-modal');
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        const container = document.querySelector('.section-1-container');
        container.scrollTo({
            left: 5000,
            behavior: 'smooth'
        });
    }, 2000);


    const helpBtn = document.querySelector('.navbar-help');


    const helpModal = document.querySelector('.help-button-modal');


    helpBtn.addEventListener('click', () => {
        if (helpModal.style.display === 'flex') {
            helpModal.style.display = 'none';
        } else {
            helpModal.style.display = 'flex';
            treatmentsModal.style.display = 'none';
        }
    });


    
});

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
    console.log(treatmentsModal.style.display);
    if (treatmentsModal.style.opactiy === 0) {
        treatmentsModal.style.opactiy = 100;
        treatmentsModal.style.display = 'block';
        helpModal.style.display = 'none';
    } else {
        treatmentsModal.style.opactiy = 0;
        treatmentsModal.style.display = 'none';
    }
}

document.querySelector('.section-5-description button').addEventListener('click', function () {
    document.querySelector('.section-5-description').style.display = 'none';
});



const container = document.getElementById('section-7-container');


const cards = container.querySelectorAll('.strip-card');
const totalCards = cards.length;

for (let i = 0; i < totalCards; i++) {
    const cloneCard = cards[i].cloneNode(true);
    container.appendChild(cloneCard);
}

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

