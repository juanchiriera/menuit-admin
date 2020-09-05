docker run --name menuit-admin-panel -p 8081:80 -d \
    -v ./build:/usr/share/nginx/html \
    -v ./container/default.conf:/etc/nginx/conf.d/default.conf \
    --network host \
    nginx

