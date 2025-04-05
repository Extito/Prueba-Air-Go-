# Frontend de Air-fi

Esta es la aplicación frontend de Air-fi, construida con Angular.

## Requisitos previos

- Node.js (v16 o superior)
- Angular CLI (v15 o superior)
- Django (para la configuración del backend)

## Instalación

1. Copiar el repositorio.

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Instala Django para el backend:
    ```bash
    pip install django
    ```

## Configurar la base de datos MYSQL:
Crear una base de datos con el nombre air-fi

Configurar la base de datos en settings.py en backend
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  
        'NAME': 'air-fi',  
        'USER': 'Tu usuario',                 
        'PASSWORD': 'Tu contrseña',          
        'HOST': 'localhost',                  
        'PORT': 'Tu puerto',                       
    }
}
 ```
    python manage.py migrate
```
Crear el siguiente post en la base de datos o crear el post en la pagina web desde gestionar posts:

INSERT INTO blog_post (title, content, created_at)
VALUES (
    'Air-Go Surgery Area Manager',
    'Bienvenido a Air-Go RTLS SAM, el sistema integral y automatizado diseñado para facilitar la gestión en el bloque quirúrgico de su hospital. Descubra cómo nuestra avanzada tecnología de localización no solo optimiza los procesos, sino que también mejora la seguridad y la eficiencia en cada paso. Air-Go RTLS y Lean Health optimizan la eficiencia en el bloque quirúrgico mediante localización en tiempo real y lean management.',
    CURRENT_TIMESTAMP
);

## Requisitos de Django

Asegúrate de instalar los siguientes paquetes requeridos para Django.
```
asgiref==3.8.1
Django==5.2
django-cors-headers==4.7.0
djangorestframework==3.16.0
mysqlclient==2.2.7
PyMySQL==1.1.1
sqlparse==0.5.3
tzdata==2025.2
```

Luego, instala las dependencias ejecutando:

```bash
pip install -r requirements.txt
```
## Ejecutar la aplicación

1. Inicia el servidor de backend en cd backend:
    ```
    python manage.py runserver
    ```

2. Inicia el servidor de /frontend/browser:
    ```bash
    serve -s
    ```

3. Abre tu navegador y navega a:
    ```
    http://localhost:3000
    ```
