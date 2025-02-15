const imageList_encero = [
    { src: 'img/Encero_1.png', alt: 'Image 1' },
    { src: 'img/Encero_2.png', alt: 'Image 2' },
    { src: 'img/Encero_3.png', alt: 'Image 3' },
    { src: 'img/Encero_4.png', alt: 'Image 4' },
];

const description_encero = 'This simple application allows users to upload multiple files, specify a custom extension for the package, and download the package along with a key to open it. It also gives the user the ability to open a custom file with a key.';

const imageList_mastermind = [
    { src: 'img/Mastermind_1.png', alt: 'Image 1' },
    { src: 'img/Mastermind_2.png', alt: 'Image 2' },
    { src: 'img/Mastermind_3.png', alt: 'Image 3' },
    { src: 'img/Mastermind_4.png', alt: 'Image 4' },
    { src: 'img/Mastermind_5.png', alt: 'Image 5' },
    { src: 'img/Mastermind_6.png', alt: 'Image 6' },
];

const description_mastermind = 'Mastermind 2025 is a modern Flutter implementation of the classic code-breaking game. Challenge your logic and deduction skills by breaking the secret color code!';

const imageList_fluttercrud = [
    { src: 'img/FlutterCRUD_1.png', alt: 'Image 1' },
    { src: 'img/FlutterCRUD_2.png', alt: 'Image 2' },
    { src: 'img/FlutterCRUD_3.png', alt: 'Image 3' },
    { src: 'img/FlutterCRUD_4.png', alt: 'Image 4' },
    { src: 'img/FlutterCRUD_5.png', alt: 'Image 5' },
    { src: 'img/FlutterCRUD_6.png', alt: 'Image 6' },
];

const description_fluttercrud = 'This project is a simple CRUD (Create, Read, Update, Delete) application built with Flutter. It includes a custom drawer for easy navigation between different screens.';

const imageList_personal_budget = [
    { src: 'img/Personal_Budget_1.png', alt: 'Image 1' },
    { src: 'img/Personal_Budget_2.png', alt: 'Image 2' },
    { src: 'img/Personal_Budget_3.png', alt: 'Image 3' },
    { src: 'img/Personal_Budget_4.png', alt: 'Image 4' },
    { src: 'img/Personal_Budget_5.png', alt: 'Image 5' },
    { src: 'img/Personal_Budget_6.png', alt: 'Image 6' },
    { src: 'img/Personal_Budget_7.png', alt: 'Image 7' },
];

const description_personal_budget = 'This is a personal expense management application built with Python and customtkinter.';

const imageList_chart_lemming = [
    { src: 'img/Chart_Lemming_1.png', alt: 'Image 1' },
    { src: 'img/Chart_Lemming_2.png', alt: 'Image 2' },
    { src: 'img/Chart_Lemming_3.png', alt: 'Image 3' },
    { src: 'img/Chart_Lemming_4.png', alt: 'Image 4' },
    { src: 'img/Chart_Lemming_5.png', alt: 'Image 5' },
    { src: 'img/Chart_Lemming_6.png', alt: 'Image 6' },
    { src: 'img/Chart_Lemming_7.png', alt: 'Image 7' },
];

const description_chart_lemming = 'Chart Lemming is a web application that enables users to upload CSV data, select a chart type, and display the chosen chart on an HTML page. Users can seamlessly switch between different chart types for the uploaded data and view detailed explanations for each chart. The explanations are generated by a custom-trained AI model. This package also includes the model trainer, chart creator, explanation creator, file converter, and predictor model.';

const imageList_nova_caster =[
    { src: 'img/Nova_Caster_1.png', alt: 'Image 1' },
    { src: 'img/Nova_Caster_2.png', alt: 'Image 2' },
]

const description_nova_caster = 'A Python application that combines mathematical pattern recognition with AI-powered predictions using GGUF models to predict the next number in a sequence.';

// DS_Chat
const imageList_ds_chat = [
    { src: 'img/DS_Chat_1.png', alt: 'Image 1' },
    { src: 'img/DS_Chat_2.png', alt: 'Image 2' },
    { src: 'img/DS_Chat_3.png', alt: 'Image 3' },
    { src: 'img/DS_Chat_4.png', alt: 'Image 4' },
];

const description_ds_chat = 'DS Chat is a chat application that allows users to interact with the AI model loaded in the included server.';

// Earthquake Notifications
const imageList_earthquake_notifications = [
    { src: 'img/Earthquake_Notifications_1.png', alt: 'Extension popup showing recent earthquakes' },
    { src: 'img/Earthquake_Notifications_2.png', alt: 'Extension settings page' }
];

const description_earthquake_notifications = 'A Chrome extension that monitors and displays recent earthquake activity using USGS data.';

// Earthquake Prediction
const imageList_earthquake_prediction = [
    { src: 'img/Earthquake_Prediction_1.png', alt: 'Image 1' },
    { src: 'img/Earthquake_Prediction_2.png', alt: 'Image 2' },
    { src: 'img/Earthquake_Prediction_3.png', alt: 'Image 3' },
    { src: 'img/Earthquake_Prediction_4.png', alt: 'Image 4' },
    { src: 'img/Earthquake_Prediction_5.png', alt: 'Image 5' },
    { src: 'img/Earthquake_Prediction_6.png', alt: 'Image 6' },
    { src: 'img/Earthquake_Prediction_7.png', alt: 'Image 7' },
];

const description_earthquake_prediction = 'This project is a Python application that predicts the likelihood of an earthquake occurring in a given location.';

// Save And Read
const imageList_save_and_read = [
    { src: 'img/Save_And_Read_1.png', alt: 'Image 1' },
    { src: 'img/Save_And_Read_2.png', alt: 'Image 2' },
    { src: 'img/Save_And_Read_3.png', alt: 'Image 3' },
];

const description_save_and_read = 'This simple application allows users to save and read text files.';

document.addEventListener('DOMContentLoaded', () => {
    // Debug logging
    console.log('DOM Content Loaded');

    // Configuration object mapping grid IDs to their descriptions
    const projectConfigs = [
        { gridId: 'encero-grid', description: description_encero },
        { gridId: 'mastermind-grid', description: description_mastermind },
        { gridId: 'fluttercrud-grid', description: description_fluttercrud },
        { gridId: 'personal-budget-grid', description: description_personal_budget },
        { gridId: 'chart-lemming-grid', description: description_chart_lemming },
        { gridId: 'nova-caster-grid', description: description_nova_caster },
        { gridId: 'deepseek-chat-grid', description: description_ds_chat },
        { gridId: 'earthquake-prediction-grid', description: description_earthquake_prediction },
        { gridId: 'earthquake-notifications-grid', description: description_earthquake_notifications },
        { gridId: 'save-and-read-grid', description: description_save_and_read } // Add this line
    ];

    // Helper function to create and insert description
    function createDescription(gridId, descriptionText) {
        const gridElement = document.getElementById(gridId);
        if (!gridElement) {
            console.error(`Grid element not found: ${gridId}`);
            return null;
        }

        const description = document.createElement('p');
        description.textContent = descriptionText;
        gridElement.parentNode.insertBefore(description, gridElement);
        return gridElement;
    }

    // Create all descriptions and store grid elements
    const gridElements = projectConfigs
        .map(config => createDescription(config.gridId, config.description))
        .filter(element => element !== null);

    function createGridItem(image) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid__item');
        gridItem.setAttribute('data-aos', 'fade-up');
        
        const img = document.createElement('img');
        // Debug log the image path
        console.log(`Attempting to load image: ${image.src}`);
        img.src = image.src;
        img.alt = image.alt;
        
        img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`);
            // Try alternate extension if first attempt fails
            if (img.src.endsWith('.png')) {
                img.src = image.src.replace('.png', '.PNG');
            } else if (img.src.endsWith('.PNG')) {
                img.src = image.src.replace('.PNG', '.png');
            }
        };
        
        // Loading animation
        img.style.opacity = '0';
        img.onload = () => {
            console.log(`Loaded image: ${img.src}`);
            img.style.transition = 'opacity 0.5s ease';
            img.style.opacity = '1';
        };

        gridItem.appendChild(img);
        return gridItem;
    }

    // Simplified grid loading with error checking
    function loadImagesIntoGrid(imageList, gridId) {
        const gridElement = document.getElementById(gridId);
        if (!gridElement) {
            console.error(`Grid not found: ${gridId}`);
            return;
        }

        console.log(`Loading images for ${gridId}`);
        imageList.forEach(image => {
            const gridItem = createGridItem(image);
            gridElement.appendChild(gridItem);
        });
    }

    // Load all grids with error checking
    const gridConfigs = {
        'encero-grid': imageList_encero,
        'mastermind-grid': imageList_mastermind,
        'fluttercrud-grid': imageList_fluttercrud,
        'personal-budget-grid': imageList_personal_budget,
        'chart-lemming-grid': imageList_chart_lemming,
        'nova-caster-grid': imageList_nova_caster,
        'deepseek-chat-grid': imageList_ds_chat,
        'earthquake-notifications-grid': imageList_earthquake_notifications,
        'save-and-read-grid': imageList_save_and_read  // Add this line
    };

    // Load images for each grid
    Object.entries(gridConfigs).forEach(([gridId, imageList]) => {
        loadImagesIntoGrid(imageList, gridId);
    });

    // Modal functionality
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');

    if (modal && modalImage && modalCaption && closeBtn) {
        document.querySelectorAll('.grid__item img').forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'block';
                modalImage.src = img.src;
                modalCaption.textContent = img.alt;
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        console.error('Modal elements not found');
    }
});
