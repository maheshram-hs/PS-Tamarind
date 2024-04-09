# P.S.Tamarind Private Limited - Website

Website: [pstamarind.com](https://pstamarind.com)

## Overview

Welcome to the P.S.Tamarind Private Limited project repository. This project serves as the online platform for P.S.Tamarind Private Limited, dedicated to showcasing our signature tamarind products packed in a distinctive cuboid shape. 

### Website Features

- **Quality Tamarind:** Explore our premium tamarind selections known for their exceptional taste and quality.
- **Advertising:** Showcasing our products and highlighting their unique features.
- **Administrative Tasks:** Handling various administrative functions to maintain operational efficiency.
- **Contact Information:** Easy access to our contact details for inquiries and collaboration.

The goal of this website is to serve as an advertising platform, making it easier for users to understand what we offer. Whether you are a potential customer, distributor, or collaborator, we aim to provide a user-friendly experience with clear navigation and readily available contact information.

## Prerequisites

- Python 3.x
- Django 5.0
- uWSGI (for deployment)
- Nginx (for deployment)
- Other dependencies listed in `requirements.txt`

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/maheshram-hs/TamarindWebsite.git
    ```

2. Set up a virtual environment and install dependencies:

    ```bash
    cd your-repository
    python3 -m venv venv
    source venv/bin/activate  # On macOS/Linux, or venv\Scripts\activate on Windows
    pip install -r requirements.txt
    ```
3. Configure local settings
   
    ```bash
    vim pstamarind/settings_local.py
    ```
    Edit settings_local.py to configure the database and other settings for development. Add your IP address (replace '0.0.0.0' below) to ALLOWED_HOSTS setting in your settings_local.py file.
   ```py
   ALLOWED_HOSTS = ['0.0.0.0', 'pstamarind.com', 'www.pstamarind.com', 'localhost']
   ```
   
5. Generate SECRET_KEY

   ```bash
   python -c "import random, string; print(''.join(random.choice(string.ascii_letters + string.digits + string.punctuation) for i in range(50)))" | cat > secret_key.txt
    ```

6. Apply migrations:

    ```bash
    python manage.py migrate
    ```

7. Run the development server:

    ```bash
    python manage.py runserver --settings=pstamarind.settings_local
    ```

8. Visit [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser to access the development server.

## Contributing

We welcome contributions from the community! If you find a bug, have a feature request, or would like to contribute in any way, please open an issue or submit a pull request.

## License

This project is licensed under the [P.S.Tamarind Private Limited Proprietary License](LICENSE).

For inquiries about commercial licensing, please contact P.S.Tamarind Private Limited at info@pstamarind.com.

## Contact

For inquiries or further information, please contact:

Maheshram Shunmuganand
maheshram.hs@gmail.com

---
