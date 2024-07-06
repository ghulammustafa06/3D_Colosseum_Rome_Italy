# Colosseum Rome Italy 👑, 3D Experience

## Project Description

This project is a 3D web experience dedicated to the Colosseum in Rome, Italy. It features a main page with an interactive 3D model of the Colosseum and an informative second page with a gallery and detailed information about the Colosseum's history, architecture, events, and visiting details.

## Features

1. **Main Page**:
    - Interactive 3D model of the Colosseum rendered using Three.js.
    - Background music for an immersive experience.
    - Interactive elements such as rotating the model on click and scaling objects on interaction.
    
2. **More Info Page**:
    - Image gallery with high-quality images of the Colosseum.
    - Information tabs covering history, architecture, events, and visiting details.
    - Interactive like button to express appreciation for the page.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling of the web pages.
  - External libraries: Font Awesome, Google Fonts
- **JavaScript**: Interactive elements and functionalities.
  - Modules for 3D model rendering and interactive content using Three.js, OrbitControls, and GLTFLoader.

## Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/ghulammustafa06/3D_Colosseum_Rome_Italy
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd 3D_Colosseum_Rome_Italy
    ```

3. **Open `index.html` in Your Browser**:
    - Simply open the `index.html` file in your preferred web browser to view the main page.
    - Click on the "More Info" link to navigate to the detailed information page.

## File Structure

```plaintext
colosseum-rome/
├── index.html          # Main page with 3D model
├── about.html          # More Info page
├── style.css           # Styles for the main page
├── about.css           # Styles for the More Info page
├── script.js           # Script for the main page
├── about.js            # Script for the More Info page
├── models/             # Directory for 3D models
│   └── colosseum_rome_italy/
│       └── scene.gltf  # 3D model file
├── bg_music.mp3        # Background music file
```

## Dependencies

- **Three.js**: For 3D rendering.
- **OrbitControls**: For camera controls.
- **GLTFLoader**: For loading the 3D model.
- **Font Awesome**: For icons.
- **Google Fonts**: For custom fonts (Playfair Display, Roboto).

## Credits

- High-quality images sourced from Unsplash.
- Project by GM., made with ❤.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for more details.
