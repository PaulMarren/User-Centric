document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('equipment-image');
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.getAttribute('data-bs-target');

            // Update image based on the active section
            switch (section) {
                case '#cardio-section':
                    imageElement.src = 'assets/images/cardio.jpg';
                    imageElement.alt = 'Cardio Equipment';
                    break;
                case '#weight-section':
                    imageElement.src = 'assets/images/weight-room.jpg';
                    imageElement.alt = 'Weight Equipment';
                    break;
                case '#functional-section':
                    imageElement.src = 'assets/images/functional-equipment.jpg';
                    imageElement.alt = 'Functional Equipment';
                    break;
                default:
                    imageElement.src = 'assets/images/cardio.jpg';
                    imageElement.alt = 'Cardio Equipment';
            }
        });
    });
});