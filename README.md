# Panel de administracion de Menuit

Creado con [React Admin Framework](https://marmelab.com/react-admin/).

Para poder correr una instancia local, es necesario correr el script ´run.sh´.

Para correrlo manualmente ejecutar los siguientes pasos:

1. Instalar Docker o Podman.
2. Descargar la imagen de nginx:

```sh
    #DOCKER
    docker pull nginx

    #PODMAN
    podman pull nginx
```
3. Nos paramos en el directorio raiz del proyecto.

```sh
    cd <root_directory>
```

4. Corremos el contenedor.

```sh
    #DOCKER
    docker run --name menuit-admin-panel -p 8081:80 -d \
        -v ./build:/usr/share/nginx/html \
        -v ./container/default.conf:/etc/nginx/conf.d/default.conf \
        --network host \
        nginx

    # PODMAN
    podman run --name menuit-admin-panel -p 8081:80 -d \
        -v ./build:/usr/share/nginx/html \
        -v ./container/default.conf:/etc/nginx/conf.d/default.conf \
        --network host \
        nginx
```